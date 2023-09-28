import { Container } from "@/app/components/ui/Container";
import { Header } from "@/app/components/ui/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <Header title="Properties" subtitle="Manage your listings" />
      <main className="py-5">{children}</main>
    </Container>
  );
}
