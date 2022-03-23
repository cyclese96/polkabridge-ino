import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Button } from "@material-ui/core/";
import { Link } from "react-router-dom";
import {
  getInitialBalanceOfPool,
  getIsWhitelisted,
  getPoolDetails,
  getPoolList,
  getRemainingQuantityOfPool,
} from "../actions/smartActions";
import { connect } from "react-redux";
import { checkAuthenticated } from "./../actions/authActions";
import Loader from "../common/Loader";
import ProgressStatsBar from "../common/ProgressStatsBar";
import Timer from "../common/Timer";
import {
  checkCorrectNetwork,
  checkWalletAvailable,
  getUserAddress,
} from "../actions/web3Actions";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
    height: "100%",
    maxWidth: 400,
    minWidth: 340,
    minHeight: 400,
    borderRadius: 30,
    backgroundColor: "rgba(41, 42, 66, 0.3)",
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

  logo: {
    height: "40px",
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

  earn: {
    textAlign: "center",
    color: "#bdbdbd",
    fontSize: 11,
  },
  desktop: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    minHeight: 90,
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
    fontWeight: 500,
    marginRight: 5,
    marginLeft: 5,
    width: "80%",
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
    paddingTop: 12,
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

  category: {
    fontSize: 13,
    width: "fit-content",
    padding: "2px 5px 2px 5px",
    color: "white",
    fontWeight: 300,

    margin: 0,
    padding: 0,
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
    },
  },

  categoryValue: {
    fontSize: 13,
    width: "fit-content",
    padding: "2px 5px 2px 5px",
    color: "#f9f9f9",
    fontWeight: 300,

    margin: 0,
    padding: 0,
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
    },
  },
  wrapper: {
    paddingTop: 7,
    paddingBottom: 7,
  },
  powerWrapper: {
    paddingTop: 5,
    paddingBottom: 5,
    color: "grey",
    fontSize: 12,
  },
}));

const PoolCard = ({ poolData, poolId, endedPool, authenticated }) => {
  const classes = useStyles();

  const [poolDetail, setPoolDetail] = useState(null);
  const [isWhitelist, setIsWhitelist] = useState(false);
  const [remaining, setRemaining] = useState(0);
  const [initial, setInitial] = useState(0);

  useEffect(() => {
    async function asyncFn() {
      let walletStatus = await checkWalletAvailable();
      if (walletStatus) {
        const networkStatus = await checkCorrectNetwork();

        if (networkStatus) {
          let authStatus = await checkAuthenticated();

          if (authStatus) {
            let userAddress = await getUserAddress();
            console.log(userAddress);
          } else {
          }
        } else {
          console.log("hello1");
        }
      } else {
        console.log("hello 2");
      }
    }

    asyncFn();
  }, [checkAuthenticated]);

  useEffect(async () => {
    if (authenticated) {
      console.log("hello");
      let poolResult = await getPoolDetails(poolId);
      console.log(poolResult);
      let whitelistResult = await getIsWhitelisted(poolId);
      let remainingQuantity = await getRemainingQuantityOfPool(poolId);
      let initialQuantity = await getInitialBalanceOfPool(poolId);
      setInitial(initialQuantity);

      setRemaining(remainingQuantity);
      console.log("poolResult");
      setPoolDetail(poolResult);
      setIsWhitelist(whitelistResult);
    }
  }, [authenticated]);

  const disableView = () => {
    if (poolDetail) {
      const date1 = parseInt(poolDetail.Begin) * 1000; // Begin Time
      const date2 = Date.now(); // Current Time

      const diffTime = date1 - date2;
      // console.log("diffTime");
      // console.log(date1);
      // console.log(date2);
      // console.log(diffTime);
      if (diffTime > 0) {
        // console.log("true hai bhai");
        return true;
      } else {
        // console.log("false hai bhai");

        return false;
      }
    }
  };
  const percentageSell = () => {
    let numerator = initial - remaining;
    console.log(numerator);

    let fraction = numerator / initial;
    console.log(fraction);
    return (fraction * 100).toFixed(1);
  };
  return (
    <div className="col-12 col-md-6 mb-4">
      {console.log(poolData)}
      <Card elevation={10} className={classes.card}>
        <div style={{ width: "100%" }}>
          <div className="text-center my-3">
            <img className={classes.logo} src={poolData.image} />
          </div>
          <div
            style={{
              color: "#f9f9f9",
              fontWeight: 600,
              fontSize: 20,
              textAlign: "center",
            }}
          >
            {poolData.title}
          </div>

          <div className="d-flex justify-content-center align-items-center ">
            <div
              style={{
                // backgroundColor: poolDetail.IsActived ? "green" : "red",
                backgroundColor: "green",

                borderRadius: "50%",
                height: "5px",
                width: "5px",
                marginRight: 5,
              }}
            ></div>
            <div
              className={classes.earn}
              // style={{ color: poolDetail.IsActived ? "green" : "red" }}
              style={{ color: "green" }}
            >
              {" "}
              {/* {poolDetail.IsActived ? "Active" : "Inactive"} */}
              Active
            </div>
          </div>

          <div className={classes.desktop}>
            <div className={classes.description}>
              {/* {poolData.description} */}

              {poolData.description &&
                poolData.description.slice(0, 200) +
                  (poolData.description.length > 200 ? "..." : "")}
            </div>
          </div>
          <div>
            {!authenticated && (
              <div className="text-center my-2" style={{ color: "red" }}>
                Connect Your Wallet First
              </div>
            )}
          </div>
          {authenticated && (
            <div>
              {disableView() ? (
                <div className="mt-3 px-2">
                  <div className="text-center mt-3">
                    <div className="mt-1">
                      <div style={{ color: "white", paddingBottom: 4 }}>
                        ~ Starts in ~{" "}
                      </div>
                      <Timer endTime={poolData.startDate} />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mt-2 px-3">
                  <div className={classes.wrapper}>
                    <div className="d-flex justify-content-between">
                      <h6 htmlFor="category" className={classes.category}>
                        Progress
                      </h6>
                      <h6 htmlFor="category" className={classes.categoryValue}>
                        {percentageSell()}%
                      </h6>
                    </div>

                    <div htmlFor="power" className={classes.powerWrapper}>
                      <ProgressStatsBar
                        color="green"
                        value={initial - remaining}
                        maxValue={initial}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          <div className={classes.detailsWrapper}>
            <div className={classes.detailTitle}>Start Date</div>
            <div className={classes.detailValue}>{poolData.startDate}</div>
          </div>
          {authenticated && remaining > 0 && (
            <div>
              <div className={classes.detailsWrapper}>
                <div className={classes.detailTitle}>Total NFTs on sell</div>
                <div className={classes.detailValue}>{initial}</div>
              </div>
              <div className={classes.detailsWrapper}>
                <div className={classes.detailTitle}>Remaining Quantity</div>
                <div className={classes.detailValue}>{remaining}</div>
              </div>
            </div>
          )}

          <div className={classes.detailsWrapper}>
            <div className={classes.detailTitle}>Price</div>
            <div className={classes.detailValue}>
              {poolData.price} {poolData.currency}
            </div>
          </div>
          <div className={classes.detailsWrapper}>
            <div className={classes.detailTitle}>Network</div>
            <div className={classes.detailValue}>{poolData.network}</div>
          </div>

          <div className="text-center mt-3">
            {/* {poolData.poolType !== "1" && isWhitelist && (
              <div>
                <Link to={`/pool-details/${poolId}`}>
                  <Button variant="contained" className={classes.joinButton}>
                    View
                  </Button>
                </Link>
              </div>
            )} */}
            {/* {poolData.poolType !== "1" && !isWhitelist && (
              <Button variant="contained" className={classes.joinButton}>
                Not Whitelisted
              </Button>
            )} */}
            {poolData.poolType === "1" && (
              <div>
                {authenticated ? (
                  <Link to={`/pool-details/${poolId}`}>
                    <Button variant="contained" className={classes.joinButton}>
                      View
                    </Button>
                  </Link>
                ) : (
                  <Button variant="contained" className={classes.joinButton}>
                    View
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
});

const mapDispatchToProps = {
  checkAuthenticated,
};
export default connect(mapStateToProps, mapDispatchToProps)(PoolCard);
