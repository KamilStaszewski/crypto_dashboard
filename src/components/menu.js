import React from "react";
import { slide as Slider } from 'react-burger-menu';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Main from './main';
import Userlist from './userlist';



export default class Menu extends React.Component {
  render () {
    return (
        <Router>
        <div>
          <Slider width={ 180 } isOpen={ false }>
            <Link className="menu-item" to="/main">Home</Link>
            <Link className="menu-item" to="/crypto">About</Link>
          </Slider>
             <Switch>
                <Route path="/main" component={Main} />
                <Route path="/crypto" component={Userlist} />
             </Switch>
          </div>
      </Router>
    );
  }
}