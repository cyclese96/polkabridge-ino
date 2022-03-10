import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Button } from "@material-ui/core/";
import { Link } from "react-router-dom";
import {
  getIsWhitelisted,
  getPoolDetails,
  getPoolList,
} from "../actions/smartActions";
import Loader from "../common/Loader";

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
    height: "60px",
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
    fontSize: 10,
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
    paddingTop: 20,
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

const PoolCard = ({ poolData, poolId, endedPool }) => {
  const classes = useStyles();

  const [poolDetail, setPoolDetail] = useState(null);
  const [isWhitelist, setIsWhitelist] = useState(false);

  useEffect(async () => {
    let poolResult = await getPoolDetails(poolId);
    let whitelistResult = await getIsWhitelisted(poolId);
    console.log("poolResult");
    console.log(poolResult);
    setPoolDetail(poolResult);
    setIsWhitelist(whitelistResult);
  }, []);
  return (
    <div className="col-12 col-md-6 mb-4">
      <Card elevation={10} className={classes.card}>
        {poolDetail && (
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
                  backgroundColor: "#C80C81",
                  borderRadius: "50%",
                  height: "5px",
                  width: "5px",
                  marginRight: 5,
                }}
              ></div>
              <div className={classes.earn}>
                {poolData.packageIds.length} NFT {poolData.type}
              </div>
            </div>

            <div className={classes.desktop}>
              <div className={classes.description}>{poolData.description}</div>
            </div>
            <div className="mt-2"></div>
            <div className={classes.detailsWrapper}>
              <div className={classes.detailTitle}>Start Date</div>
              <div className={classes.detailValue}>{poolData.startDate}</div>
            </div>

            <div className={classes.detailsWrapper}>
              <div className={classes.detailTitle}>Total NFTs on sell</div>
              <div className={classes.detailValue}>{poolData.quantity}</div>
            </div>
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
            {/* <div className={classes.detailsWrapper}>
              <div className={classes.detailTitle}>Type</div>
              <div className={classes.detailValue}>
                {poolDetail.Type === "1" ? "Public" : "Private"}
              </div>
            </div> */}
            <div className="text-center mt-3">
              {poolDetail.Type !== "1" && isWhitelist && (
                <Link to={`/pool-details/${poolId}`}>
                  <Button variant="contained" className={classes.joinButton}>
                    View
                  </Button>
                </Link>
              )}
              {poolDetail.Type !== "1" && !isWhitelist && (
                <Button variant="contained" className={classes.joinButton}>
                  Not Whitelisted
                </Button>
              )}
              {poolDetail.Type === "1" && (
                <Link to={`/pool-details/${poolId}`}>
                  <Button variant="contained" className={classes.joinButton}>
                    View
                  </Button>
                </Link>
              )}
            </div>
          </div>
        )}
        {!poolDetail && (
          <div>
            <Loader />
          </div>
        )}
      </Card>
    </div>
  );
};

export default PoolCard;

// poolDetail !== null &&
// poolDetail.IsStopped === endedPool && (
