import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  topics: {}
}

export const topicSlice = createSlice({
  name: 'topics',
  initialState,
  reducers:{
    addTopic: (state,action) => {
      state.topics = {...state.topics,[action.payload.id]: action.payload}
  },
    addQuizId: (state,action) => {
      state.topics[action.payload.topicId] = {...state.topics[action.payload.topicId], quizIds: [...state.topics[action.payload.topicId].quizIds, action.payload.id]}
  }
}
    
})

export const selectTopics = state => state.topics.topics
export const { addTopic,addQuizId } = topicSlice.actions

export default topicSlice.reducer