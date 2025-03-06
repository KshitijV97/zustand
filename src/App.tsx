import "./App.css";
import {
  ZustandCounter,
  ZustandTodoList,
  ReduxCounter,
  ReduxTodoList,
} from "./components";

function App() {
  return (
    <div className="App">
      <h1>Zustand vs Redux</h1>

      <section>
        <h2>Zustand Implementation</h2>
        <ZustandCounter />
        <ZustandTodoList />
      </section>

      <section>
        <h2>Redux Implementation</h2>
        <ReduxCounter />
        <ReduxTodoList />
      </section>
    </div>
  );
}

export default App;
