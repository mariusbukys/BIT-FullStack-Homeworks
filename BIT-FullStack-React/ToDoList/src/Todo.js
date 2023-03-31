export function ToDo (props){
    return <div className=" d-flex justify-content-between mt-3">
    {props.edList === props.id ? (<input type="text" onChange={(event) => props.editList(event.target.value)}
     value= {props.editL}/>) : 
     (<li onClick={() => props.task(props.id)} style={{textDecoration:props.comp ? "line-through" : "none"}} ><h3 className="ps-2">{props.name}</h3></li>)}
    
    <div>
    <button className="btn btn-danger" onClick={() => props.deleteList(props.id)}>Istrinti</button>
    {props.edList === props.id ? (<button className="btn btn-secondary" onClick={() => props.editing(props.id)}>Redaguoti</button>) : (<button className="btn btn-secondary" onClick={() => props.edit(props.id)}>Redaguoti</button>)}
    </div>
    
    </div>
}