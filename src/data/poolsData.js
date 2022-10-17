let pools = [];

let pool1 = {
  id: 1,
  poolId: 1,
  image: "https://launchpad.polkabridge.org/img/logo-white.png",
  title: "PolkaBridge's Peace NFTs",
  type: "Packages",
  totalPackages: "1",
  description:
    "Stand against War and hold peace NFTs offered by PolkaBridge. We will donate to money to Ukrain to support.",
  startDate: "March 21, 2022 14:00:00 UTC",
  endDate: "April 01, 2022 14:00:00 UTC",
  utilities: [
    "Support peace, not War.",
    "PBR Airdrop: Peace NFT holders will be airdropped 1999 PBR / 1 NFT on 15th April.",
  ],
  price: "0.25",
  currency: "ETH",
  network: "Ethereum",
  chainId: [1, 4],
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
  poolId: 2,
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
  chainId: [1, 4],

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
  poolId: 3,
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
  chainId: [1, 4],

  network: "Ethereum",
  quantity: "40",
  packageIds: [5],
  website: "https://www.shoefy.io/",
  whitepaper: "https://t.me/ShoeFy_Official/",
  telegram: "https://t.me/ShoeFy_Official",
  twitter: "https://twitter.com/ShoeFyio",
  poolType: "1",
};

let pool4 = {
  id: 1,
  poolId: 4,
  image: "https://miro.medium.com/max/1400/1*9oPwMlH9Hz38bWhNzVdeWg.png",
  title: "FOTA Heros",
  type: "Packages",
  totalPackages: "5",
  description: `FOTA is a Triple-A MOBA Game project owned by Meta DJINN PTE.LTD and based in SINGAPORE, with a fantasy universe inhabited by many races throughout the universe. In the world of FOTA, NFT Technology is optimized so that users can feel the possibility of owning valuable digital assets during the journey`,
  startDate: "June 28, 2022 14:00:00 UTC",
  endDate: "June 30, 2022 14:00:00 UTC",
  utilities: [
    "Plavers can purchase and sell Hero.Item, Skin, Land on the Marketplace with $FOTA.",
    "Hero is the embodiment of the players in FOTA Metaverse. People can explore the Metaverse through Hero to play the PvE and PvP mode, then earn directly from these lessons. .",
    "In the long run, players can level up their hero and upgrade skill with EXP Point",
  ],
  price: "0.74-0.826",
  currency: "BNB",
  network: "Binance Smart Chain",
  quantity: "250",
  packageIds: [1, 2, 3, 4, 5],
  chainId: [56, 97],
  website: "https://www.fota.io/",
  whitepaper: "https://docs.fota.io/",
  telegram: "https://t.me/fota_groupchat",
  twitter: "https://twitter.com/fightoftheages",
  poolType: "1",
};


let pool6 = {
  id: 4,
  poolId: 6,
  image: "https://tatsumeeko.com/tatsumeeko_logo_white.svg",
  title: "Tatsumeeko - Aethereal Parcels",
  type: "Packages",
  totalPackages: "1",
  description: `Tatsumeeko is an in-development idle MMORPG that transports your Discord community into a vast fantasy world. Aethereal Parcels are special pieces of terrain that can be added to your Personal, Community or Guild dimensions. In addition to their cosmetic appeal, Parcels provide buffs to Players who interact with them.`,
  startDate: "October 17, 2022 15:00:00 UTC",
  endDate: "October 19, 2022 13:00:00 UTC",
  utilities: [
    "Parcels provide buffs which can further be enhanced by Artifacts. In the future, parcel owners can upgrade and share these buffs with their communities and friends. These buffs give passive bonuses to different gameplay aspects like combat, crafting or resource bonuses.",
    "Learn more at: https://tatsumeeko.com/parcels"
  ],
  price: "0.1",
  currency: "ETH",
  chainId: [1, 4],

  network: "Ethereum",
  quantity: "50",
  packageIds: [1],
  website: "https://tatsumeeko.com/",
  whitepaper: "https://tatsumeeko.com/whitepaper",
  telegram: "https://discord.com/invite/tatsu",
  twitter: "https://twitter.com/tatsumeeko",
  poolType: "1",
};

pools = [pool1, pool2, pool3, pool4, pool6];

export default pools;
