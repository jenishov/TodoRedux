import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {changeTodo, deleteTodo, doneTodo, impTodo} from "../redux/slice";
import {FaPen} from "react-icons/fa";

const ListItem = ({item}) => {
    const dispatch = useDispatch()
    const [active, setActive] = useState(false)
    const [title, setTitle] = useState(false)
    const changeTask = () =>{
        if (title.length >= 3) {
            dispatch(changeTodo({id: item.id, title}))

        } else {
            alert('Слишком коротко')
            setTitle('')
            setActive(false)
        }

    }
    return (
        <li className="content__li" >
            <button style = {{background: item.isDone ? "lightgray" : ""}} className='content__btn' type={"button"} onClick={() => dispatch(doneTodo(item.id, item.isDone))}>Complete</button>

            <button className='content__btn' style={{background: item.isImportant ? 'lightgray' : ''}} type={"button"} onClick={() => dispatch(impTodo(item.id, item.isImportant))}>Imp</button>

            {
                active ? <>
                        <input className='content__change' onChange={(e ) => setTitle(e.target.value)} type="text" value={item.value}/>
                        <button className='content__btn' onClick={changeTask} type='button'>Save</button>
                    </>
                    : <>
                        <p className='content__title' style={{textDecoration: item.isDone ? 'line-through': "" }}>{item.title}</p>
                        <button className='content__btn-icon' onClick={() => setActive(true)} type={"button"}> <FaPen/> </button>
                    </>

            }

            <button className='content__btn-delete' onClick={() =>dispatch(deleteTodo(item.id))} type={"button"} >remove</button>

        </li>
    );
};

export default ListItem;