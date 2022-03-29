import React, { Component } from "react";
import Card from "./Card";
import classes from "./Main.module.css";

import animals from "./animals";

// const Main = () => {
//   const [likes, setLikes] = useState("0");
//   const likesHandler = () => {
//     setLikes((likes) => likes + 1);
//   };
//   const animalsList = animals.map((animal) => (
//     <Card key={animal.name} {...animal} likes={likes} add={likesHandler} />
//   ));
//   return <main className={`${classes.main}`}>{animalsList}</main>;
// };

class Main extends Component {
  state = {
    animals: animals,
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
  render() {
    const animalsList = this.state.animals.map((animal) => (
      <Card
        key={animal.name}
        animalsName={animal.name}
        likesNumber={animal.likes}
        add={this.addLikeHandler}
      />
    ));
    return <main className={`${classes.main}`}>{animalsList}</main>;
  }
}

export default Main;
