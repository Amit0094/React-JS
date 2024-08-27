import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"


function App() {
  

  return (
    <div className="bg-gray-700 w-full h-screen pt-12 px-10">
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App
