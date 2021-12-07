import { Button, makeStyles } from "@material-ui/core";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    background: "transparent",

    color: "white",
    border: "1px solid rgba(224, 7, 125, 0.7)",

    padding: 7,
    paddingLeft: 10,
    paddingRight: 15,
    borderRadius: 20,
    fontWeight: 500,
    letterSpacing: 0.4,
    textTransform: "none",
    [theme.breakpoints.down("sm")]: {
      width: 140,
    },
  },
  item: {
    marginLeft: 10,
    marginRight: 10,
  },
  navbarButton: {
    background: "linear-gradient(to right, #C80C81,purple)",
    color: "white",
    padding: 8,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20,
    fontWeight: 500,
    letterSpacing: 0.4,
    textTransform: "none",
    filter: "drop-shadow(0 0 0.5rem #414141)",
    "&:hover": {
      background: "#C80C81",
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      marginLeft: 15,
      width: 150,
    },
  },
  numbers: {
    color: "#eeeeee",
    fontSize: 14,
  },
  networkIcon: {
    width: 25,
    marginRight: 5,
    height: "auto",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

const ConnectButton = ({}) => {
  const classes = useStyles();

  return (
    <div>
      {!true ? (
        <Button className={classes.navbarButton} variant="contained">
          Connect Wallet
        </Button>
      ) : (
        <Button className={classes.root}>
          <img
            src="https://cdn-icons.flaticon.com/png/512/2175/premium/2175147.png?token=exp=1638849971~hmac=a0589ec6243d42196fa79cfe71a2baf6"
            height="20px"
          />
          <span style={{ marginLeft: 5 }}>...DC870</span>
        </Button>
      )}
    </div>
  );
};

export default ConnectButton;
