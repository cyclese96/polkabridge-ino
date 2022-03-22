import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import PeopleAltOutlined from "@material-ui/icons/PeopleAltOutlined";
import FlareOutlined from "@material-ui/icons/FlareOutlined";
import TouchAppOutlined from "@material-ui/icons/TouchAppOutlined";
import VpnLockOutlined from "@material-ui/icons/VpnLockOutlined";
import CategoryIcon from "@material-ui/icons/Category";

// import CustomSnackBar from "./CustomSnackbar";
import { EqualizerOutlined } from "@material-ui/icons";

import DotCircle from "./DotCircle";
import ConnectButton from "./ConnectButton";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBarBackground: {
    boxShadow: "none",
    backgroundColor: "#100525",
    display: "flex",
    alignItems: "center",
  },
  menuButton: {
    textTransform: "none",
  },
  title: {
    fontWeight: 600,
    fontSize: 24,
  },
  iconText: {
    fontSize: 15,
  },
  icon: {},

  sectionDesktop: {
    marginLeft: 40,
    marginRight: 40,
    [theme.breakpoints.down("md")]: {
      marginLeft: 5,
      marginRight: 5,
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  sectionMobile: {
    width: "100%",
    display: "flex",
    alignItems: "stretch",
    justifyContent: "space-between",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  row1: {
    display: "flex",
    width: "100%",
    alignItems: "center",
  },

  home: {
    "text-decoration": "none",
    color: "black",
    cursor: "pointer",
    marginRight: 5,
    marginLeft: 5,
  },
  nav: {
    marginRight: 15,
  },
  menuIcon: {
    color: "#212121",
  },

  fullList: {
    width: "auto",
  },
  menuTitleMobile: {
    paddingLeft: 25,
    fontWeight: 500,
    verticalAlign: "baseline",
    fontFamily: "New Rocker, cursive",
    textAlign: "left",
    fontSize: 16,
  },
  navbarItemsDesktop: {
    paddingRight: 10,
    fontWeight: 400,
    lineHeight: "34px",
    verticalAlign: "baseline",
    letterSpacing: "-1px",
    margin: 0,
    padding: "9px 14px 0px",
    cursor: "pointer",
    fontSize: "1.2vw",
    color: "#e5e5e5",
  },
  navbarItemsDesktopActive: {
    paddingRight: 10,
    fontWeight: 500,
    lineHeight: "34px",
    verticalAlign: "baseline",
    letterSpacing: "-1px",
    margin: 0,
    padding: "9px 14px 0px",
    cursor: "pointer",
    fontSize: "1.2vw",
    color: "#e0077d",
  },
  navbarButton: {
    backgroundColor: "#f9f9f9",
    color: "#C80C81",
    borderRadius: 10,
    height: 35,
    marginRight: 40,
    padding: 20,
    fontSize: 14,
    fontWeight: 700,
    textTransform: "none",
    "&:hover": {
      background: "rgba(255, 255, 255, 0.7)",
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      marginLeft: 15,
      width: 150,
    },
  },
  mobileButton: {
    borderRadius: "50px",
    background: `linear-gradient(to bottom,#D9047C, #BF1088)`,
    lineHeight: "24px",
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    color: "#ffffff",
    padding: "5px 15px 5px 15px",
    fontWeight: 600,
  },
  leftMargin: {
    marginLeft: 159,
    [theme.breakpoints.down("lg")]: {
      marginLeft: 100,
    },
  },
  numbers: {
    color: "#E0077D",
    fontSize: 26,
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },
  network: {
    display: "flex",
    marginLeft: 20,
    alignItems: "center",
    border: "0.5px solid #919191",
    borderRadius: 20,
    padding: 4,
    paddingLeft: 6,
    paddingRight: 10,
    letterSpacing: 0.4,
    // cursor: "pointer",
    "&:hover": {
      background: "rgba(255, 255, 255, 0.1)",
    },
    [theme.breakpoints.down("sm")]: {
      width: 140,
    },
  },
  networkIcon: {
    width: 30,
    height: "auto",
  },
  logo: {
    height: 38,
    width: 150,
    [theme.breakpoints.down("sm")]: {
      height: 30,
      width: "fit-content",
    },
  },
  list: {
    paddingTop: 20,
    width: "250px",
    borderLeft: "5px solid pink",
    borderColor: "#3A1242",
    height: "100%",
    backgroundColor: "#100525",
  },
}));

const Navbar = () => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          {
            name: "Stake",
            link: "https://stake.polkabridge.org/",
            id: "staking",
            icon: <EqualizerOutlined />,
          },
          {
            name: "Farm",
            link: "https://farm.polkabridge.org/",
            id: "intro",
            icon: <TouchAppOutlined />,
          },
          {
            name: "Launchpad",
            link: "https://launchpad.polkabridge.org/",
            id: "launchpad",
            icon: <PeopleAltOutlined />,
          },
          {
            name: "INO",
            link: "https://ino.polkabridge.org/",
            id: "characters",
            icon: <PeopleAltOutlined />,
          },
          {
            name: "Swap",
            link: "https://swap.polkabridge.org/",
            id: "swap",
            icon: <VpnLockOutlined />,
          },
          {
            name: "Lending",
            link: "#",
            id: "features",
            icon: <FlareOutlined />,
          },
          {
            name: "Prediction",
            link: "#",
            id: "usecase",
            icon: <CategoryIcon />,
          },
          {},
        ].map((tab, index) => (
          <ListItem button key={tab.name} onClick={toggleDrawer(anchor, false)}>
            <a href={tab.link} rel="noreferrer">
              <ListItemText
                primary={tab.name}
                className={classes.menuTitleMobile}
              />
            </a>
          </ListItem>
        ))}

        <Divider />
        <div style={{ paddingLeft: 20 }}>
          <ConnectButton />
        </div>
      </List>
    </div>
  );

  return (
    <div className={classes.grow}>
      <AppBar
        color="transparent"
        position="fixed"
        className={classes.appBarBackground}
      >
        <Toolbar className={classes.sectionDesktop}>
          <a href="/">
            <Avatar
              variant="square"
              src="/images/logo-white.png"
              className={classes.logo}
            />
          </a>
          <div className={classes.leftMargin} />
          <div className="d-flex justify-content-end">
            <div>
              <a
                href="https://stake.polkabridge.org"
                target="_blank"
                rel="noreferrer"
                className={classes.navbarItemsDesktop}
              >
                Stake <DotCircle active={true} />
              </a>
            </div>
          </div>
          <div>
            <a
              href="https://farm.polkabridge.org"
              target="_blank"
              rel="noreferrer"
              className={classes.navbarItemsDesktop}
            >
              Farm
              <DotCircle />
            </a>
          </div>
          <div>
            <a
              href="https://launchpad.polkabridge.org"
              target="_blank"
              rel="noreferrer"
              className={classes.navbarItemsDesktop}
            >
              Launchpad <DotCircle />
            </a>
          </div>
          <div>
            <a href="/" className={classes.navbarItemsDesktopActive}>
              INO <DotCircle active={true} />
            </a>
          </div>{" "}
          <div>
            <a
              href="https://swap.polkabridge.org"
              target="_blank"
              rel="noreferrer"
              className={classes.navbarItemsDesktop}
            >
              Swap <DotCircle />
            </a>
          </div>
          <div>
            <a href="#" rel="noreferrer" className={classes.navbarItemsDesktop}>
              Lending <DotCircle />
            </a>
          </div>
          <div>
            <a href="#" rel="noreferrer" className={classes.navbarItemsDesktop}>
              Prediction <DotCircle />
            </a>
          </div>
          <div>
            <a
              href="https://corgib.polkabridge.org/bet"
              className={classes.navbarItemsDesktop}
              rel="noreferrer"
            >
              Betting <DotCircle />
            </a>
          </div>
          <div>
            <ConnectButton />
          </div>
          <div className={classes.grow} />
        </Toolbar>

        <Toolbar className={classes.sectionMobile}>
          <div className="d-flex justify-content-center align-items-center">
            <a href="/">
              <Avatar
                variant="square"
                src="/images/logo-white.png"
                style={{ height: 38, width: 150 }}
              />
            </a>
          </div>

          <div>
            {["right"].map((anchor) => (
              <React.Fragment key={anchor}>
                <IconButton
                  aria-label="Menu"
                  aria-haspopup="true"
                  className={classes.menuIcon}
                  onClick={toggleDrawer(anchor, true)}
                >
                  <MenuIcon style={{ color: "#ffffff" }} />
                </IconButton>

                <SwipeableDrawer
                  anchor={anchor}
                  disableSwipeToOpen={false}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                  onOpen={toggleDrawer(anchor, true)}
                  classes={{ paper: classes.appBarBackground }}
                >
                  {list(anchor)}
                </SwipeableDrawer>
              </React.Fragment>
            ))}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
