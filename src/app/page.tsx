import { FC } from "react";
import { NavBar } from "./components/navbar/NavBar";
import { CategoriesList } from "./components/categories/CategoriesList";
import { ListingGrid } from "./components/ui/listing/ListingGrid";

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  return (
    <div>
      <NavBar />
      <CategoriesList />
      <ListingGrid />
    </div>
  );
};

export default Home;
