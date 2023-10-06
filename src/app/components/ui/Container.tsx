import { FC, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <section className="mx-auto mt-4 px-6 md:px-16 overflow-x-auto max-w-7xl">
      {children}
    </section>
  );
};
