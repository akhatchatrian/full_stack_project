import React from "react";
import ReactDOM from "react-dom";
import { configureStore } from "./store/store";
import { Root } from "./components/root";
import { signup, login } from "./actions/session_actions";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let store;

    if (window.currentUser) {
        const preloadedState = {
          session: { id: window.currentUser.id },
          entities: {
            user: { [window.currentUser.id]: window.currentUser }
          }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
      } else {
        store = configureStore();
    }
    window.store = store
    window.login = login
    window.signup = signup
    
    ReactDOM.render(<Root store={store} />, root);
})
