let pools = [];

let pool1 = {
  id: 1,
  image: "https://launchpad.polkabridge.org/img/logo-white.png",
  title: "PolkaBridge's Peace NFTs",
  type: "Packages",
  totalPackages: "1",
  description: "Stand against War and hold peace NFTs offered by PolkaBridge",
  startDate: "March 21, 2022 14:00:00 UTC",
  endDate: "April 01, 2022 14:00:00 UTC",
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
  poolType: "1",
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
  endDate: "March 23, 2022 14:00:00 UTC",
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
  poolType: "1",
};

let pool3 = {
  id: 3,
  image:
    "https://static.wixstatic.com/media/03667d_125a7fc35a9a4054bb52ca6202306305~mv2.png/v1/fill/w_100,h_100,al_c,usm_0.66_1.00_0.01,enc_auto/Shoefy%20Purple%20pink.png",
  title: "ShoeFy NFTs",
  type: "Packages",
  totalPackages: "3",
  description: `ShoeFy is an innovative decentralized platform that combines Non-Fungible Tokens (NFT) and Fungible Tokens (FT). It is a futuristic NFT project that utilizes cutting-edge DeFi tools to maximize returns. ShoeFy can amplify the NFTs potential by including both farming and staking to generate passive income. ShoeFy have two tokens namely, $SHOE(ERC-20), the native Fungible Token and sNFTs (ERC-721) which are randomly generated on-chain. Each sNFT is an algorithmically programmed unique digital shoe on the platform.`,
  startDate: "April 4, 2022 14:00:00 UTC",
  endDate: "April 7, 2022 14:00:00 UTC",
  utilities: [
    "NFT staking - High Passive Income in $SHOE tokens",
    "NFT Layer Farming - Stake $SHOE tokens to mint more NFTs.",
    "Access to Play 2 Earn Car Racing Game and Free Car NFT Airdrop.",
    "Access to Shoeverse Metaverse & future collections.",
  ],
  price: "0.25",
  currency: "ETH",
  network: "Ethereum",
  quantity: "40",
  packageIds: [5],
  website: "https://www.shoefy.io/",
  whitepaper: "https://t.me/ShoeFy_Official/",
  telegram: "https://t.me/ShoeFy_Official",
  twitter: "https://twitter.com/ShoeFyio",
  poolType: "1",
};
pools = [pool1, pool2, pool3];
export default pools;
