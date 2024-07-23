import Card from "./Card";

const Board = ({cards}) => {
  return (
    <div className="board">
     {cards.map((card) => (
        <Card key={card.index} card={card}/>
     ))}
    </div>
  );
};

export default Board;
