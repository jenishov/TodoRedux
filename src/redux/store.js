import {configureStore} from "@reduxjs/toolkit";
import todoList from "./slice";

export const store = configureStore({

    reducer:{
        todoList
    }
})