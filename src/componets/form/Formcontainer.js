import React,{useState, useEffect} from 'react';
import { BsCircle } from 'react-icons/bs'
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
    const updatedtask = task.filter((task) => task.id !== taskId);
    setTask(updatedtask);
  }

  /*completed tasks*/
  const completedtask = (listId) => {
    const selecteditems = list.map((itemSelected) =>
      item.id === listId ? { ...itemSelected, isSelected: !itemSelected.isSelected }
    :itemSelected)
      
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
       <BsCircle/>
      <h2>{item.task}</h2>
 </div>
 ))}
</div>
     
     
</div>
  )
}

export default Formcontainer