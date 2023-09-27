import { FC } from "react";
import { CategoriesList } from "../components/categories/CategoriesList";
import { ListingGrid } from "../components/ui/listing/ListingGrid";
import { Container } from "../components/ui/Container";

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  return (
    <main>
      <Container>
        <CategoriesList />
        <ListingGrid />
      </Container>
    </main>
  );
};

export default Home;
