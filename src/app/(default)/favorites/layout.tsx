import { Container } from "@/app/components/ui/Container";
import { Header } from "@/app/components/ui/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <Header
        title="Favorites"
        subtitle="Wonderlust places that you've bookmarked"
      />
      <main className="py-5">{children}</main>
    </Container>
  );
}
