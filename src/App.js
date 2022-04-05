import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
// import Link from "./components/Link";

// import Card from "./components/Card";
// import classes from "./components/Main.module.css";
import animals from "./components/animals";

class App extends Component {
  state = {
    animals: animals,
    search: "",
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

  // searchHandler = (name) => {
  //   console.log(this.state.search);
  //   if (!name) {
  //     return this.setState({
  //       search: name,
  //       animals: animals,
  //     });
  //   } else {
  //     this.setState((state) => {
  //       const searchAnimalCards = state.animals.filter((animal) => {
  //         return animal.name.indexOf(name.trim().toLowerCase()) !== -1;
  //       });
  //       // console.log(searchAnimalCards);
  //       return {
  //         search: name,
  //         animals: searchAnimalCards,
  //       };
  //     });
  //   }
  // };

  searchHandler = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const animalFilter = this.state.animals.filter((animal) =>
      animal.name.toLowerCase().includes(this.state.search.toLowerCase())
    );

    return (
      <>
        <Header value={this.state.search} onChange={this.searchHandler} />
        <h1>{this.state.animals.length} Animals</h1>
        <h3>{this.state.search}</h3>
        <Main
          animals={animalFilter}
          add={this.addLikeHandler}
          remove={this.removeCardHandler}
        />
      </>
    );
  }
}

export default App;
