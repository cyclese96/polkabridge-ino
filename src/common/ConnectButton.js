import { Button, makeStyles } from "@material-ui/core";
import { AccountBalanceWallet } from "@material-ui/icons";
import { useWeb3React } from "@web3-react/core";
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

const ConnectWallet = ({ onWalletClick }) => {
  const { active, account } = useWeb3React();

  const classes = useStyles();

  return (
    <div>
      {console.log(active)}
      {!active ? (
        <Button
          onClick={onWalletClick}
          className={classes.navbarButton}
          variant="contained"
        >
          {window.innerWidth < 500 ? "Connect" : "Connect Wallet"}
        </Button>
      ) : (
        <Button onClick={onWalletClick} className={classes.root}>
          <AccountBalanceWallet
            style={{ color: "#bdbdbd", marginRight: 5, fontSize: 20 }}
            fontSize="medium"
          />
          <strong className={classes.numbers}>
            {account ? <span></span> : "..."}
            {[...account?.toString()]?.splice(0, 3)}
            {"..."}
            {[...account?.toString()]?.splice(
              [...account?.toString()]?.length - 4,
              4
            )}
          </strong>
        </Button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  account: state.account,
});

export default connect(mapStateToProps, {})(ConnectWallet);
