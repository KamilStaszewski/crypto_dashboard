import React from "react";
import MainPage from './views/MainPage';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './styles/reset.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
	  	<Router>
      		<Switch>
        		<Route exact path="/" component={MainPage} />
        	</Switch>
	  	</Router>
      </div>
    )
  }
}

export default App;
