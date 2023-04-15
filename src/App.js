import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import "./App.css";
import InformationPage from "./Pages/InformationPage";
import NoMatch from "./Pages/NoMatch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InformationPage />}>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
