export const News = (props) => {
  return (
    <div className="news">
      <div className="heading">
        <p className="news_title">{props.item.title}</p> 
        <p className="version">{props.item.isUpdate ? props.item.newVersion : ""}</p>
      </div>
      <p className="content">{props.item.content}</p>
      <p className="author">De: <b>{props.item.author}</b></p>
    </div>
  );
};
