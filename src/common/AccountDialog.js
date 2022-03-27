import React, { useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { FileCopy } from "@material-ui/icons";

import { connect } from "react-redux";
import { Button, Card } from "@material-ui/core";
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
      minWidth: 200,
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
      width: 150,
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
        <Card elevation={10} className={classes.background}>
          <div style={{ width: "100%" }}>
            <div className="d-flex justify-content-between align-items-center">
              <div style={{ width: 40 }}></div>
              <div className={classes.heading}>My Wallet</div>
              <IconButton aria-label="close" onClick={handleClose}>
                <CloseIcon style={{ color: "#919191" }} />
              </IconButton>
            </div>
            <div
              style={{ paddingLeft: 10, paddingRight: 10, textAlign: "center" }}
            >
              <h6 htmlFor="username" className={classes.subheading}>
                <strong className={classes.numbers}>
                  {account ? <span></span> : "..."}
                  {account?.slice(0, 3)}
                  {"..."}
                  {account?.slice(account?.length - 4, account?.length)}
                </strong>
                <IconButton style={{ padding: 0 }}>
                  {" "}
                  <FileCopy
                    className={classes.copyIcon}
                    onClick={() => navigator.clipboard.writeText(account)}
                  />
                </IconButton>
              </h6>
            </div>
          </div>

          {/* <div style={{ width: "100%", paddingLeft: 20, paddingRight: 20 }}>
            <div className="d-flex justify-content-between mt-4">
              <div className="d-flex justify-content-start">
                <div className={classes.logoWrapper}>
                  <img src="" className={classes.logo} />
                </div>
                <div>
                  <div className={classes.tokenTitle}>Ethereum</div>
                  <div className={classes.tokenSubtitle}>ETH</div>
                </div>
              </div>
              <div className={classes.tokenAmount}>32</div>
            </div>
          </div> */}
          <div className={classes.buttons}>
            <Button
              variant="light"
              onClick={handleClose}
              className={classes.button}
            >
              Cancel
            </Button>
            <div style={{ paddingLeft: 10 }}>
              <Button onClick={onSingOut} className={classes.button}>
                Sign out
              </Button>
            </div>
          </div>
        </Card>
      </Dialog>
    </div>
  );
};

const mapStateToProps = (state) => ({
  account: state.account,
});

export default connect(mapStateToProps, {})(AccountDialog);
