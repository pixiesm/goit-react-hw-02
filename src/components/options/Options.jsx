// import s from "";

function Options({ variant, resetFeedback, totalFeedback }) {
  return (
    <>
      <div>
        <button
          onClick={() => {
            variant("good");
          }}
        >
          Good
        </button>
        <button
          onClick={() => {
            variant("neutral");
          }}
        >
          Neutral
        </button>
        <button
          onClick={() => {
            variant("bad");
          }}
        >
          Bad
        </button>
        {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
      </div>
    </>
  );
}

export default Options;
