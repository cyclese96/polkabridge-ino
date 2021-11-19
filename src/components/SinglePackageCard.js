import * as React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Card, Button } from "@material-ui/core/";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
    maxWidth: 340,
    minHeight: 421,
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
  textTitle: {
    fontWeight: 500,
    padding: 0,
    paddingLeft: 5,
    fontSize: 14,
    color: "#bdbdbd",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  textValue: {
    fontWeight: 500,
    padding: 0,
    paddingLeft: 10,
    fontSize: 14,
    color: "#e5e5e5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  earn: {
    textAlign: "center",
    color: "#bdbdbd",
    fontSize: 10,
  },
  detailsFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
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
}));

const SinglePackageCard = () => {
  const classes = useStyles();

  return (
    <div>
      <Card elevation={10} className={classes.card}>
        <div style={{ width: "100%" }}>
          <div
            style={{
              minHeight: 240,
              paddingLeft: 10,
              paddingRight: 10,
              backgroundImage: `url('https://i.gadgets360cdn.com/large/cryptopunks_9_punks_larva_labs_nfts_christies_auction_1620822356131.jpg')`,
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
              CryptoPunt NFT Pack
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
            <div className={classes.earn}>By Shoefy</div>
          </div>

          <div className={classes.detailsFlex}>
            <div className={classes.textTitle}>Package Price</div>
            <div className={classes.textValue}>50 PBR</div>
          </div>
          <div className={classes.detailsFlex}>
            <div className={classes.textTitle}>Tokens in Package</div>
            <div className={classes.textValue}>1000 Shoe</div>
          </div>
          <div className={classes.detailsFlex}>
            <div className={classes.textTitle}>Package Supply</div>
            <div className={classes.textValue}>9,846/10,000</div>
          </div>
          <div className="text-center mt-4">
            <Link to="/pool-details">
              <Button variant="contained" className={classes.joinButton}>
                Purchase
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SinglePackageCard;
