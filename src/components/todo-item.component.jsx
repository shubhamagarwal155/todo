import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo , toggleTodoComplete, removeTodo} from "../app/features/todoAppSlice";

export default function TodoItem({todo}){

    const [isTodoEditable,setIsTodoEditable] = useState(false);
    const [todoMsg,setTodoMsg] = useState("");
    const dispatcher = useDispatch();

    const toggleTodoCompleted = () => {
        dispatcher(toggleTodoComplete(todo.id))
    }

    const removeTodoTask = ()=>{
        dispatcher(removeTodo(todo.id))
    }

    useEffect(()=>{
        setTodoMsg(todo.text)
    },[]);

    const handleInputChange = (e) => {
        setTodoMsg(e.target.value);
    }
    
    const editTodo = (e)=>{
        dispatcher(updateTodo({
            id : todo.id,
            text : todoMsg
        }))
        setIsTodoEditable(false)
    }

    return(
        <div
          className={`flex w-full border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
              todo.isCompleted ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
          }`}
      >
          <input
              type="checkbox"
              className="cursor-pointer"
              checked={todo.isCompleted}
              onChange={toggleTodoCompleted}
          />
          <input
              type="text"
              className={`border outline-none w-full bg-transparent rounded-lg ${
                  isTodoEditable ? "border-black/10 px-2" : "border-transparent"
              } ${todo.isCompleted ? "line-through" : ""}`}
              value={todoMsg}
              onChange={handleInputChange}
              readOnly={!isTodoEditable}
          />
          {/* Edit, Save Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
              onClick={() => {
                  if (todo.isCompleted) return;
                  if (isTodoEditable) {
                      editTodo();
                  } else setIsTodoEditable((prev) => !prev);
              }}
              disabled={todo.completed}
          >
              {isTodoEditable ? "📁" : "✏️"}
          </button>
          {/* Delete Todo Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
              onClick={removeTodoTask}
          >
              ❌
          </button>
      </div>
    )
}