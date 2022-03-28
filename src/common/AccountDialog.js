import React, { useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { FileCopy } from "@material-ui/icons";

import { connect } from "react-redux";
import { Button, Card, Divider } from "@material-ui/core";
import { useWeb3React } from "@web3-react/core";

const useStyles = makeStyles((theme) => ({
  background: {
    minWidth: 360,
    width: "100%",
    height: 300,
    backgroundColor: "#121827",
    color: "#f9f9f9",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",

    [theme.breakpoints.down("sm")]: {
      minWidth: 300,
      width: "100%",
      height: 450,
    },
  },
  heading: {
    fontSize: 20,
    fontWeight: 400,
    color: "#e5e5e5",
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
    },
  },
  subheading: {
    fontSize: 14,
    fontWeight: 400,
    color: "#bdbdbd",
    [theme.breakpoints.down("sm")]: {
      fontSize: 11,
    },
  },
  inputGroup: {
    marginTop: 40,
  },

  notchedOutline: {
    borderWidth: "1px",
    borderColor: "#616161 !important",
  },
  inputText: {
    color: "#f8f8f8",
  },
  maxBtn: {
    backgroundColor: "rgba(224, 7, 125, 0.9)",
    height: 50,
    borderRadius: 10,
    marginLeft: 20,
    color: "#f9f9f9",
    "&:hover": {
      background: "rgba(224, 7, 125, 0.7)",
    },
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    // marginTop: 80,
    // marginBottom: 20,
  },
  numbers: {
    color: "#E0077D",
    fontSize: 20,
    marginLeft: 15,
  },
  icon: {
    marginRight: 5,
    color: "#919191",
    display: "inline-block",
    // position: "relative",
  },
  title: {
    textAlign: "center",
    fontSize: 22,
  },
  logoWrapper: {
    height: 35,
    width: 35,
    backgroundColor: "#ffffff",
    border: "1px solid #bdbdbd",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 20,
    width: 20,
  },
  tokenTitle: {
    fontWeight: 500,
    padding: 0,
    paddingLeft: 10,
    fontSize: 16,
    color: "#e5e5e5",
  },
  tokenSubtitle: {
    fontWeight: 300,
    padding: 0,
    paddingLeft: 10,
    fontSize: 10,
    color: "#bdbdbd",
  },
  tokenAmount: {
    fontWeight: 500,
    padding: 0,
    paddingLeft: 10,
    fontSize: 16,
    color: "#f9f9f9",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  copyIcon: {
    fontSize: 18,
    marginLeft: 10,
    color: "#dcedc8",
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
    },
  },
  button: {
    background: "linear-gradient(to right, #C80C81,purple)",
    color: "white",
    padding: 8,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20,
    fontWeight: 500,
    letterSpacing: 0.4,
    textTransform: "none",

    [theme.breakpoints.down("sm")]: {
      marginRight: 0,

      marginLeft: 15,
      width: "fit-content",
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
  background: {
    height: "100%",
    width: 500,

    paddingBottom: 30,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  padding: {
    paddingTop: 20,
    paddingLeft: 20,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 5,
      paddingLeft: 5,
    },
  },
  button: {
    color: "#D9047C",
    backgroundColor: "white",
    textTransform: "none",
    borderRadius: "50px",
    padding: "8px 20px 8px 20px",
    fontWeight: 400,
    background: `linear-gradient(to bottom,#fce3ee, #fce3ee)`,
    fontSize: 14,
    letterSpacing: "0px",
  },
  buttonMain: {
    borderRadius: "50px",
    background: `linear-gradient(to bottom,#D9047C, #BF1088)`,
    lineHeight: "24px",
    verticalAlign: "baseline",
    letterSpacing: "0px",
    margin: 0,
    color: "#ffffff",
    padding: "8px 20px 8px 20px",

    fontWeight: 400,
    fontSize: 14,
    textTransform: "none",
  },

  highlight: {
    color: "#e0247d",
    paddingLeft: 5,
  },

  icon: {
    fontSize: 16,
    marginRight: 7,
    color: "#ffffff",
  },
  title: {
    fontWeight: 400,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "left",
    color: "#e0247d",
    fontSize: 22,
  },
  subtitle: {
    fontWeight: 400,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    paddingTop: 10,
    paddingBottom: 5,
    textAlign: "left",
    color: " #757575",
    fontSize: 14,
  },
  para: {
    fontWeight: 400,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "left",
    color: "white",
    fontSize: 18,
    [theme.breakpoints.down("md")]: {
      fontSize: 14,
    },
  },
}));

const AccountDialog = ({ open, handleClose, handleLogout }) => {
  const classes = useStyles();
  const { active, account, activate, deactivate } = useWeb3React();

  const onSingOut = () => {
    // localStorage.setItem(`logout${currentAccount}`, currentAccount);
    handleLogout();
    handleClose();
  };

  return (
    <div>
      <Dialog
        onClose={handleClose}
        open={open}
        disableBackdropClick
        className={classes.dialog}
        color="green"
        PaperProps={{
          style: { borderRadius: 25, backgroundColor: "#121827" },
        }}
      >
        <div className={classes.background}>
          <div className="container text-center">
            <div className={classes.padding}>
              <h5 className={classes.title}>My Wallet</h5>
            </div>{" "}
            <Divider style={{ backgroundColor: "white" }} />
            <div className={classes.padding}>
              <h6 className={classes.subtitle}>Address</h6>
              <p className={classes.para}>{account}</p>
            </div>
            <div style={{ paddingLeft: 15 }}>
              <div className="my-3 d-flex justify-content-start">
                <div style={{ paddingRight: 10 }}>
                  <Button
                    variant="contained"
                    className={classes.buttonMain}
                    onClick={onSingOut}
                  >
                    Sign Out
                  </Button>
                </div>
                <div>
                  <Button
                    variant="contained"
                    className={classes.button}
                    onClick={handleClose}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

const mapStateToProps = (state) => ({
  account: state.account,
});

export default connect(mapStateToProps, {})(AccountDialog);
