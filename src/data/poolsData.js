let pools = [];

let pool1 = {
  id: 1,
  image: "https://launchpad.polkabridge.org/img/tokens/arcade.png",
  title: "AwardVr NFTs",
  type: "Packages",
  totalPackages: "5",
  whitepaper: "https://launchpad.polkabridge.org/img/tokens/arcade.png",
  website: "https://launchpad.polkabridge.org/img/tokens/arcade.png",
  twitter: "https://launchpad.polkabridge.org/img/tokens/arcade.png",
  telegram: "https://launchpad.polkabridge.org/img/tokens/arcade.png",

  description:
    " Collection of 5 High quality AI generated VR Gaming NFT offered by AwardVr Artists and developers.",
  startDate: "21 Nov,2021 2PM UTC",
  price: "0.1",
  currency: "BNB",
  network: "BSC",
  quantity: "400",
  packageIds: [1, 2],
};

let pool2 = {
  id: 2,
  image: "https://launchpad.polkabridge.org/img/tokens/polkawar.png",
  title: "Polkawar Equipments",
  type: "Packages",
  totalPackages: "9",
  description:
    " Collection of 5 High quality Weapons of level 2 Gaming NFT offered by PolkaWar team.",
  startDate: "21 Jan,2022 2PM UTC",
  price: "0.3",
  currency: "BNB",
  network: "BSC",
  quantity: "900",
  packageIds: [3, 4, 5],
};
let pool3 = {
  id: 3,
  image: "https://polkabridge.org/images/corgi.png",
  title: "Corgib Boring Dog",
  type: "Packages",
  totalPackages: "3",
  description:
    " Collection of 5 High quality Dog NFTs of level 2 Gaming NFT offered by Corgib team.",
  startDate: "21 Jan,2022 2PM UTC",
  price: "0.3",
  currency: "BNB",
  network: "BSC",
  quantity: "900",
  packageIds: [6],
};
let pool4 = {
  id: 4,
  image: "/images/symbol.png",
  title: "PolkaBridge Support NFT",
  type: "Packages",
  totalPackages: "3",
  description:
    " Collection of 5 High quality Dog NFTs of level 2 Gaming NFT offered by Corgib team.",
  startDate: "21 Jan,2022 2PM UTC",
  price: "0.3",
  currency: "BNB",
  network: "BSC",
  quantity: "900",
  packageIds: [7],
};
pools = [pool1, pool2, pool3, pool4];
export default pools;
