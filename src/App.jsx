import TodoForm from "./components/todo-form.component"
import { useSelector } from "react-redux";
import TodoItem from "./components/todo-item.component";


function App() {
  const todos = useSelector(state => state.todos)
  return (
    <>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                      <TodoForm></TodoForm>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                      {
                        todos.map((todo)=>(
                          <TodoItem key={todo.id} todo={todo} className='w-full'></TodoItem>
                        ))
                      }
                    </div>
                </div>
            </div>
    </>
  )
}

export default App
