
import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import axios from "axios";
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        this.setState({
          smurfs: res.data
        });
      })
      .catch(err => console.log(err));
  }

  createHandler = data => {
    axios
      .post("http://localhost:3333/smurfs", data)
      .then(res => {
        this.setState({
          smurfs: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteHandler = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        this.setState({
          smurfs: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const NewButton = () => {
      return <NavLink to="/new">Add</NavLink>;
    };

    const BackButton = () => {
      return <NavLink to="/">Back</NavLink>;
    };

    return (
      <div className="App">
        <Route exact path="/new" component={BackButton} />
        <Route
          exact
          path="/new"
          render={props => (
            <SmurfForm {...props} createHandler={this.createHandler} />
          )}
        />
        <Route exact path="/" component={NewButton} />
        <Route
          path="/"
          render={props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              deleteHandler={this.deleteHandler}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
