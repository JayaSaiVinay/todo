import { Header } from "./Header";
import { Footer } from "./Footer";
import { Article } from "./Article";
import { Main } from "./Main";
import { TaskProvider } from "../contexts/TaskContext";

export default function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <TaskProvider>
        <Article />
      </TaskProvider>
      <Footer />
    </div>
  );
}
