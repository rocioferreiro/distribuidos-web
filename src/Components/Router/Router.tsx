import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainPage from "../Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} exact component={MainPage}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;
