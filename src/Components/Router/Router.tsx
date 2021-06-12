import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainPage from "../Main";
import Login from "../Login/Login";
import Search from "../Products/Search";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/products"} exact component={Search}/>
        <Route path={"/login"} exact component={Login}/>
        <Route path={"/"} exact component={MainPage}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;
