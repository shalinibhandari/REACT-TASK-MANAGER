import Task from './Tasks'
export const task = ({  tasks ,onDelete,onToggle }) => {
    return ( <> 
    { tasks.map((task,index) => ( 
            <Task key={index} task={ task }  onDelete={onDelete} onToggle={onToggle}/>
            ))
        } 
        </>
    )
}

export default task

