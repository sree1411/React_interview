
import { useState } from 'react';
import './App.css';

function App() {

  const [newuser, setNewUser] = useState('');
  const [users, setUsers] = useState([])
  const [editIndex, setEditIndex] = useState(null)

  const handleChange = (e)=>{
     setNewUser(e.target.value)
  }

  const addDetails = ()=>{
    if(editIndex === null){
      setUsers([...users, {name:newuser, status:false}])
    }else{
      const updatedUser = users.map((user,index)=>
         index === editIndex ? {...user, name:newuser} : user
      )
      setUsers(updatedUser)
      setEditIndex(null)
    }
     
     setNewUser('')
  }

 
  const handleDelete = (i)=>{
     var temp =[...users]
     temp.splice(i,1)
     setUsers(temp)
  }

  const handleEdit = (i)=>{
    var temp =[...users]
    setNewUser(temp[i].name)
    setEditIndex(i)
  }

  const changeStatus = (i)=>{
     var temp = [...users]
     temp[i].status = !temp[i].status
     setUsers(temp)
  }

  return (
      <div>
           
           <input type='text' value={newuser} onChange={handleChange}  placeholder='Enter the text'  />
           <button type='text' onClick={addDetails} >  {editIndex === null ? "add" : "update"} </button>

           <ul>
              {
                users.map((person,i)=>(
                  <li key={i} className={person.status ?"mark" :"unmark"}>
                    {person.name}
                    <button onClick={()=>handleDelete(i)} > Delete </button>
                    <button onClick={()=>handleEdit(i)} > Edit </button>
                    <button onClick={()=>changeStatus(i)} > {person.status ? "undu" :"done"} </button>
                  </li>
                ))
              }
           </ul>

      </div>
  );
}

export default App;
