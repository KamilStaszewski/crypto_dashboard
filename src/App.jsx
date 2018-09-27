import React from "react";
import "./main.scss";
import Menu from './components/menu';



class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Menu />
      </div>
    )
  }
}

export default App;
