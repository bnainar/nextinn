import { FC } from "react";
import { NavBar } from "./components/navbar/NavBar";
import { CategoriesList } from "./components/categories/CategoriesList";
import { Welcome } from "./components/Welcome";

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  return (
    <div>
      <NavBar />
      <CategoriesList />
      <Welcome />
    </div>
  );
};

export default Home;
