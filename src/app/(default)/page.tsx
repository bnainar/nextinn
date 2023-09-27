import { FC } from "react";
import { CategoriesList } from "../components/categories/CategoriesList";
import { ListingGrid } from "../components/ui/listing/ListingGrid";

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  return (
    <main>
      <CategoriesList />
      <ListingGrid />
    </main>
  );
};

export default Home;
