import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PoolCard from "../../components/PoolCard";

import ProfileNftCard from "./components/ProfileNftCard";
import { getUserPurchasedPackages } from "../../actions/smartActions";
import Loader from "../../common/Loader";
import { useWeb3React } from "@web3-react/core";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 60,
    paddingBottom: 60,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 40,
      paddingBottom: 20,
    },
  },
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
  message: {
    color: "#e5e5e5",
    fontSize: 24,
    fontWeight: 700,
    marginTop: 10,
    textAlign: "center",
  },
  messageCard: {
    background:
      "linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))",
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
    textAlign: "left",
    marginBottom: 0,
    marginTop: 35,
    fontSize: 26,
    fontWeight: 400,
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      marginTop: 0,
      fontSize: 20,
    },
  },
}));

const Profile = () => {
  const classes = useStyles();

  const [purchasedPackagesEth, setPurchasedPackagesEth] = useState([]);
  const [purchasedPackagesBsc, setPurchasedPackagesBsc] = useState([]);
  const [loading, setLoading] = useState(false);
  const { active, account, chainId } = useWeb3React();

  useEffect(async () => {
    setLoading(true);
    if (active) {
      let userAddress = account;
      console.log(userAddress);
      let resultEth = await getUserPurchasedPackages(userAddress, [1, 4]);
      let resultBsc = await getUserPurchasedPackages(userAddress, [56, 97]);
      setPurchasedPackagesEth(resultEth);
      setPurchasedPackagesBsc(resultBsc);
      console.log(resultEth);
      console.log(resultBsc);
    }
    setLoading(false);
  }, [active]);

  return (
    <div className={classes.root}>
      <div className={classes.background}>
        <div className={classes.headStyle}>
          <div>
            <h1 className={classes.title}>My Profile</h1>
            <div className={classes.divider} />
          </div>
        </div>
      </div>

      <div className={classes.background}>
        <div className={classes.contentStyles}>
          <div style={{ width: "100%" }}>
            <h4 className={classes.subHeading}>Purchase History</h4>
            {active && (
              <div>
                {loading && (
                  <div className="text-center">
                    <Loader height={200} />
                  </div>
                )}
                {!loading && (
                  <div>
                    {" "}
                    {purchasedPackagesEth.length +
                      purchasedPackagesBsc.length ===
                      0 && (
                      <div className={classes.messageCard}>
                        <div className="text-center mt-3">
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/2855/2855027.png"
                            height="140px"
                          />
                        </div>
                        <h1 className={classes.message}>
                          You did not yet participated in INO.
                        </h1>
                      </div>
                    )}
                    {purchasedPackagesEth.length +
                      purchasedPackagesBsc.length !==
                      0 && (
                      <div className="row mt-4">
                        {purchasedPackagesEth.map((singlePackageId) => (
                          <div className="col-12 col-md-4">
                            <ProfileNftCard
                              packageId={singlePackageId}
                              chainIds={[1, 4]}
                              currency="ETH"
                            />
                          </div>
                        ))}
                        {purchasedPackagesBsc.map((singlePackageId) => (
                          <div className="col-12 col-md-4">
                            <ProfileNftCard
                              packageId={singlePackageId}
                              chainIds={[56, 97]}
                              currency="BSC"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
            {!active && (
              <div className="text-center">
                <h4 style={{ color: "white" }}>Connect Your Wallet First</h4>
              </div>
            )}
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Profile;
