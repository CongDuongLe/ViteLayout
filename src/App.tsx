import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes";
import { DefaultLayout} from "./components/layout";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {
            // public routes
            publicRoutes.map((route, index) => {
              const Page = route.component;
              let Layout = DefaultLayout
              if(route.layout){
                Layout = route.layout
              } else if (route.layout === null){
                Layout = Fragment
              }

              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })
          }
        </Routes>
      </div>
    </Router>
  );
};

export default App;