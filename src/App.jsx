import GlobalStyle from "./styles/globalStyles";
import Content from "./components/Content";
import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";
import TodoItem from "./components/TaskItem";
import TaskInput from "./components/TaskInput";
import { useState } from "react";

const generateId = (() => {
  let id = 0;
  return () => id++;
})();

function App() {
  const [tasks, setTasks] = useState([
    { id: generateId(), text: "一天一蘋果，醫生遠離我", completed: false },
    { id: generateId(), text: "投籃1000次", completed: false },
    { id: generateId(), text: "完成 pre test作業", completed: true },
  ]);

  const handleAddTask = (text) => {
    setTasks([...tasks, { id: generateId(), text, completed: false }]);
  };

  const handleToggleTodo = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !TodoItem.completed } : task
      )
    );
  };

  return (
    <>
      <GlobalStyle />
      <Header />
      <Content>
        <ProgressBar tasks={tasks} />
        <TodoItem tasks={tasks} onToggle={handleToggleTodo} />
        <TaskInput onAdd={handleAddTask} />
      </Content>
    </>
  );
}

export default App;
