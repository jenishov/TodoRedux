import {createSlice} from "@reduxjs/toolkit";



export const todoList = createSlice({
    name: 'todo',
    initialState: {
        todo :[
            {
                id: 1,
                title: 'купить машину',
                isDone: false,
                isImportant: false
            },
            {
                id: 2,
                title: 'react/redux toolkit!!!',
                isDone: false,
                isImportant: false
            },
            {
                id: 3,
                title: 'Основы JavaScript',
                isDone: false,
                isImportant: false
            }
        ]
    } ,
    reducers:{
        addTodo: (state, action)=> {
            state.todo = [...state.todo,{
                id: state.todo.length ? state.todo[state.todo.length -1].id + 1 : 1,
                title: action.payload,
                isDone: false,
                isImportant: false
            }]
        },
        deleteTodo: (state, action)=>{
            state.todo = state.todo.filter( item => item.id !== action.payload)
        },
        doneTodo: (state, action) => {
            state.todo = state.todo.map(item => item.id === action.payload ? {...item, isDone: !item.isDone} : item)
        },
        impTodo: (state, action) => {
            state.todo = state.todo.map(item => item.id ===action.payload ? {...item, isImportant: !item.isImportant} : item)
        },
        changeTodo: (state, action) => {
            state.todo = state.todo.map(item => item.id === action.payload.id ? {...item, title: action.payload.title} : item)
        },
        deleteAll: (state, action) => {
            state.todo = []
        }
    }
})
export default todoList.reducer
export const {addTodo,deleteTodo,doneTodo,impTodo, changeTodo, deleteAll} = todoList.actions