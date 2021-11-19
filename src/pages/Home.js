import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PoolCard from "../components/PoolCard";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { People, Person } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  tabText: {
    fontWeight: 900,
    textTransform: "none",
  },
  title: {
    color: "#e5e5e5",
    fontSize: 24,
    fontWeight: 600,
    textAlign: "left",
  },
  background: {
    paddingTop: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",

    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  divider: {
    width: 130,
    height: 3,
    background: "linear-gradient(to right, #e0077d, rgba(0, 0, 0, 0.4))",
    [theme.breakpoints.down("sm")]: {
      marginBottom: 15,
    },
  },
  actionButton: {
    background: `linear-gradient(to bottom,#D9047C, #BF1088)`,
    color: "white",
    width: "fit-content",
    height: 40,
    textTransform: "none",
    borderRadius: 30,
    fontSize: 15,
    marginRight: 5,
    marginLeft: 5,
    display: "flex",
    alignItems: "center",
    padding: "5px 20px 5px 20px",
    "&:hover": {
      background: "rgba(224, 7, 125, 0.7)",
    },
    [theme.breakpoints.down("sm")]: {
      width: "fit-content",
      fontSize: 12,
    },
  },

  headStyle: {
    width: 950,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,

    paddingBottom: 20,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "space-between",
    },
  },
  contentStyles: {
    width: 950,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingTop: 10,
    paddingBottom: 20,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "space-between",
    },
  },
  subHeading: {
    color: "#ffffff",
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: 0,
    marginTop: 35,
    fontSize: 26,
    fontWeight: 400,
  },
}));

const Home = () => {
  const props = {
    backgroundColor: "black",
    color: "white",
  };
  const classes = useStyles(props);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div
      className="container mt-3"
      style={{ paddingTop: 60, paddingBottom: 60 }}
    >
      <div className={classes.background}>
        <div className={classes.headStyle}>
          <div>
            <h1 className={classes.title}>NFTs Offering</h1>
            <div className={classes.divider} />
          </div>
          <div className="d-flex justify-content-end">
            <Link
              to={"/profile"}
              style={{
                textDecoration: "none",
                marginRight: 10,
                paddingTop: 30,
              }}
              href="https://polkabridge.medium.com/polkabridge-launches-launchpad-v2-the-multichain-universe-misson-8377161bfdba"
            >
              <Button className={classes.actionButton} variant="contained">
                <Person />
                My Profile
              </Button>
              <div></div>
            </Link>
          </div>
        </div>
      </div>

      <div className={classes.background}>
        <div className={classes.contentStyles}>
          <div>
            <h4 className={classes.subHeading}>Active Pools</h4>
            <div className="row mt-4">
              <div className="col-12 col-md-4">
                <PoolCard />
              </div>
              <div className="col-12 col-md-4">
                <PoolCard />
              </div>
              <div className="col-12 col-md-4">
                <PoolCard />
              </div>
            </div>
          </div>{" "}
        </div>
      </div>

      <div className={classes.background}>
        <div className={classes.contentStyles}>
          <div>
            <h4 className={classes.subHeading}>Ended Pools</h4>
            <div className="row mt-4">
              <div className="col-12 col-md-4">
                <PoolCard />
              </div>
              <div className="col-12 col-md-4">
                <PoolCard />
              </div>
              <div className="col-12 col-md-4">
                <PoolCard />
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Home;
