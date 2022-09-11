import DirectoryItem from "../directory-item/directory-item.component";

import { DirectoryContainer } from "./directory.styles";

const categories = [
  {
    id: 1,
    title: "soups",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    route: "shop/soups",
  },
  {
    id: 2,
    title: "starters & appetisers",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    route: "shop/starters & appetisers",
  },
  {
    id: 3,
    title: "main",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    route: "shop/main",
  },
  {
    id: 4,
    title: "salads",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    route: "shop/salads",
  },
  {
    id: 5,
    title: "desserts",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    route: "shop/desserts",
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
