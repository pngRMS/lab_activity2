function Card(props) {
  const cardClasses = props.soldOut;
  return (
    <div className="card">
      <div className={cardClasses} id="cardupper">
        <img
          className="fileimage"
          src={props.cardObj.photoName}
          alt={props.cardObj.name}
        />
        <h3>{props.cardObj.name}</h3>
      </div>

      <div className="_1e82902f-document-item-actions wrap">
        <img
          className="upload"
          src={props.cardObj.upload}
          alt={props.cardObj.name}
        ></img>
        <div className="cDescription ">
          <p>{props.cardObj.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
