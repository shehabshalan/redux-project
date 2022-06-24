import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = [
  {
    id: "1",
    title: "Redux is hell",
    content:
      "Hello I am current learning Redux and it is a bit confusing at first",
  },
  {
    id: "2",
    title: "React is cool",
    content:
      "I think react is really cool however is slow sometimes and people do not like that about it. What do you think? guess nothing. ok cool.",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.push(action.payload);
      },
      // prepare callback
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts;
export const { addPost } = postsSlice.actions;
export default postsSlice.reducer;
