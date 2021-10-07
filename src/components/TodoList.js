import React, { useState,useEffect,useRef } from 'react'
import serv from './services'

function TodoList() {
    const [state, setstate] = useState([])
    const [updatest, setupdates] = useState(null)
    const todo = useRef()
    const uptask = useRef()
    useEffect(async() => {
        const res = await serv.getReq('posts/get')
        console.log(res);
        setstate(res)
    }, [])
    const handleupdate = async(id)=>{
        console.log(uptask.current.value);
        setupdates(null)
        const afupd = await serv.updateReq(id,uptask.current.value)
        setstate(await serv.getReq('posts/get'))
    }
    const handledelete = async(id)=>{
        serv.delReq(id)
        setstate(await serv.getReq('posts/get'))
    }
    const updateitems = state.map((ele)=>
        <div  key={ele._id}>
        {updatest== ele._id?<input type="text" ref={uptask}></input>:<p>{ele.task}</p>}
        <button onClick={()=>handleupdate(ele._id)}>Update</button>
        <button onClick={()=>handledelete(ele._id)}>Delete</button>
        </div>
    )
    const listItems = state.map((ele) =>
        <div key={ele._id}>
        <p>{ele.task}</p>
        <button onClick={()=>setupdates(ele._id)} className="edit-icon">Update</button>&emsp;
        <button onClick={()=>handledelete(ele._id)} className="delete-icon">Delete</button>
        </div>
    );
    const handleaddtodo = async(e)=>{
        console.log(todo.current.value);
        const newtodo = await serv.postReq(todo.current.value)
        setstate([...state,newtodo])
    }
    return (
        <div>
            <input ref={todo} type="text"  placeholder = "Add a Todo Here" />
            <button onClick={()=>handleaddtodo()}className="add-todo">Add Todo</button>
            {state && updatest==null?listItems:updateitems}
            
        </div>
    )
}

export default TodoList
