import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import "./index.js"



const initialState = 0;

const reducer = (state = initialState, action) => {
  // console.log("Init state: ", state, "\n action: ", action);
  switch (action.type) {
    case "PLUS": {
      return state + 1
    }
    case "MINUS": {
      return state - 1;
    }
    default: {
      return state;
    }
  }
}

const store = createStore(reducer);

class App extends Component {

  plusCounter = () => {
    store.dispatch({ type: "PLUS" });
  }

  minusCounter = () => {
    store.dispatch({ type: "MINUS" });
  }

  render() {
    return (
      < Fragment >
        <h1 id="myCounter">0</h1>
        <button className="btn btn-info " onClick={this.plusCounter}>+</button>
        <button className="btn btn-info " onClick={this.minusCounter}>-</button>
      </Fragment >
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));



store.subscribe(() => { //Обробка будь якої зміни в сторі
  // console.log(store.getState());
  document.getElementById("myCounter").innerHTML = store.getState();
})



// store.dispatch({ type: "PLUS" }); // по факту визиваємо екшен 
// store.dispatch({ type: "PLUS" });
// store.dispatch({ type: "PLUS" });
// store.dispatch({ type: "PLUS" });
// store.dispatch({ type: "PLUS" });

// // console.log(store.getState());

// store.dispatch({ type: "MINUS" }); // по факту визиваємо екшен 
// console.log(store.getState());



