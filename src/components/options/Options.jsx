import s from "./Options.module.css";

function Options({ variant, resetFeedback, totalFeedback }) {
  return (
    <>
      <div>
        <button
          className={s.button}
          onClick={() => {
            variant("good");
          }}
        >
          Good
        </button>
        <button
          className={s.button}
          onClick={() => {
            variant("neutral");
          }}
        >
          Neutral
        </button>
        <button
          className={s.button}
          onClick={() => {
            variant("bad");
          }}
        >
          Bad
        </button>
        {totalFeedback > 0 && (
          <button className={s.button} onClick={resetFeedback}>
            Reset
          </button>
        )}
      </div>
    </>
  );
}

export default Options;
