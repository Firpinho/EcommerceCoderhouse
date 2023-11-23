import { ItemListContainer } from "./ItemListContainer";
import { WelcomeBoard } from "./WelcomeBoard";

export const LandingContainer = () => {
  return (
    <>
      <WelcomeBoard/>
      <ItemListContainer category="Cajas destacadas" />
    </>
  );
};
