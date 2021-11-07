import Navbar from "./Navbar";
import ReactToaster from "./ReactToaster";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar> </Navbar>
        <div>
          <Routes>
            <Route path="/" element={<ReactToaster />} />
          </Routes>
        </div>
      </BrowserRouter>


    </div>
  );
}

export default App;
