import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Button } from "@material-ui/core/";
import { Link } from "react-router-dom";
import { userPurchaseDetails } from "../../../actions/smartActions";
import packages from "../../../data/packagesData";
import dateFormat, { masks } from "dateformat";
import web3 from "../../../web";

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

const ProfileNftCard = ({ packageId }) => {
  const classes = useStyles();

  const [userPurchaseDetail, setUserPurchaseDetail] = useState(null);

  useEffect(async () => {
    let userPurchaseResult = await userPurchaseDetails(packageId);
    console.log(userPurchaseResult);
    setUserPurchaseDetail(userPurchaseResult);
  }, []);

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
              src={packages[packageId].image}
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
            <div className={classes.earn}>{packages[packageId].poolName}</div>
          </div>

          <div className={classes.desktop}></div>
          {userPurchaseDetail !== null && (
            <div>
              <div className={classes.detailsWrapper}>
                <div className={classes.detailTitle}>Total Cost</div>
                <div className={classes.detailValue}>
                  {parseFloat(
                    web3.utils.fromWei(
                      userPurchaseDetail.TotalETHPurchase,
                      "ether"
                    )
                  ).toFixed(2)}
                  {" " + packages[packageId].currency}
                </div>
              </div>

              <div className={classes.detailsWrapper}>
                <div className={classes.detailTitle}>Quantity</div>
                <div className={classes.detailValue}>
                  {userPurchaseDetail.PurchasedItemCount}
                </div>
              </div>
              <div className={classes.detailsWrapper}>
                <div className={classes.detailTitle}>Purchase Time</div>
                <div className={classes.detailValue}>
                  {dateFormat(
                    Date(parseInt(userPurchaseDetail.PurchaseTime)),
                    " mmmm dS, yyyy"
                  )}
                </div>
              </div>
              <div className="mt-3 px-2">
                {userPurchaseDetail.IsClaimed && (
                  <div className="text-center mt-3">
                    <Button variant="contained" className={classes.joinButton}>
                      View on OpenSea
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
                      >
                        Claim Your NFT
                      </Button>
                    )}
                    {packages[packageId].claimType === "MANUAL" && (
                      <a href="htpps://google.com" target="_blank">
                        <Button
                          variant="contained"
                          className={classes.joinButton}
                        >
                          Claim Your NFT
                        </Button>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default ProfileNftCard;
