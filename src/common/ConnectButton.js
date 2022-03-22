import React, { useEffect, useState } from "react";
import { Button, Dialog, Backdrop, Slide } from "@material-ui/core";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  authenticateUser,
  checkAuthenticated,
  signOutUser,
} from "./../actions/authActions";
import {
  checkCorrectNetwork,
  checkWalletAvailable,
  getUserAddress,
} from "../actions/web3Actions";
import web3 from "../web";
import { AccountBalanceWallet } from "@material-ui/icons";
import BalancePopup from "./BalancePopup";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  button: {
    color: "white",
    backgroundColor: "white",
    textTransform: "none",
    borderRadius: "50px",
    padding: "8px 16px 8px 16px",
    fontWeight: 600,
    background: `linear-gradient(to right,#D9047C, #BF1088)`,
    fontSize: 14,
  },

  heading: {
    fontSize: 22,
    color: "white",
    textAlign: "center",
    paddingBottom: 20,
  },
  balanceButton: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid #e0247d",
    background: "transparent",
    borderRadius: "20px",
    position: "relative",
    padding: "0 12px 0 15px",
    minWidth: "60px",
    marginLeft: "10px",
    marginRight: "12px",
    marginTop: 5,
    height: "40px",
    maxWidth: "calc(100% - 20px);",
  },
  icon: {
    color: "white",
  },
}));

function ConnectButton({
  authenticateUser,
  authenticated,
  checkAuthenticated,
  signOutUser,
}) {
  const classes = useStyles();
  const [error, setError] = useState("");
  const [popup, setPopup] = useState(false);
  const [bnbBal, setBnbBal] = useState(0);
  const [userAdd, setUserAdd] = useState(null);

  const togglePopup = (value) => {
    setPopup(value);
  };

  useEffect(() => {
    async function asyncFn() {
      let walletStatus = await checkWalletAvailable();
      if (walletStatus) {
        const networkStatus = await checkCorrectNetwork();

        if (networkStatus) {
          let authStatus = await checkAuthenticated();
          console.log(authStatus);
          if (authStatus) {
            let userAddress = await getUserAddress();
            setUserAdd(userAddress);
            getBalance();
          } else {
          }
        } else {
          setError("Only support BSC network");
        }
      } else {
        setError("Instal Metamask");
      }
    }

    asyncFn();
  }, [checkAuthenticated]);

  const getBalance = async () => {
    let currentAddress = await getUserAddress();
    let balance = await web3.eth.getBalance(currentAddress);

    let ethBalance = web3.utils.fromWei(balance ? balance.toString() : "0");
    setBnbBal(ethBalance);
  };

  const connectWallet = async () => {
    let walletStatus = await checkWalletAvailable();
    if (walletStatus) {
      const networkStatus = await checkCorrectNetwork();
      if (networkStatus) {
        authenticateUser();
        getBalance();
      } else {
        setError("Only support BSC network");
      }
    } else {
      setError("Install metamask first!");
    }
  };

  useEffect(() => {
    async function asyncFn() {
      //Events to detect changes in account or network.
      if (window.ethereum !== undefined) {
        window.ethereum.on("accountsChanged", async function (accounts) {
          authenticateUser();
          window.location.reload();
        });

        window.ethereum.on("networkChanged", async function (networkId) {
          let networkStatus = await checkCorrectNetwork();
          if (networkStatus) {
            authenticateUser();
            getBalance();
          } else {
            setError("Only support BSC network");
            signOut(userAdd);
          }
        });
      }
    }
    asyncFn();
  }, []);

  const signOut = (currentAddress) => {
    signOutUser(currentAddress);
    setPopup(false);
  };

  return (
    <div className="text-center">
      {!authenticated ? (
        <div>
          <Button className={classes.button} onClick={connectWallet}>
            Connect your wallet
          </Button>
        </div>
      ) : (
        <div>
          <Button
            className={classes.balanceButton}
            onClick={() => togglePopup(true)}
          >
            <AccountBalanceWallet className={classes.icon} />
            <div>
              <strong style={{ color: "#e5e5e5", paddingLeft: 10 }}>
                {bnbBal !== null && parseFloat(bnbBal).toFixed(3) + " ETH"}{" "}
              </strong>
            </div>
          </Button>
        </div>
      )}
      <Dialog
        className={classes.modal}
        open={popup}
        keepMounted
        onClose={() => togglePopup(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        PaperProps={{
          style: {
            borderRadius: 10,
            backgroundColor: "black",
            border: "4px solid #212121",
          },
        }}
      >
        <div
          style={{
            backgroundColor: "black",
            borderRadius: 3,
            overflowX: "hidden",
          }}
        >
          <BalancePopup
            address={userAdd}
            pwar={0}
            togglePopup={() => togglePopup(false)}
            signOut={() => signOut(userAdd)}
          />
        </div>
      </Dialog>
    </div>
  );
}

ConnectButton.propTypes = {
  authenticateUser: propTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
});

const mapDispatchToProps = {
  authenticateUser,
  checkAuthenticated,
  signOutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectButton);
