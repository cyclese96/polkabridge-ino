import React, { useEffect, useState } from "react";
import {
  Box,
  makeStyles,
  Button,
  Slide,
  Divider,
  Typography,
} from "@material-ui/core";
import Loader from "./Loader";
import { Close } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  background: {
    width: 600,
    height: 360,
    backgroundColor: "#000000",
    borderRadius: 10,

    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: 350,
    },
  },

  heading: {
    color: "#f9f9f9",
    textAlign: "center",
    fontSize: 26,
    [theme.breakpoints.down("md")]: {
      fontSize: 20,
    },
  },
  para: {
    color: "#e5e5e5",
    textAlign: "center",
    fontSize: 16,
    fontWeight: 400,
    [theme.breakpoints.down("md")]: {
      fontSize: 16,
    },
  },

  reloadButton: {
    width: "fit-content",
    height: "45px",
    background: "transparent",
    border: "1px solid #FFFFFF",
    boxSizing: "border-box",
    borderRadius: "20px",
    fontSize: 18,
    lineHeight: "33px",
    color: "#ffffff",
    marginRight: 10,
    marginTop: 20,
    padding: "12px 30px 12px 30px",

    [theme.breakpoints.down("md")]: {
      padding: "12px 20px 12px 20px",
      fontSize: 18,
    },
  },
  svgImage: {
    width: "80%",
    [theme.breakpoints.down("md")]: {
      width: "80px",
    },
  },
}));

const TxPopup = ({ txCase, resetPopup }) => {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className="d-flex justify-content-end">
        <Close
          style={{
            color: "#D1FF1A",
            marginRight: 20,
            marginTop: 5,
            fontWeight: 800,
            cursor: "pointer",
          }}
          onClick={resetPopup}
        />
      </div>
      {txCase === 3 && (
        <div
          className="row flex-row align-items-center justify-content-center"
          align="center"
          style={{ height: "90%" }}
        >
          <div className="col-md-7">
            <div>
              <Typography variant="h2" className={classes.heading}>
                Toaster is waiting!
              </Typography>
              <Typography variant="h5" className={classes.para}>
                ~ Confirm the transaction in your wallet ~
              </Typography>
            </div>
          </div>
          <div className="col-md-5">
            <div>
              <Loader width={200} />
              {/* <img src="images/toaster.svg" width="80%" /> */}
            </div>
          </div>
        </div>
      )}
      {txCase === 4 && (
        <div
          className="row flex-row align-items-center justify-content-center"
          align="center"
          style={{ height: "90%" }}
        >
          <div className="col-md-7">
            <div>
              <Typography variant="h2" className={classes.heading}>
                Oops ! Burnt Bread !
              </Typography>
              <Typography variant="h5" className={classes.para}>
                ~ You denied the transaction ~
              </Typography>
              <Button
                variant="contained"
                className={classes.reloadButton}
                onClick={() => window.location.reload()}
              >
                Reload
              </Button>
            </div>
          </div>
          <div className="col-md-5">
            <div>
              <object
                type="image/svg+xml"
                data={"images/toaster.svg"}
                className={classes.svgImage}
              />
            </div>
          </div>
        </div>
      )}
      {txCase === 5 && (
        <div
          className="row flex-row align-items-center justify-content-center"
          align="center"
          style={{ height: "90%" }}
        >
          <div className="col-md-7">
            <div>
              <Typography variant="h2" className={classes.heading}>
                Toaster is working!
              </Typography>
              <Typography variant="h5" className={classes.para}>
                ~ Transaction submitted, waiting for confirmation ~
              </Typography>
            </div>
          </div>
          <div className="col-md-5">
            <div>
              <object
                type="image/svg+xml"
                data={"images/toaster.svg"}
                className={classes.svgImage}
              />
            </div>
          </div>
        </div>
      )}
      {txCase === 6 && (
        <div
          className="row flex-row align-items-center justify-content-center"
          align="center"
          style={{ height: "90%" }}
        >
          <div className="col-md-7">
            <div>
              <Typography variant="h2" className={classes.heading}>
                Oops ! Burnt Bread !
              </Typography>
              <Typography variant="h5" className={classes.para}>
                ~ Transaction has been failed ~
              </Typography>
              <Button
                variant="contained"
                className={classes.reloadButton}
                onClick={() => window.location.reload()}
              >
                Reload
              </Button>
            </div>
          </div>
          <div className="col-md-5">
            <div>
              <object
                type="image/svg+xml"
                data={"images/toaster.svg"}
                className={classes.svgImage}
              />
            </div>
          </div>
        </div>
      )}
      {txCase === 7 && (
        <div
          className="row flex-row align-items-center justify-content-center"
          align="center"
          style={{ height: "90%" }}
        >
          <div className="col-md-7">
            <div>
              <Typography variant="h2" className={classes.heading}>
                Ready to Party !
              </Typography>
              <Typography variant="h5" className={classes.para}>
                YOUR TRANSACTION IS SUCCESSFUL
              </Typography>
              <Button
                variant="contained"
                className={classes.reloadButton}
                onClick={() => window.location.reload()}
              >
                Refresh
              </Button>
            </div>
          </div>
          <div className="col-md-5">
            <div>
              <object
                type="image/svg+xml"
                data={"images/success.svg"}
                className={classes.svgImage}
              />
            </div>
          </div>
        </div>
      )}
      {txCase === 8 && (
        <div
          className="row flex-row align-items-center justify-content-center"
          align="center"
          style={{ height: "90%" }}
        >
          <div className="col-md-7">
            <div>
              <Typography variant="h2" className={classes.heading}>
                We’ll miss you !
              </Typography>
              <Typography variant="h5" className={classes.para}>
                YOUR TOKENS HAVE BEEN UNSTAKED
              </Typography>
              <Button
                variant="contained"
                className={classes.reloadButton}
                onClick={() => window.location.reload()}
              >
                Join party Again
              </Button>
            </div>
          </div>
          <div className="col-md-5">
            <div>
              <object
                type="image/svg+xml"
                data={"images/unstake.svg"}
                className={classes.svgImage}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TxPopup;
