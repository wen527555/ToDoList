import GlobalStyle from "./styles/globalStyles";
import Content from "./components/Content";
import Header from "./components/Header";
import Progress from "./components/Progress";
import TodoList from "./components/TodoItem";
import InputBox from "./components/InputBox";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Content>
        <Progress />
        <TodoList />
        <InputBox />
      </Content>
    </>
  );
}

export default App;
