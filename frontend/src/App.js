import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import InformationPage from "./Pages/InformationPage";
import CheckInPage1 from "./Pages/CheckInPage1";
import CheckInPage2 from "./Pages/CheckInPage2";

import NoMatch from "./Pages/NoMatch";
import Layout from "./Pages/Layout";
import HomePage from "./Pages/HomePage";
import FinalReport from "./Pages/FinalReport";

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
        <Route
          path="/checkin2"
          element={
            <Layout>
              <CheckInPage2 />
            </Layout>
          }
        />
        <Route
          path="/finalreport"
          element={
            <Layout>
              <FinalReport />
            </Layout>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
