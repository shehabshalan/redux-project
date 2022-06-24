import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice";
import usersReducer from "../features/users/usersSlice";
// export store to import it in Index.js so that it provides the global state
export const store = configureStore({
  reducer: {
    // we put reducers we create here
    posts: postsReducer,
    users: usersReducer,
  },
});
