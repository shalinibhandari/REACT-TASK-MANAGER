import { useState ,useEffect} from 'react'

import Header from './components/Header'
import Tasks from './components/task'
import AddTask from './components/Addtask'
import Footer from './components/Footer'


function App ()  {
 const [showAddTask,setShowAddTask]=useState(false)
 const [tasks,setTasks] = useState([])

 useEffect(()=>
 {
   const getTasks=async()=>{
     const tasksFromServer=await fetchTasks() 
     setTasks(tasksFromServer)
   }
   getTasks()
 },[])

 const fetchTasks=async() =>{
     const res=await fetch('http://localhost:5000/tasks')
     const data=await res.json()
     return data
   }

 const fetchTask=async(id) =>{
     const res=await fetch(`http://localhost:5000/tasks/${id}`)
     const data=await res.json()
     return data
   }
const addtask= async(task)=>{
  //  const id=Math.floor(Math.random()*10000)+1
  //  const newTask={id,...task}
  //  setTasks([...tasks,newTask])

  const res= await fetch('http://localhost:5000/tasks',
{  method:'POST',
  headers:{
    'Content-type':'application/json'},
    body :JSON.stringify(task),

  })

  const data=await res.json()
  setTasks([...tasks,data])
}



const deleteTask =async (id)=>{
    await fetch(`http://localhost:5000/tasks/${id}`,{
     method:'DELETE'
    })

 setTasks(tasks.filter((task)=>task.id!==id))
}

//toggle reminder
const togglereminder = async(id)=>{
  const taskToToggle=await fetchTask(id)
  const updtask={...taskToToggle,reminder:!taskToToggle.reminder}
  const res=await fetch(`http://localhost:5000/tasks/${id}`,{
    method:'PUT',headers:{
      'Content-type':'application/json'
    },
    body:JSON.stringify(updtask)
  })
  const data=await res.json()
  
  
  setTasks(tasks.map((task)=>task.id===id?{...task,reminder:data.reminder}:task))
}
  return (
    
    <div className='container'>
    <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
    {showAddTask && <AddTask onAdd={addtask}/>}
    {tasks.length>0?<Tasks tasks={tasks}  onDelete={deleteTask} onToggle={togglereminder} /> :'NO task to show'}
    <Footer/>
    </div>
    
  )
}

export default App

