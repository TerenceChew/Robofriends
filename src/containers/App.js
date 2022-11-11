import { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  // state = { // Class Field Proposal syntax
  //   robots: [],
  //   searchField: ''
  // }

  getSearchBoxValue = (event) => {
    // Class Field Proposal syntax
    this.setState({
      searchField: event.target.value,
    });
  };

  render() {
    const { robots, searchField } = this.state;
    const filteredRobot = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1 ma4">Robofriends</h1>
        <SearchBox acquireInputValue={this.getSearchBoxValue} />
        <hr />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobot} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;

// detect change in SearchBox, run callback
// in App, execute callback, update searchField
// create filteredRobot, pass to CardList as props
