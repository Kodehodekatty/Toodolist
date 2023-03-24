import { FunctionComponent, useState } from "react";
import "./styles/App.css";
import "./components/InputField";
import InputField from "./components/InputField";
import { Todo } from "./model";
import TodoList from "./components/TodoList";

const App: FunctionComponent = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };
  return (
    <div className="main">
      <span className="header">TooDoList</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
