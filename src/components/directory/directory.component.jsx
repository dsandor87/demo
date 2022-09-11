import DirectoryItem from "../directory-item/directory-item.component";

import { DirectoryContainer } from "./directory.styles";

const categories = [
  {
    id: 1,
    title: "soups",
    imageUrl:
      "https://hellosubscription.com/wp-content/uploads/2021/01/image_5ff45b34dfa20.png?quality=100",
    route: "shop/soups",
  },
  {
    id: 2,
    title: "starters & appetisers",
    imageUrl:
      "https://images-gmi-pmc.edge-generalmills.com/fca4b25f-5859-4048-974c-4ef02a0014ee.jpg",
    route: "shop/starters & appetisers",
  },
  {
    id: 3,
    title: "main",
    imageUrl:
      "https://i.swncdn.com/media/800w/cms/CW/28282-thanksgiving-meal-feast-dinner.1200w.tn.webp",
    route: "shop/main",
  },
  {
    id: 4,
    title: "salads",
    imageUrl:
      "https://www.gatherandfeast.com/sites/gatherandfeast/files/styles/slider/public/images/posts/01-nectarine-roasted-walnut-salad-title.jpg?itok=Bu0UbiPO",
    route: "shop/salads",
  },
  {
    id: 5,
    title: "desserts",
    imageUrl:
      "https://www.choice.com.au/-/media/e9d5085fe5bd4af48eb25b77b647fc63.ashx",
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
