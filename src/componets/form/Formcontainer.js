import React,{useState, useEffect} from 'react';
import { BsCircle } from 'react-icons/bs'
import { FaRegCheckCircle } from 'react-icons/fa'
import { LiaTimesSolid } from 'react-icons/lia'
import  './Formcontaier.css'


const Formcontainer = () => {


  const [list, setList] = useState([]);
  const [task, setTask] = useState('');
  const [error, setError] = useState('');
  const [Complete, setComplete] = useState([]);


  /*functions*/
  const handlesubmit = () => {
    if (task == 0) {
      setError(() => {
        return (
          <h2 className='error'>Write something in the text input</h2>
        )
      })

    } else {
      const id = list.length + 1;
      setList(previousState => [...previousState, { id: id, task: task }]);
      setTask('');
    }
  }

  /*Deleting the task*/
  /*we pass taskId as aparameter then , we illarate trought ours tasks using filter method
  and if task.id is not equal to to the id of the task that is being currently checked 
  by our filter method we return true wich means , we want to update that task 
  to our task list otherwise if its false or the ids macth we remove the task from the list */

  const handledeleteTask = (taskId) => {
    const updatedtask = list.filter((task) => task.id !== taskId);
    setList(updatedtask);
  }

  /*completed tasks*/
  const completedtask = (listId) => {
    const selecteditems = list.map((itemSelected) =>
    itemSelected.id === listId ? { ...itemSelected, isSelected: !itemSelected.isSelected }
    :itemSelected)
    setList(selecteditems);
  }


  return (
    <div className='formdesign  application-Holder'>
      
      <div className='form-feilds-container'>
      <div className="input-container"><BsCircle style={{cursor:'pointer'}} onClick={handlesubmit}/> </div>   
        <div className='application-Holder'>
          <div>{error}</div>
          <input value={task}
            onChange={e => setTask(e.target.value)}
            placeholder='Type your task here....' />
          
        </div> 
      </div>
      
    
      <div className='task-list-container' >
      {list.map((item) => (
     <div className='task' key={item.id}>
          <div className='selecteIcon-text'>
            <div>
            <FaRegCheckCircle className='icon'/>
            </div>
             
            <div>
            <h2
            style={{
              textDecoration: item.isCompleted ? 'line-through' : 'none',
              color: item.isCompleted ? 'gray' : 'black'
            }}>
            
            {item.task}</h2>
            </div>
          
         
          </div>
          <div>
          <LiaTimesSolid className='icon' onClick={() => handledeleteTask(item.id)}/>
         </div>
        

 </div>
 ))}
</div>
     
     
</div>
  )
}

export default Formcontainer