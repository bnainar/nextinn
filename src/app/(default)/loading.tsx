import { Container } from "../components/ui/Container";
import { ListingGridLoading } from "../components/ui/loading/ListingGridLoading";

export default function Loading() {
  return (
    <Container>
      <div className="flex flex-row gap-5 justify-between items-center mt-8 mx-auto overflow-x-auto max-w-5xl">
        {Array(6)
          .fill(0)
          .map((i) => (
            <div key={i} className="h-8 w-8"></div>
          ))}
      </div>
      <ListingGridLoading />
    </Container>
  );
}
