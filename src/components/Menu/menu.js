import React, { Component } from "react";
import { slide as Slider } from 'react-burger-menu';
import { BrowserRouter as Router, Link } from "react-router-dom";
import '../../styles/menu.scss';



class Menu extends Component {
  render () {
    return (
        <Router>
        <div>
          <Slider width={ 180 } isOpen={ false }>
            <Link className="menu-item" to="/main">Home</Link>
            <Link className="menu-item" to="/crypto">Currency rates</Link>
          </Slider>
        </div>
      </Router>
    );
  }
}

export default Menu;