import { ItemListContainer } from "./ItemListContainer";
import { Line } from "./Line";
import { WelcomeBoard } from "./WelcomeBoard";

export const LandingContainer = () => {
  return (
    <>
      <WelcomeBoard/>
      <Line/>
      <ItemListContainer category="Cajas destacadas" />
    </>
  );
};
