const DefaultLoading = () => {
  return (
    <div className="dots__default">
      <span className="dot dot__1"></span>
      <span className="dot dot__2"></span>
      <span className="dot dot__3"></span>
    </div>
  );
};

const LootBoxLoading = () => {
  return (
    <>
      <span className="square"></span>
      <span className="icon brand">?</span>
      <div className="dots">
        <span className="dot dot__1"></span>
        <span className="dot dot__2"></span>
        <span className="dot dot__3"></span>
      </div>
    </>
  );
};

const ItemListLoading = () => {
  return (
    <>
      {/*       <span className="square__1"></span>
      <span className="square__2"></span>
      <span className="square__3"></span> */}
      <div className="dots">
        <span className="dot dot__1"></span>
        <span className="dot dot__2"></span>
        <span className="dot dot__3"></span>
      </div>
    </>
  );
};

export const LoadingScreen = (props) => {
  return (
    <div className="loading_screen__container">
      <div className="loading_screen">
        {props.section === "LootBox" ? <LootBoxLoading /> : <DefaultLoading />}
        {props.section === "ItemList" ? <ItemListLoading /> : <DefaultLoading />}
      </div>
    </div>
  );
};
