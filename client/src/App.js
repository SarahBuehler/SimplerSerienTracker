import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ShowSerieList } from "./components/showSerieList";
import { CreateSerie } from "./components/createSerie";
import "./App.scss";

function App() {
    return (
        <div className="app-contents">
            <BrowserRouter>
              <Routes>
                <Route exact path="/" element={<ShowSerieList />} />
                <Route path="/create-serie" element={<CreateSerie />} />
              </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;