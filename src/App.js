
import { useState } from 'react';
import './App.css';

function App() {


  const [newUser, setNewUser]= useState('')
  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null)

   const handleChange = (e)=>{
      setNewUser(e.target.value)
   }


  const addDetails = ()=>{
    if(editIndex === null){
      setUsers([...users, newUser])
    }else{
      const updatedUser= users.map((user,index)=>
      index === editIndex ? newUser : user
      )
      setUsers(updatedUser)
      setEditIndex(null)
    }
     
     setNewUser('')
  }


  const deleteBtn = (i)=>{
     var temp=[...users]
     temp.splice(i,1)
     setUsers(temp)
  }

  const editBtn = (i)=>{
    var temp=[...users]
    setNewUser(temp[i])
    setEditIndex(i)
  }

  return (
      <div>
          
          
           <input type='text' value={newUser}  onChange={handleChange}  placeholder='Enter the text' />
           <button type='text' onClick={addDetails} > {editIndex=== null ? "add" :"update"} </button>

            <ul>
               {
                users.map((person,i)=>(
                  <li key={i}>
                    {person}
                    <button onClick={()=>deleteBtn(i)}> Delete </button>
                    <button onClick={()=>editBtn(i)}> Edit </button>
                  </li>
                ))
               }
            </ul>

      </div>
  );
}

export default App;
