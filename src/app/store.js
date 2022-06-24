import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

// export store to import it in Index.js so that it provides the global state
export const store = configureStore({
  reducer: {
    // we put reducers we create here
    counter: counterReducer,
  },
});
