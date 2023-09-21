import { FC } from "react";
import { NavBar } from "./components/navbar/NavBar";
import { CategoriesList } from "./components/categories/CategoriesList";
import { Welcome } from "./components/Welcome";
import { ListingGrid } from "./components/ui/listing/ListingGrid";

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  return (
    <div>
      <NavBar />
      <CategoriesList />
      <ListingGrid />
      <Welcome />
    </div>
  );
};

export default Home;
