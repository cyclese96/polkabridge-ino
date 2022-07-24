import React, { useEffect, useState } from "react";
import { makeStyles, Button, Typography, Input } from "@material-ui/core";
import { Close, ShoppingBasket } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  background: {
    width: 580,
    height: 360,
    backgroundColor: "black",
    borderRadius: 10,
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: 350,
      overflow: "hidden",
    },
  },

  heading: {
    color: "#f9f9f9",
    fontWeight: 600,
    textAlign: "center",
    fontSize: 26,
    [theme.breakpoints.down("md")]: {
      fontSize: 20,
    },
  },
  available: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 22,
    fontWeight: 600,
    paddingLeft: 10,
    [theme.breakpoints.down("md")]: {
      fontSize: 16,
    },
  },
  para: {
    color: "#E0247D",
    textAlign: "center",
    fontSize: 16,
    fontWeight: 600,
    [theme.breakpoints.down("md")]: {
      fontSize: "0.8rem",
    },
  },

  cancelButton: {
    width: "140px",
    height: "45px",
    background: "#5E5E5E",
    boxSizing: "border-box",
    borderRadius: "20px",
    fontSize: 16,
    lineHeight: "33px",
    color: "#ffffff",

    [theme.breakpoints.down("md")]: {
      width: "120px",
      fontSize: "0.8rem",
    },
  },
  confirmButton: {
    width: "140px",
    height: "45px",
    background: "#E0247D",
    borderRadius: "20px",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: "33px",
    color: "#ffffff",

    [theme.breakpoints.down("md")]: {
      width: "120px",
      fontSize: "0.8rem",
    },
  },
}));

const PurchaseModal = ({
  purchasePackage,
  resetPopup,
  setQuantity,
  maxPurchase,
  minQuantity,
}) => {
  const classes = useStyles();

  const [error, setError] = useState("");

  const changeInput = (value) => {
    if (value >= minQuantity && value <= maxPurchase) {
      setQuantity(value);
      setError("");
    } else {
      setError("Input is invalid");
    }
  };
  return (
    <div className={classes.background}>
      <div className="d-flex justify-content-end">
        <Close
          style={{
            color: "#E0247D",
            marginRight: 20,
            marginTop: 5,
            fontWeight: 800,
            cursor: "pointer",
          }}
          onClick={resetPopup}
        />
      </div>
      <div
        className="d-flex flex-column justify-content-evenly"
        style={{ height: "80%" }}
      >
        <Typography variant="h2" className={classes.heading} align="center">
          Purchase NFT Tokens
        </Typography>
        <div>
          <div
            className="row flex-row align-items-center justify-content-center"
            align="center"
          >
            <div className="col-6">
              {" "}
              <Typography variant="h5" className={classes.para}>
                Max Purchase
              </Typography>
            </div>
            <div className="col-6">
              {" "}
              <Typography variant="h5" className={classes.para}>
                Quantity
              </Typography>
            </div>
          </div>
          <div className="d-flex  justify-content-center w-100">
            {" "}
            <div
              className="row d-flex justify-content-center align-items-center mt-3"
              style={{
                border: "1px solid #757575",
                height: 70,
                width: 500,
                borderRadius: 10,
              }}
            >
              <div
                className="col-6"
                style={{
                  borderRight: "1px solid #ffffff",
                  height: "100%",
                }}
              >
                <div className="d-flex justify-content-center align-items-center h-100">
                  <ShoppingBasket style={{ color: "#758585" }} />
                  <Typography
                    variant="h5"
                    className={classes.available}
                    align="center"
                  >
                    {maxPurchase}
                  </Typography>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex justify-content-center align-items-center h-100">
                  <ShoppingBasket style={{ color: "#758585" }} />
                  <Input
                    label="Amount"
                    type="number"
                    inputProps={{ min: minQuantity, max: maxPurchase }}
                    fullWidth
                    style={{ color: "white", marginLeft: 20 }}
                    placeholder="Amount"
                    onChange={(e) => changeInput(e.target.value)}
                    error={error.length > 0 ? true : false}
                  />
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
        <div className="d-flex justify-content-around">
          <Button
            variant="contained"
            className={classes.cancelButton}
            onClick={resetPopup}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            className={classes.confirmButton}
            disabled={error}
            onClick={purchasePackage}
          >
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseModal;
