import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
// import Card from "./components/Card";
// import classes from "./components/Main.module.css";
import animals from "./components/animals";

// function App() {

//   return (
//     <div className="App">
//       <Header />
//       <Main />
//     </div>
//   );
// }
class App extends Component {
  state = {
    animals: animals,
    text: "",
  };
  addLikeHandler = (name) => {
    this.setState((state) => {
      const updateAnimalsList = state.animals.map((animal) => {
        if (animal.name === name) {
          return { ...animal, likes: animal.likes + 1 };
        } else {
          return animal;
        }
      });
      return {
        animals: updateAnimalsList,
      };
    });
  };
  removeCardHandler = (name) => {
    this.setState((state) => {
      const deleteAnimalCard = state.animals.filter((animal) => {
        return animal.name !== name;
      });
      return {
        animals: deleteAnimalCard,
      };
    });
  };

  searchChangeHandler = (name) => {
    if (!name) {
      return this.setState({
        text: name,
        animals: animals,
      });
    } else {
      this.setState((state) => {
        const searchAnimalCards = state.animals.filter((animal) => {
          return animal.name.indexOf(name.trim().toLowerCase()) !== -1;
        });
        // console.log(searchAnimalCards);
        return {
          text: name,
          animals: searchAnimalCards,
        };
      });
    }
  };

  render() {
    return (
      <>
        <Header
          value={this.state.text}
          onChange={this.searchChangeHandler}
          // onSubmit={this.handleSubmit}
        />
        <Main
          animals={this.state.animals}
          add={this.addLikeHandler}
          remove={this.removeCardHandler}
        />
      </>
    );
  }
}

export default App;
