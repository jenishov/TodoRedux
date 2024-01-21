import {useDispatch,useSelector} from "react-redux";
import ListItem from "./Components/ListItem";
import {useState} from "react";
import "./scss/style.scss"
import {addTodo, deleteAll} from "./redux/slice";

function App() {

  const {todo} =useSelector(state => state.todoList)
  const [text,setText] = useState('')
  const dispatch = useDispatch()
  const addTask = ()=>{

      if (text.length >= 3){
          dispatch(addTodo(text))
          setText('')
      }
      else {
          alert("Слишком коротко")
          setText("")
      }
  }
  const [status, setStatus] = useState('all')
  return (
    <div className="App">
        <div className="container">
            <div className='content'>
                <div className='content__form'>
                    <div className='content__add'>
                        <button className='content__btn-delete' onClick={() => dispatch(deleteAll())}>remove all</button>
                        <input  placeholder='What is the task today?' className='content__input' value={text} onChange={(e)=> setText(e.target.value)}  type="text"/>
                        <button className='content__btn-add' onClick={()=> addTask()}>Save</button>
                    </div>
                    <div>
                        <ul className='content__done'>
                            {
                                todo.filter( el => status === 'done' ? el.isDone : status === 'imp' ? el.isImportant : el ).map((item)=>(
                                    <ListItem key={item.id} item={item}/>
                                ))
                            }
                        </ul>
                        {
                            todo.length ? todo.length : <h2>Список задач пуст</h2>
                        }
                    </div>


                    <div className='content__btns'>
                        <button className='content__btn' onClick={() => setStatus('all')}>all</button>
                        <button className='content__btn' onClick={() => setStatus('done')}>Complete</button>
                        <button className='content__btn' onClick={() => setStatus('imp')}>imp</button>
                    </div>
                </div>

            </div>

        </div>
    </div>
  );
}

export default App;
