let pools = [];

let pool1 = {
  id: 1,
  image: "/projects/ancient/ancient.png",
  title: "Ancient Kingdom NFTs",
  type: "Packages",
  totalPackages: "3",
  description:
    "Take the smarter approach by purchasing The Mystery Box from our INO at a bargain price and increasing your chances of unlocking higher-level VIP maps.",
  startDate: "20 Mar,2022 2PM UTC",
  price: "0.05 ETH - 0.3 ETH",
  currency: "ETH",
  network: "Ethereum",
  quantity: "1000",
  packageIds: [1, 2, 3],
  website: "https://acdom.io/",
  whitepaper: "https://acdom.io/doc/Whitepaper_Acdom_final.pdf",
  telegram: "https://t.me/AncientAnnouncement",
  twitter: "https://twitter.com/AncientKingNft",
};

let pool2 = {
  id: 2,
  image:
    "https://pbs.twimg.com/profile_images/1448503265084252163/ch9pUzUD_400x400.jpg",
  title: "Lunapad's NFTs",
  type: "Packages",
  whitepaper: "https://pixelverse.ai/assets/pdf/deck.pdf",
  website: "https://pixelverse.ai/",
  twitter: "https://twitter.com/pixelverse1",
  telegram: "https://t.me/pixelverseofficial",
  youtube: "https://www.youtube.com/watch?v=GJJkZ05I-O4&ab_channel=PixelVerse",

  description: "Lunapad's premium NFTs available for community ",
  startDate: "21 Mar,2022 2PM UTC",
  price: "0.1",
  currency: "ETH",
  network: "Ethereum",
  quantity: "500",
  packageIds: [1],
};

let pool3 = {
  id: 3,
  image: "ds",
  title: "Lunapad's Gold NFTs",
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
pools = [pool1, pool2];
export default pools;
