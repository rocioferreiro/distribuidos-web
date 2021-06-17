import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainPage from "../Main";
import Login from "../Login/Login";
import Search from "../Products/Search";
import GeoClient from "../GeoClient/GeoClient";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/products"} exact component={Search}/>
        <Route path={"/geo"} exact component={GeoClient}/>
        <Route path={"/main"} exact component={MainPage}/>
        <Route path={"/"} exact component={Login}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;
