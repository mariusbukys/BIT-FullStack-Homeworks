
import './App.css';
import {useState} from 'react';

const upperlist = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerlist = "abcdefghijklmnopqrstuvwxyz";
const numberlist = "0123456789";
const symbollist = "~*$%@#^&!?*'-=/,.{}()[]<>";

function App() {
  function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const [password,setPassword] = useState()
const [uppercase, setUpperCase] = useState(true)
const [lowercase, setLowerCase] = useState(true)
const [numbers, setNumbers] = useState()
const [symbol, setSymbol] = useState()
const [length, setLength] = useState(6)
const [displaypass,setDisplayPass] = useState([])

console.log(length)

function createPassword() {
  let characters = '';
  if(uppercase){
    characters += upperlist;
  }
  if(lowercase){
    characters += lowerlist;
  }
  if(numbers){
    characters += numberlist;
  }
  if(symbol){
    characters += symbollist;
  }

 let newpassword = '';
 for (let i=0; i<length; i++){
   let index = rand(0, characters.length-1)
  newpassword += characters.charAt(index);
 }

 const storedpasswords = localStorage.getItem('passwords')
 if(!storedpasswords) {
  localStorage.setItem('passwords', JSON.stringify([]))
  
} else {
   const data = JSON.parse(storedpasswords)
   if(data.length === 10){
   console.log(data.length)
   data.splice(0,1)
   displaypass.splice(0,1)
   }else{
    data.push(password);
    setDisplayPass([...displaypass,password])  
   }
  
   localStorage.setItem('passwords', JSON.stringify(data))

  
}

 setPassword(newpassword)
}




  return (
    <div className="App container bg-secondary mt-3 w-50">
     
   <div className="p-3">
   <input className="form-control" type="text" value={password}/>
   </div>
   <div className="row ">
     <div className="d-flex justify-content-between"> 
   <div className="text-start ps-3">
   <div>
  <input type="number" min={6} max={50} defaultValue = {length} onChange={(event)=>setLength(event.currentTarget.value)}/>
  <label className="ms-3 text-white fw-bold">Slaptazodzio ilgis</label>
  </div>
  <div className="pt-2">
  <input  type="checkbox" checked={uppercase} onChange={()=>setUpperCase(!uppercase)}/>
  <label className="ms-3 text-white fw-bold">Didziosios raides(nuo A iki Z)</label>
  </div>
  <div className="pt-2">
  <input  type="checkbox" checked={lowercase} onChange={()=>setLowerCase(!lowercase)}/>
  <label className="ms-3 text-white fw-bold">Mazosios raides(nuo a iki z)</label>
  </div>
  <div className="pt-2">
  <input type="checkbox" onChange={()=>setNumbers(!numbers)}/>
  <label className="ms-3 text-white fw-bold">Skaiciai(nuo 0 iki 9)</label>
  </div>
  <div className="pt-2 align-middle">
  <input type="checkbox" onChange={()=>setSymbol(!symbol)}/>
  <label className="ms-3 text-white fw-bold">Simboliai(!@#$%^&*()+)</label>
  </div>
  </div>
  <div className="d-flex">
    <div className="text-start px-2 me-5 text-dark">
    {displaypass.map((item)=>{
      return <>
      <li>{item}</li>
      </>
    })}
    </div>
  </div>
  </div>
  </div>
  <button className="m-4 btn btn-primary" onClick={createPassword}>Generate Password</button>
    </div>
  );
}

export default App;
