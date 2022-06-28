import { useEffect, useState } from "react";
import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Button, Dialog, Slide, Backdrop } from "@material-ui/core/";
import { Link } from "react-router-dom";
import {
  getPackageDetails,
  getRemainINOToken,
  userPurchaseDetails,
  userPurchasedQtyByPackageId,
} from "../actions/smartActions";
import packages from "../data/packagesData";
import packagesBsc from "../data/packagesBsc";
import inoContract from "./../utils/inoConnection";
import TxPopup from "./../common/TxPopup";
import PurchaseModal from "./PurchaseModal";
import web3 from "web3";
import Loader from "../common/Loader";
import Timer from "../common/Timer";
import { useWeb3React } from "@web3-react/core";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
    maxWidth: 340,
    minHeight: 421,
    borderRadius: 20,
    backgroundColor: "rgba(41, 42, 66, 0.1)",
    border: "1px solid #212121",
    filter: "drop-shadow(0 0 0.5rem #212121)",
    border: "1px solid #212121",

    paddingBottom: 15,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      paddingRight: 0,
      width: "100%",
      height: "100%",
    },
  },

  avatar: {
    height: "35px",
  },

  lastPrice: {
    fontWeight: 500,
    fontSize: 13,
    color: "#e5e5e5",
    padding: 8,
    border: "1px solid #C80C81",
    borderRadius: 15,
  },

  tokenAmount: {
    fontWeight: 700,
    padding: 0,
    paddingLeft: 10,
    fontSize: 16,
    color: "#C80C81",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  earn: {
    textAlign: "center",
    color: "#bdbdbd",
    fontSize: 10,
  },
  desktop: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row",
    },
  },
  joinButton: {
    background: `#E0247D`,
    color: "white",
    width: "fit-content",
    height: 40,
    textTransform: "none",
    borderRadius: 30,
    fontSize: 15,
    marginRight: 5,
    marginLeft: 5,
    border: "1px solid rgba(224, 7, 125, 0.3)",
    padding: "5px 20px 5px 20px",
    "&:hover": {
      background: "rgba(224, 7, 125, 0.7)",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      fontSize: 15,
    },
  },
  claimedButton: {
    background: `green`,
    color: "white",
    width: "fit-content",
    height: 40,
    textTransform: "none",
    borderRadius: 30,
    fontSize: 15,
    marginRight: 5,
    marginLeft: 5,
    border: "1px solid rgba(224, 7, 125, 0.3)",
    padding: "5px 20px 5px 20px",
    "&:hover": {
      background: "rgba(224, 7, 125, 0.7)",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      fontSize: 15,
    },
  },
  noPurchase: {
    background: `#414141`,
    color: "white",
    width: "fit-content",
    height: 40,
    textTransform: "none",
    borderRadius: 30,
    fontSize: 15,
    marginRight: 5,
    marginLeft: 5,
    border: "1px solid #757575",
    padding: "5px 20px 5px 20px",
    "&:hover": {
      background: "rgba(224, 7, 125, 0.7)",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      fontSize: 15,
    },
  },
  detailsWrapper: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailTitle: {
    fontWeight: 500,
    fontSize: 13,
    color: "#e5e5e5",
  },
  detailValue: {
    fontWeight: 500,
    padding: 0,

    fontSize: 13,
    color: "#e5e5e5",
  },

  description: {
    fontWeight: 500,
    padding: 0,
    paddingTop: 10,
    paddingLeft: 10,
    fontSize: 13,
    paddingBottom: 3,
    color: "#e5e5e5",
    textAlign: "justify",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SingleNftCard = ({ packageId, endTime, itemId, poolDetailLocal }) => {
  const classes = useStyles();

  const [remainToken, setRemainToken] = useState(null);
  const [packageDetail, setPackageDetail] = useState(null);
  const [userPurchaseDetail, setUserPurchaseDetail] = useState(null);
  const [isClaimed, setIsClaimed] = useState(false);
  const [isPurchased, setIsPurchased] = useState(false);
  const [popup, setPopup] = useState(false);
  const [purchaseCase, setPurchaseCase] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [end, setEnd] = useState(false);
  const [quantityBought, setQuantityBought] = useState(0);
  const [loading, setLoading] = useState(false);
  const [refetch, setRefetch] = useState(0);

  const { active, account, chainId } = useWeb3React();

  const actualPackages =
    poolDetailLocal.currency === "ETH" ? packages : packagesBsc;

  useEffect(async () => {
    let result = await getPackageDetails(packageId, poolDetailLocal.chainId);
    let resultRemainToken = await getRemainINOToken(
      packageId,
      poolDetailLocal.chainId
    );
    if (account) {
      let userPurchaseResult = await userPurchaseDetails(
        packageId,
        account,
        poolDetailLocal.chainId
      );
      let quantity = await userPurchasedQtyByPackageId(
        packageId,
        account,
        poolDetailLocal.chainId
      );

      console.log(result);
      // console.log(resultRemainToken);
      // console.log(userPurchaseResult);
      // console.log(quantity);
      setQuantityBought(parseInt(userPurchaseResult.PurchasedItemCount));
      setUserPurchaseDetail(userPurchaseResult);
      setIsPurchased(parseInt(userPurchaseResult.PurchasedItemCount) > 0);
      setIsClaimed(userPurchaseResult.IsClaimed);

      let timeToEnd = endTime * 1000 - Date.now();

      if (timeToEnd < 0) {
        setEnd(true);
      }

      setLoading(false);
    }
    setRemainToken(resultRemainToken);
    setPackageDetail(result);
  }, [active, account, refetch]);

  const PurchasePopup = () => {
    setPopup(true);
    setPurchaseCase(1);
  };
  const claimPopup = async () => {
    setPopup(true);
    setPurchaseCase(3);

    let userAddress = account;

    const response = await inoContract.methods
      .claimPool(packageId)
      .send(
        { from: userAddress, gasPrice: 10000000000 },
        async function (error, transactionHash) {
          if (transactionHash) {
            setPurchaseCase(5);
          } else {
            setPurchaseCase(4);
          }
        }
      )
      .on("receipt", async function (receipt) {
        setPurchaseCase(7);
      })
      .on("error", async function (error) {
        setPurchaseCase(6);
      });
  };

  const purchasePackage = async () => {
    setPopup(true);
    setPurchaseCase(3);

    let userAddress = account;

    let priceInEth =
      1 / parseFloat(web3.utils.fromWei(packageDetail.RatePerETH, "ether"));
    console.log(priceInEth);
    let amount = parseInt(quantity) * priceInEth;
    console.log(amount);

    let finalValue = web3.utils.toWei(amount.toString(), "ether");

    console.log(finalValue);
    console.log(packageId);
    console.log(quantity);
    const response = await inoContract.methods
      .purchaseINO(packageId, quantity)
      .send(
        {
          from: userAddress,
          // value: amount.toString(),
          value: finalValue.toString(),
        },
        async function (error, transactionHash) {
          if (transactionHash) {
            setPurchaseCase(5);
          } else {
            setPurchaseCase(4);
          }
        }
      )
      .on("receipt", async function (receipt) {
        setPurchaseCase(7);
        setRefetch(refetch + 1);
      })
      .on("error", async function (error) {
        setPurchaseCase(6);
      });
  };

  const resetPopup = () => {
    setPopup(false);
    setPurchaseCase(0);
  };

  const disablePurchase = () => {
    if (actualPackages[packageId]) {
      let date = actualPackages[packageId].startDate;

      const date1 = new Date(date).getTime(); // Begin Time
      const date2 = Date.now(); // Current Time

      console.log(date);
      console.log(date2);
      const diffTime = date1 - date2;

      if (diffTime > 0) {
        // console.log("disable false");
        return true;
      } else {
        // console.log("disable true");

        return false;
      }
    }
  };

  return (
    <div>
      <Card elevation={10} className={classes.card}>
        <div>
          {actualPackages[itemId] && (
            <div style={{ width: "100%" }}>
              <div
                style={{
                  minHeight: 180,
                  paddingLeft: 0,
                  paddingRight: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // backgroundImage: `url(${packages[packageId].image})`,
                  // backgroundSize: "cover",
                  // backgroundPosition: "center",
                  borderTopRightRadius: 20,
                  borderTopLeftRadius: 20,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  border: "3px solid rgba(187, 85, 181, 0.1)",
                }}
              >
                <img
                  src={actualPackages[itemId].image}
                  style={{ height: 150, width: "fit-content" }}
                />
              </div>
              {loading && (
                <div className="text-center">
                  <Loader height={200} />
                </div>
              )}
              {!loading && (
                <div>
                  <div className="d-flex justify-content-center align-items-center pt-2 pb-1">
                    <img className={classes.avatar} />
                    <small
                      style={{
                        color: "#f9f9f9",
                        marginLeft: 10,
                        fontSize: 18,
                      }}
                    >
                      {actualPackages[itemId].title}
                    </small>
                  </div>
                  <div className="d-flex justify-content-center align-items-center ">
                    <div
                      style={{
                        backgroundColor: "#C80C81",
                        borderRadius: "50%",
                        height: "5px",
                        width: "5px",
                        marginRight: 5,
                      }}
                    ></div>
                    <div className={classes.earn}>
                      By {actualPackages[itemId].poolName}
                    </div>
                  </div>

                  <div className={classes.desktop}></div>
                  <div className={classes.description}>
                    {actualPackages[itemId].description}
                  </div>
                  {packageDetail && (
                    <div>
                      <div className={classes.detailsWrapper}>
                        <div className={classes.detailTitle}>
                          Items remaining
                        </div>
                        <div className={classes.detailValue}>
                          {remainToken && remainToken}/
                          {packageDetail.TotalItemCount &&
                            packageDetail.TotalItemCount}
                        </div>
                      </div>
                      <div className={classes.detailsWrapper}>
                        <div className={classes.detailTitle}>Price</div>
                        <div className={classes.detailValue}>
                          {(
                            1 /
                            parseFloat(
                              web3.utils.fromWei(
                                packageDetail.RatePerETH,
                                "ether"
                              )
                            )
                          ).toFixed(3)}{" "}
                          {actualPackages[itemId].currency}
                          {/* {actualPackages[itemId].price}
                      {""} {actualPackages[itemId].currency} */}
                        </div>
                      </div>

                      <div className={classes.detailsWrapper}>
                        <div className={classes.detailTitle}>
                          Minimum Purchase
                        </div>
                        <div className={classes.detailValue}>
                          {" "}
                          {packageDetail.MinimumTokenSoldout &&
                            packageDetail.MinimumTokenSoldout}
                        </div>
                      </div>
                      <div
                        className="text-center mt-3"
                        style={{ color: "green", fontSize: 12, minHeight: 30 }}
                      >
                        {parseInt(quantityBought) > 0 && (
                          <span>You have purchased {quantityBought} NFTs.</span>
                        )}
                      </div>
                      <div className="mt-3 px-2">
                        {active && (
                          <div className="text-center mt-3">
                            {poolDetailLocal.chainId.includes(chainId) ? (
                              <div>
                                {disablePurchase() ? (
                                  <div className="mt-3 px-2">
                                    <div className="text-center mt-3">
                                      <div className="mt-1">
                                        <div
                                          style={{
                                            color: "white",
                                            paddingBottom: 4,
                                          }}
                                        >
                                          ~ Sell starts in ~{" "}
                                        </div>
                                        <Timer
                                          endTime={
                                            actualPackages[itemId].startDate
                                          }
                                        />
                                      </div>
                                    </div>
                                  </div>
                                ) : (
                                  <div className="mt-2 px-3">
                                    {!end && (
                                      <Button
                                        variant="contained"
                                        className={classes.joinButton}
                                        onClick={PurchasePopup}
                                      >
                                        Purchase
                                      </Button>
                                    )}
                                  </div>
                                )}
                                {end && !isClaimed && !isPurchased && (
                                  <Button
                                    variant="contained"
                                    className={classes.noPurchase}
                                  >
                                    Sell Ended
                                  </Button>
                                )}
                                {end && !isClaimed && isPurchased && (
                                  <Link to="/profile">
                                    <Button
                                      variant="contained"
                                      className={classes.joinButton}
                                      // onClick={claimPopup}
                                    >
                                      Claim Tokens
                                    </Button>
                                  </Link>
                                )}
                              </div>
                            ) : (
                              <div>
                                {" "}
                                <Button
                                  variant="contained"
                                  className={classes.noPurchase}
                                >
                                  Wrong Network
                                </Button>
                              </div>
                            )}

                            {/* {end && isClaimed && isPurchased && (
                    <Button
                      variant="contained"
                      className={classes.claimedButton}
                      onClick={null}
                    >
                      Tokens Claimed
                    </Button>
                  )} */}
                          </div>
                        )}

                        {!active && (
                          <div className="text-center mt-3">
                            <Button
                              variant="contained"
                              className={classes.joinButton}
                            >
                              Connect Wallet First
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}

              <Dialog
                className={classes.modal}
                open={popup}
                TransitionComponent={Transition}
                keepMounted={false}
                onClose={() => setPopup(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
                PaperProps={{
                  style: {
                    borderRadius: 10,
                    backgroundColor: "black",
                    border: "4px solid #212121",
                  },
                }}
              >
                <div
                  style={{
                    backgroundColor: "black",
                    borderRadius: 3,
                    overflowX: "hidden",
                  }}
                >
                  {purchaseCase === 1 && (
                    <PurchaseModal
                      purchasePackage={purchasePackage}
                      resetPopup={resetPopup}
                      setQuantity={setQuantity}
                      maxPurchase={
                        packageDetail.TotalItemCount -
                        packageDetail.TotalSoldCount
                      }
                      minQuantity={packageDetail.MinimumTokenSoldout}
                    />
                  )}

                  {purchaseCase != 1 && (
                    <TxPopup txCase={purchaseCase} resetPopup={resetPopup} />
                  )}
                </div>
              </Dialog>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default SingleNftCard;
