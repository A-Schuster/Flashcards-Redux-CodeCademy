import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizs: {}
}

export const quizsSlice = createSlice({
  name: 'quizs',
  initialState,
  reducers: {
    addQuiz: (state,action) => {
      console.log(action.payload)
      state.quizs = {...state.quizs, [action.payload.id]: action.payload}
    }
  }
})

export const selectQuizs = state => state.quizs.quizs
export const { addQuiz } = quizsSlice.actions

export default quizsSlice.reducer