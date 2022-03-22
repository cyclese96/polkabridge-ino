let pools = [];

let pool1 = {
  id: 1,
  image: "https://launchpad.polkabridge.org/img/logo-white.png",
  title: "PolkaBridge's Peace NFTs",
  type: "Packages",
  totalPackages: "1",
  description:
    "Stand against War and hold peace NFTs offered by PolkaBridge",
  startDate: "21 Mar,2022 4PM UTC",
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
  description: `Ancient Kingdom is an NFT Metaverse where you can create heroes, equip them with unique digital items (NFTs), and generate them into your own assets.

    The game is a unique blend of battle royale, survival RPG, and turn-based strategy games in which you play as one of the myth warriors and compete to become the hero who will save the ancient kingdom.
  
    Ancient Kingdom is developing the play-to-earn paradigm on the BSC blockchain, which will considerably enrich the discerning player experience.
  
    Appealing profits when you hit the INO on PolkaBridge`,
  startDate: "22 Mar,2022 2PM UTC",
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
