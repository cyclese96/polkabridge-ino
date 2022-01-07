import { useEffect, useState } from "react";
import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Button, Dialog, Slide, Backdrop } from "@material-ui/core/";
import { Link } from "react-router-dom";
import {
  getPackageDetails,
  getRemainINOToken,
  userPurchaseDetails,
} from "../actions/smartActions";
import packages from "../data/packagesData";
import { getUserAddress } from "../actions/web3Actions";
import inoContract from "./../utils/inoConnection";
import TxPopup from "./../common/TxPopup";
import PurchaseModal from "./PurchaseModal";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
    maxWidth: 340,
    minHeight: 421,
    borderRadius: 30,
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
      width: "fit-content",
      fontSize: 13,
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
      width: "fit-content",
      fontSize: 13,
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
      width: "fit-content",
      fontSize: 13,
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
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SingleNftCard = ({ packageId, endTime }) => {
  const classes = useStyles();

  const [remainToken, setRemainToken] = useState(null);
  const [packageDetail, setPackageDetail] = useState({});
  const [userPurchaseDetail, setUserPurchaseDetail] = useState(null);
  const [isClaimed, setIsClaimed] = useState(false);
  const [isPurchased, setIsPurchased] = useState(false);
  const [popup, setPopup] = useState(false);
  const [purchaseCase, setPurchaseCase] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [end, setEnd] = useState(false);

  useEffect(async () => {
    let result = await getPackageDetails(packageId);
    let resultRemainToken = await getRemainINOToken(packageId);
    let userPurchaseResult = await userPurchaseDetails(packageId);

    setUserPurchaseDetail(userPurchaseResult);
    setIsPurchased(parseInt(userPurchaseResult.PurchasedItemCount) > 0);
    setIsClaimed(userPurchaseResult.IsClaimed);

    console.log(userPurchaseResult);

    let timeToEnd = endTime * 1000 - Date.now();
    console.log(timeToEnd);
    if (timeToEnd < 0) {
      setEnd(true);
    }
    setPackageDetail(result);
    setRemainToken(resultRemainToken);
  }, []);

  const PurchasePopup = () => {
    setPopup(true);
    setPurchaseCase(1);
  };
  const claimPopup = async () => {
    setPopup(true);
    setPurchaseCase(3);

    let userAddress = await getUserAddress();

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

    let userAddress = await getUserAddress();
    let amount = parseInt(quantity) / parseInt(packageDetail.RatePerETH);

    const response = await inoContract.methods
      .purchaseINO(packageId, quantity)
      .send(
        {
          from: userAddress,
          value: 1000000000000000000 * parseFloat(amount),
          gasPrice: 25000000000,
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
      })
      .on("error", async function (error) {
        setPurchaseCase(6);
      });
  };

  const resetPopup = () => {
    setPopup(false);
    setPurchaseCase(0);
  };

  return (
    <div>
      <Card elevation={10} className={classes.card}>
        <div style={{ width: "100%" }}>
          <div
            style={{
              minHeight: 240,
              paddingLeft: 10,
              paddingRight: 10,
              backgroundImage: `url(${packages[packageId].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: 20,
              border: "8px solid #212121",
            }}
          ></div>

          <div className="d-flex justify-content-center align-items-center pt-2 pb-1">
            <img className={classes.avatar} />
            <small
              style={{
                color: "#f9f9f9",
                marginLeft: 10,
                fontSize: 18,
              }}
            >
              {packages[packageId].title}
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
              By {packages[packageId].poolName}
            </div>
          </div>

          <div className={classes.desktop}></div>
          <div className={classes.detailsWrapper}>
            <div className={classes.detailTitle}>Items remaining</div>
            <div className={classes.detailValue}>
              {remainToken && remainToken}/
              {packageDetail.TotalItemCount && packageDetail.TotalItemCount}
            </div>
          </div>
          <div className={classes.detailsWrapper}>
            <div className={classes.detailTitle}>Price</div>
            <div className={classes.detailValue}>
              {packages[packageId].price} {packages[packageId].currency} / NFT
            </div>
          </div>

          <div className={classes.detailsWrapper}>
            <div className={classes.detailTitle}>Minimum Purchase</div>
            <div className={classes.detailValue}>
              {" "}
              {packageDetail.MinimumTokenSoldout &&
                packageDetail.MinimumTokenSoldout}
            </div>
          </div>
          <div className="mt-3 px-2">
            <div className="d-flex justify-content-center">
              <small className={classes.lastPrice}>
                {packageDetail.RatePerETH && 1 / packageDetail.RatePerETH}{" "}
                {packages[packageId].currency + " "} / Item + gas fees
              </small>
            </div>
            <div className="text-center mt-3">
              {!end && (
                <Button
                  variant="contained"
                  className={classes.joinButton}
                  onClick={PurchasePopup}
                >
                  Purchase
                </Button>
              )}

              {end && !isClaimed && !isPurchased && (
                <Button variant="contained" className={classes.noPurchase}>
                  You did not purchase
                </Button>
              )}
              {end && !isClaimed && isPurchased && (
                <Button
                  variant="contained"
                  className={classes.joinButton}
                  onClick={claimPopup}
                >
                  Claim Tokens
                </Button>
              )}
              {end && isClaimed && isPurchased && (
                <Button
                  variant="contained"
                  className={classes.claimedButton}
                  onClick={null}
                >
                  Tokens Claimed
                </Button>
              )}
            </div>
          </div>

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
                    packageDetail.TotalItemCount - packageDetail.TotalSoldCount
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
      </Card>
    </div>
  );
};

export default SingleNftCard;
