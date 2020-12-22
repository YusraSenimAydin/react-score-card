import React from "react";


function Card(props) {
  const [score, setScore] = React.useState(
    Number(localStorage.getItem(props.id)) || 0
  );

  const clickHandler = event => {
    event.target.name == "increase" ? setScore(score + 1) : setScore(score - 1);
  };

  localStorage.setItem(props.id, score);

  return (
    <div className="col">
      <div className="card shadow-sm  mb-5">
        <div className="card-body">
          <p className="card-text">{props.body}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                name="increase"
                onClick={clickHandler}
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Arttır
              </button>
              <button
                name="decrease"
                onClick={clickHandler}
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Azalt
              </button>
            </div>
            <small class="text-muted">{score} Score</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
