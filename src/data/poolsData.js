let pools = [];

let pool1 = {
  id: 1,
  image: "https://launchpad.polkabridge.org/img/logo-white.png",
  title: "PolkaBridge's Peace NFTs",
  type: "Packages",
  totalPackages: "1",
  description: "Stand against War and hold peace NFTs offered by PolkaBridge",
  startDate: "March 21, 2022 14:00:00 UTC",
  utilities: [
    "Support peace, not War.",
    "PBR Airdrop: Peace NFT holders will be airdropped 1999 PBR / 1 NFT on 15th April.",
  ],
  price: "0.25",
  currency: "ETH",
  network: "Ethereum",
  quantity: "500",
  packageIds: [1],
  whitepaper: "https://polkabridge.org/docs/whitepaper.pdf",
  website: "http://polkabridge.org/",
  twitter: "https://twitter.com/realpolkabridge",
  telegram: "https://t.me/polkabridgegroup",
};

let pool2 = {
  id: 2,
  image: "/projects/ancient/ancient.png",
  title: "Ancient Kingdom NFTs",
  type: "Packages",
  totalPackages: "3",
  description: `Ancient Kingdom is the first martial art game on the Blockchain, a survival RPG in which you take on the role of one of the myth warriors, eliminate monsters and compete against other players to become the hero who will save the whole kingdom.


  By joining the INO on PolkaBridge for a VIP card and entering the associated VIP maps, players can earn a rate of return on their initial investment of up to 2400% in just half a month with the maximum level of V12.`,
  startDate: "March 22, 2022 14:00:00 UTC",
  utilities: [
    "NFT items strengthen in-game characters significantly, support them to win more fights and gain more rewards ( win boss for KING token).",
    "NFTs can be traded on Marketplace but they are limited in supply which leads to the rise of NFTs prices.",
    "NFTs are on the best price.",
  ],
  price: "0.045 - 0.25",
  currency: "ETH",
  network: "Ethereum",
  quantity: "400",
  packageIds: [2, 3, 4],
  website: "https://acdom.io/",
  whitepaper: "https://acdom.io/doc/Whitepaper_Acdom_final.pdf",
  telegram: "https://t.me/AncientAnnouncement",
  twitter: "https://twitter.com/AncientKingNft",
};

pools = [pool1, pool2];
export default pools;
