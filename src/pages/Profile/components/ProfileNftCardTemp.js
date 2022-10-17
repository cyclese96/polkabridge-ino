import * as React from "react";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import inoContract from "./../../../utils/inoConnection";
import { Link } from "react-router-dom";
import { userPurchaseDetails } from "../../../actions/smartActions";
import packages from "../../../data/packagesData";
import packagesBsc from "../../../data/packagesBsc";
import dateFormat, { masks } from "dateformat";
import web3 from "../../../web";
import { Card, Button, Dialog, Slide, Backdrop } from "@material-ui/core/";
import TxPopup from "../../../common/TxPopup";
import Timer from "../../../common/Timer";
import { useWeb3React } from "@web3-react/core";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
    maxWidth: 340,

    minHeight: 320,
    borderRadius: 30,
    backgroundColor: "rgba(41, 42, 66, 0.1)",
    border: "1px solid #212121",
    filter: "drop-shadow(0 0 0.5rem #212121)",
    border: "1px solid #212121",
    paddingBottom: 15,
    marginBottom: 10,
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
    padding: 0,
    paddingRight: 10,
    fontSize: 13,
    paddingBottom: 3,
    color: "#e5e5e5",
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

const ProfileNftCardTemp = ({ packageId, chainIds, currency, qty }) => {
  const classes = useStyles();

  const [userPurchaseDetail, setUserPurchaseDetail] = useState(null);
  const [popup, setPopup] = useState(false);
  const [claimCase, setClaimCase] = useState(0);

  const { active, account, chainId } = useWeb3React();

  const actualPackages = currency === "ETH" ? packages : packagesBsc;

  useEffect(async () => {
    let userPurchaseResult = await userPurchaseDetails(
      packageId,
      account,
      chainIds
    );

    console.log(userPurchaseResult);
    setUserPurchaseDetail(userPurchaseResult);
  }, []);

  const claimPopup = async () => {
    setPopup(true);
    setClaimCase(3);

    const response = await inoContract.methods
      .claimPool(packageId)
      .send({ from: account }, async function (error, transactionHash) {
        if (transactionHash) {
          setClaimCase(5);
        } else {
          setClaimCase(4);
        }
      })
      .on("receipt", async function (receipt) {
        setClaimCase(7);
      })
      .on("error", async function (error) {
        setClaimCase(6);
      });
  };

  const resetPopup = () => {
    setPopup(false);
    setClaimCase(0);
  };

  const enableClaim = () => {
    let date = actualPackages[packageId].claimTime;
    const date1 = new Date(date).getTime(); // Claim Time
    const date2 = Date.now(); // Current Time

    const diffTime = date1 - date2;
    if (diffTime > 0) {
      return false;
    } else {
      return true;
    }
  };

  const formatDate = (timestamp) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    var date = new Date(parseInt(timestamp) * 1000);
    console.log(date);
    let dateString =
      date.getDate() + "-" + months[date.getMonth()] + "-" + date.getFullYear();

    return dateString;
  };
  return (
    <div>
      <Card elevation={10} className={classes.card}>
        <div style={{ width: "100%" }}>
          <div
            style={{
              minHeight: 180,
              paddingLeft: 10,
              paddingRight: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              border: "3px solid rgba(187, 85, 181, 0.1)",
            }}
          >
            <img
              src={actualPackages[packageId].image}
              style={{ height: 150, width: "fit-content" }}
            />
          </div>
          <div className="d-flex justify-content-center align-items-center pt-2 pb-1">
            <img className={classes.avatar} />
            <small
              style={{
                color: "#f9f9f9",
                marginLeft: 10,
                fontSize: 18,
              }}
            >
              {actualPackages[packageId].title}
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
              {actualPackages[packageId].poolName}
            </div>
          </div>

          <div className={classes.desktop}></div>
          {userPurchaseDetail !== null && (
            <div>
              <div className={classes.detailsWrapper}>
                <div className={classes.detailTitle}>Total Cost</div>
                <div className={classes.detailValue}>{qty * 0.1} ETH</div>
              </div>

              <div className={classes.detailsWrapper}>
                <div className={classes.detailTitle}>Quantity</div>
                <div className={classes.detailValue}>{qty}</div>
              </div>

              {console.log(actualPackages[packageId])}
              <div className={classes.detailsWrapper}>
                <div className={classes.detailTitle}>Claim Time</div>
                <div className={classes.detailValue}>
                  {actualPackages[packageId].claimTime}
                </div>
              </div>
              {console.log(enableClaim())}
              {enableClaim() && (
                <div className="mt-3 px-2">
                  {userPurchaseDetail.IsClaimed && (
                    <div className="text-center mt-3">
                      <Button
                        variant="contained"
                        className={classes.joinButton}
                      >
                        You've Claimed
                      </Button>
                    </div>
                  )}
                  {!userPurchaseDetail.IsClaimed && (
                    <div className="text-center mt-3">
                      {" "}
                      {packages[packageId].claimType === "AUTO" && (
                        <Button
                          variant="contained"
                          className={classes.joinButton}
                          onClick={claimPopup}
                        >
                          Claim Your NFT
                        </Button>
                      )}
                      {packages[packageId].claimType === "MANUAL" && (
                        <a href="https://ino.fota.io/" target="_blank">
                          <Button
                            variant="contained"
                            className={classes.joinButton}
                          >
                            View Your NFT
                          </Button>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              )}
              {!enableClaim() && (
                <div className="mt-3 px-2">
                  <div className="text-center mt-3">
                    <div className={classes.detailTitle}>Time in claim</div>
                    <div className="mt-1">
                      <Timer endTime={actualPackages[packageId].claimTime} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </Card>
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
          {claimCase !== 1 && (
            <TxPopup txCase={claimCase} resetPopup={resetPopup} />
          )}
        </div>
      </Dialog>
    </div>
  );
};

export default ProfileNftCardTemp;
