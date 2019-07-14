import React ,{createContext}from "react";
import { BrowserRouter, Route } from "react-router-dom";

export const RouterContext = createContext({});

const CustomBrowserRouter = ({ children }) => (
  <BrowserRouter>
    <Route>
      {(routeProps) => {
        return (
          <RouterContext.Provider value={routeProps}>
            {children}
          </RouterContext.Provider>
        )
      }}
    </Route>
  </BrowserRouter>
);

export default CustomBrowserRouter;