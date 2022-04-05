import Card from "./Card";
import classes from "./Main.module.css";

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

const Main = ({ search, animals, add, remove }) => {
  return (
    <main className={classes.main}>
      <div className={classes.heading}>
        
      </div>
        {animals.map((animal) => {
          return (
            <Card
              key={animal.name}
              animalsName={animal.name}
              likesNumber={animal.likes}
              add={add}
              remove={remove}
            />
          );
        })}  
    </main>
  );
};

export default Main;
