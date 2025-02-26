import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox"
import './App.css';
import { Scroll } from "../components/Scroll";
import { ErrorBoundary } from "../components/ErrorBoundary";


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: '',
    }
  }

  onSearchChange = (event) => {
    this.setState( {searchfield: event.target.value} )
  }

  render () {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return (this.state.robots.length === 0) ? 
      <h1>Loading</h1> :
    (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange= {this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots = {filteredRobots}/>
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')   
    .then((response) => {
     return response.json()
    })
    .then((users) => {
      this.setState({ robots: users })
    })
  }
}

export default App;