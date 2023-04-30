import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import InformationPage from "./Pages/InformationPage";
import CheckInPage1 from "./Pages/CheckInPage1";
import NoMatch from "./Pages/NoMatch";
import Layout from "./Pages/Layout";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <InformationPage />
            </Layout>
          }
        />
        <Route
          path="/checkin1"
          element={
            <Layout>
              <CheckInPage1 />
            </Layout>
          }
        />
        <Route
          path="/analytics"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
