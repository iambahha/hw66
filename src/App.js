import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Pages from "./containers/Pages/Pages";
import AdminPage from "./containers/AdminPage/AdminPage";


const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path='/' exact render={() => <h1 style={{textAlign: 'center'}}>Home will be here!</h1>}/>
        <Route path='/pages/admin' exact component={AdminPage}/>
        <Route path='/pages/:name' component={Pages}/>
        <Route render={() => <h1>Not Found</h1>}/>
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
