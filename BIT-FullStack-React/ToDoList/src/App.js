
import './App.css';
import {useState} from 'react'
import {ToDo} from './Todo'
function App() {
 
const [doList, setDoList]= useState([]) //prideda nauja sukurta teksta i masyva

const [newList, setNewList]= useState("")  // sukuria nauja teksta ivedama i input

const [edit, setEdit] = useState(null)
const [editList, setEditList] = useState("")

function createText(event){
  event.preventDefault()
  setNewList(event.target.value)
  // event.target.reset()
}

function addText(){
  const idList = {
    id: new Date().getTime(),
    listName: newList,
    complete: false,
  };
  setDoList([...doList, idList])
 
  
}
function completeTask(id){
  const complete = doList.map((list) => {
 if(list.id === id){
   list.complete = !list.complete 
 } return list
  })
  setDoList(complete)
}
function editText(id){
 const edit = doList.map((list) =>{
  if(list.id === id){
    list.listName = editList
  }
  return list
 })
 setDoList(edit)
 setEdit(null)
 setEditList("")
}

function deleteList (id){
  const newToDo = doList.filter((list) => {
    if(list.id === id){
      return false
    }else{return true}
  } )
setDoList(newToDo)
}

  return (
    <div className="App container card bg-light p-4 mt-5 w-50">
      <h1 className="fw-bold">ToDo List</h1>
      <div className="addTask input-group mt-2 ">
        <input className="form-control" type="text" placeholder="iveskite teksta" onChange={createText}/>
        <button className="btn btn-primary" onClick={addText}>Prideti</button>
      </div>
      <div className="taskList flex justify-content-center ">
        {doList.map((list)=>{
          return <ToDo key={list.id} name={list.listName} comp={list.complete} id={list.id} 
          deleteList={deleteList} task={completeTask} edit= {setEdit} 
          editList={setEditList} editL = {editList} edList={edit} editing={editText}/>
        })}
      </div>
    
    </div>
  );
  }

export default App;
