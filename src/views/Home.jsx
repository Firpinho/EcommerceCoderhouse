import { ItemListContainer } from "../components/ItemListContainer";
import { Line } from "../components/Line";
import { WelcomeBoard } from "../components/WelcomeBoard";

export const Home = () => {
  return (
    <>
      <WelcomeBoard/>
      <Line/>
      <ItemListContainer category="Cajas destacadas" />
    </>
  );
};
