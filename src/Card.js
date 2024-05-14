import "./Card.css";

function Card({ children }) {
  return (
    <div>
      <div className="card">{children}</div>
    </div>
  );
}

export default Card;
