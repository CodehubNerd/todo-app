import React,{useState, useEffect} from 'react';
import { GrAddCircle } from 'react-icons/gr';
import { FaRegCheckCircle } from 'react-icons/fa';
import { LiaTimesSolid } from 'react-icons/lia';
import './Formcontaier.css';


const Formcontainer = () => {


  const [list, setList] = useState([]);
  const [task, setTask] = useState('');
  const [error, setError] = useState('');
 


/*storing the our task list to the web browser*/
useEffect(() => {
  const storedTasklist = localStorage.getItem('list');
  if (storedTasklist) {
    setList(JSON.parse(storedTasklist));
  }
}, []);





  /*functions*/

  /*function for submiting our typed task to the browswer , the function then feacthes the text from 
  our browser and display it on  our screen*/
  const handlesubmit = () => {
    if (task.trim() === '') {
      setError(() => (
        <h2 className='error'>Write something in the text input</h2>
      ));
    } else {
      const id = list.length + 1;
      const updatedList = [...list, { id, task }];
      setList(updatedList);
      setTask('');
  
      localStorage.setItem('list', JSON.stringify(updatedList));
    }
  };
  

  /*Deleting the task*/
  /*we pass taskId as aparameter then , we illarate trought ours tasks using filter method
  and if task.id is not equal to to the id of the task that is being currently checked 
  by our filter method we return true wich means , we want to update that task 
  to our task list otherwise if its false or the ids macth we remove the task from the list */

  const handledeleteTask = (taskId) => {
    const updatedtask = list.filter((task) => task.id !== taskId);
    setList(updatedtask);
    localStorage.setItem('list', JSON.stringify(updatedtask));
  };
  

  /*mark completed tasks*/
  const completedtask = (listId) => {
    const selecteditems = list.map((itemSelected) =>
    itemSelected.id === listId ? { ...itemSelected, isSelected: !itemSelected.isSelected } :itemSelected)
    setList(selecteditems);
  }
/* preventing downloading source code if you have not tested the application
on how it works*/


  return (
    <>
      <div className='mobile-divice-container'>
      <div className='formdesign  application-Holder'>
      
      <div className='form-feilds-container'>
      <div className="input-container"><GrAddCircle style={{cursor:'pointer'}} onClick={handlesubmit}/> </div>   
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
            <FaRegCheckCircle  onClick={() => completedtask(item.id)} className='icon'/>
            </div>
             
            <div>
            <h2
            style={{
              textDecoration: item.isSelected ? 'line-through' : 'none',
              color: item.isSelected ? 'gray' : 'black'
            }}>
            
            {item.task}</h2>
            </div>
          
         
          </div>
          <div>
          <LiaTimesSolid className='icon' onClick={() => handledeleteTask(item.id)}/>
         </div>
        

 </div>
      ))}
            <a href="https://github.com/CodehubNerd/todo-app/archive/refs/heads/main.zip" download>
            <button className=''>Download Source Code</button>
            </a>

            <div className='notes-for-use'>
              <div><p>Add task <span>@plus</span> icon</p></div>
                
             
              <div><p>Mark completed task<span>@tick</span>icon</p></div>

             
              <div><p>Delete  task <span>@cross</span> icon</p></div>

             
            </div>
           
</div>
     
     
</div>
      </div>
      
    </>
   
  )
}

export default Formcontainer