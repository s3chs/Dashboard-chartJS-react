import React from "react";
import "./App.css";
import DashboardEmployees from "./Pages/DashboardEmployees/DashboardEmployees";
import DashboardFinance from "./Pages/DashboardFinance/DashboardFinance";
import Sidebar from "./Components/Sidebar/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashboardContextProvider from "./context/DashboardContext";

export default function App() {
  return (
    <DashboardContextProvider>
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/" exact component={DashboardFinance}></Route>
          <Route
            path="/dashboardEmployees"
            exact
            component={DashboardEmployees}
          ></Route>
        </Switch>
      </Router>
    </DashboardContextProvider>
  );
}
