import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from "../features/topics/topicsSlice";
import quizsReducer from "../features/quizzes/quizsSlice"
import cardsReducer from '../features/cards/cardsSlice'

export default configureStore({
  reducer: {
    topics: topicsReducer,
    quizs: quizsReducer,
    cards: cardsReducer
  },
});
