import "./App.css";
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import Index from "./components/Index";
import SingleMovie from "./components/SingleMovie";

const App = () => {
  return (
    <div className="app">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/:id" element={<SingleMovie />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;