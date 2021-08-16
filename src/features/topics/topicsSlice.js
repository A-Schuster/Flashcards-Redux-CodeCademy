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
  }
}
    
})

export const selectTopics = state => state.topics.topics
export const { addTopic } = topicSlice.actions

export default topicSlice.reducer