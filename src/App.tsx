import { useState } from "react"

function App() {
//  const tasks = null
  const [tasks, setTasks] = useState([ 
    {
      id: 1,
      title: 'Do homework',
      isDone: false,
      addedAt: '22 march',
      priority: 4,
    },
    {
      id: 2,
      title: 'Go Shoping',
      isDone: true,
      addedAt: '16 march',
      priority: 0,
    },
    {
      id: 3,
      title: 'Clear house',
      isDone: false,
      addedAt: '25 march',
      priority: 2,
    }
])

  const [selectedTaskId, setSelectedTaskId] = useState<number|null>(null);

const getBackground = (priority: number) => {
  switch (priority) {
    case 0:
      return '#ffffff'
    case 1:
      return '#ffd7b5'
    case 2:
      return '#ffb38a'
      case 3:
        return '#ff9248' 
        case 4: 
        return '#ff6700'
    default:
      return 'grey'
  }
}

const toggleTask = (id: number) => {
  setTasks(tasks.map(task => 
    task.id === id 
    ? {...task, isDone: !task.isDone,}
    : task
  ))
}

    if (tasks === null) {
      return <div>
        <h1>To-do List</h1>
        <p>Loading...</p>
      </div>
    }

    if (tasks.length === 0) {
      return <div>
        <h1>To-do List</h1>
        <p>Your list is empty</p>
      </div>
    }


    return (
    <>
      <h1 className="title">To-do List</h1>
        <div className="task">
          <ul className="task-list">
              {
              tasks.map((task) => (
                <li
                key={task.id} 
                className="task-card" 
                onClick={() => {
                  setSelectedTaskId(task.id)
                }}
                style= {{
                  textDecorationLine: task.isDone ? 'line-through' : 'none' ,
                  background: task.isDone ? '#d3d3d3' : getBackground(task.priority), 
                  border: task.id === selectedTaskId ? '3px solid black' : 'none'
                }}>
                    <div className="task">
                      <h2 className="task-title">{task.title}</h2>
                      <input 
                      type="checkbox" 
                      checked= {task.isDone}
                      onChange={() => {toggleTask(task.id)}}
                       />
                      <p className="date">{task.addedAt}</p>
                    </div>
                </li>
              ))}
              </ul>
              <button className="reset-btn" 
                    onClick={() => {
                    setSelectedTaskId(null);
              }}>Reset selection</button>
        </div>   
    </>
  )
}

export default App
