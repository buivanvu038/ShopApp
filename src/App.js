// Trong file App.js
import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import DefountComponent from "./components/DefountComponent/DefountComponent";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";

function App() {
  return (
    <div>
      <HeaderComponent />
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            const Layout = route.DefountComponent ? DefountComponent : Fragment;
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
