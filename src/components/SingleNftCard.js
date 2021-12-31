import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Button } from "@material-ui/core/";
import { Link } from "react-router-dom";
import { getPackageDetails, getRemainINOToken } from "../actions/smartActions";
import packages from "../data/packagesData";

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

const SingleNftCard = ({ packageId }) => {
  const classes = useStyles();

  const [remainToken, setRemainToken] = useState(null);
  const [packageDetail, setPackageDetail] = useState({});

  useEffect(async () => {
    let result = await getPackageDetails(1);
    let resultRemainToken = await getRemainINOToken(packageId);
    setPackageDetail(result);
    setRemainToken(resultRemainToken);
    console.log(result);
    console.log(resultRemainToken);
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
              backgroundImage: `url(${packages[packageId].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
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
            <div className={classes.earn}>By AvatarPool</div>
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
              {packageDetail.RatePerETH && packageDetail.RatePerETH} Tokens /
              BNB
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
              <img
                src="https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912"
                height="14px"
                style={{ marginTop: 2, marginRight: 5 }}
              />
              <small className={classes.lastPrice}>
                {packages[packageId].price} {packages[packageId].currency}/ NFT
                + gas Fees
              </small>
            </div>
            <div className="text-center mt-3">
              <Link to="/pool-details">
                <Button variant="contained" className={classes.joinButton}>
                  Purchase
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SingleNftCard;
