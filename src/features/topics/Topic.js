import NewTopicForm from "../../components/NewTopicForm";
import { Link, useParams } from "react-router-dom";
import ROUTES from "../../app/routes";
import { useSelector } from "react-redux";
import { selectTopics } from "./topicsSlice";
import { selectQuizs } from "../quizzes/quizsSlice";

export default function Topic() {
  let { topicId } = useParams();
  const topics = useSelector(selectTopics); // replace this with a call to your selector to select all the topics in state
  const quizzes = useSelector(selectQuizs); // replasce this with a call to your selector to select all the quizzes in state
  const topic = topics[topicId];
  const quizzesForTopic = topic.quizIds?.map((quizId) => quizzes[quizId]);

  return (
    <section>
      <img src={topic.icon} alt="" className="topic-icon" />
      <h1>Topic: {topic.name}</h1>
      <ul className="quizzes-list">
        {quizzesForTopic && quizzesForTopic.map((quiz) => (
          <li className="quiz" key={quiz.id}>
            <Link to={ROUTES.quizRoute(quiz.id)}>{quiz.name}</Link>
          </li>
        ))}
      </ul>
      <Link to={{pathname: '/quizzes/new/', id: topic.id}} className="button center">
        Create a New Quiz
      </Link>
    </section>
  );
}
