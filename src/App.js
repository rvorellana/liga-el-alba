import { Route } from "react-router-dom";
import "./App.css";
import Home from "./features/Home";
import Table from "./features/Table";
import Navbar from "./components/General/Navbar";

function App() {
  return (
    <div className="w-auto h-screen pb-4 bg-gray-200">
      <Navbar />
      <main>
        <Route exact path="/" component={Home} />
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/tables">
          <Table />
        </Route>
      </main>
    </div>
  );
}

export default App;
