import GlobalStyle from "./styles/globalStyles";
import Content from "./components/Content";
import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";
import TaskItem from "./components/TaskItem";
import TaskInput from "./components/TaskInput";
import { useState } from "react";

const generateId = (() => {
  let id = 0;
  return () => id++;
})();

function App() {
  const [tasks, setTasks] = useState([
    {
      id: generateId(),
      text: "一天一蘋果，醫生遠離我",
      completed: false,
    },
    {
      id: generateId(),
      text: "投籃1000次",
      completed: false,
    },
    {
      id: generateId(),
      text: "完成 pre test作業",
      completed: true,
    },
  ]);

  const handleAddTask = (text) => {
    setTasks([...tasks, { id: generateId(), text, completed: false }]);
  };

  const handleToggleTodo = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks((preTasks) =>
      preTasks.map((task) =>
        task.id === id ? { ...task, isDeleting: true } : task
      )
    );
    setTimeout(() => {
      setTasks((preTasks) => preTasks.filter((task) => task.id !== id));
    }, 2000);
  };

  return (
    <>
      <GlobalStyle />
      <Header />
      <Content>
        <ProgressBar tasks={tasks} />
        <TaskItem
          tasks={tasks}
          onToggle={handleToggleTodo}
          onDelete={handleDeleteTask}
        />
        <TaskInput onAdd={handleAddTask} />
      </Content>
    </>
  );
}

export default App;
