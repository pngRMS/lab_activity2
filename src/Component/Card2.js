function Card2(props) {
  const cardClasses2 = props.soldOut;
  return (
    <div className="card">
      <div className="cardstatus">
        {props.cardObj.status === 0 ? (
          <label className="stock bg-warning">In Progress</label>
        ) : (
          <label className="stock bg-success">Completed</label>
        )}
      </div>
      <div className={cardClasses2} id="cardupper">
        <h3>{props.cardObj.name}</h3>
      </div>
      <div className="cardlower">
        <p className="card-description">{props.cardObj.description}</p>
      </div>
    </div>
  );
}
export default Card2;
