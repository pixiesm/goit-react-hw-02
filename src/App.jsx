import { useEffect, useState } from "react";
import "./App.css";
import Description from "./components/description/Description";
import Options from "./components/options/Options";
import Feedback from "./components/feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const initialFeedback = { good: 0, neutral: 0, bad: 0 };
  const [reviews, setReviews] = useState(() => {
    const savedData = JSON.parse(window.localStorage.getItem("reviews"));
    if (savedData?.length) {
      return savedData;
    }
    return initialFeedback;
  });

  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;

  const positiveFeedback = Math.round((reviews.good / totalFeedback) * 100);

  const updateFeedback = (feedbackType) => {
    console.log(feedbackType);
    setReviews((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };
  useEffect(() => {
    window.localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const resetFeedback = () => {
    const initialFeedback = { good: 0, neutral: 0, bad: 0 };
    setReviews(initialFeedback);
  };

  return (
    <div>
      <Description />
      <Options
        variant={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={reviews}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
