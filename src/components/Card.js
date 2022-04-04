import React from "react";
import classes from "./Card.module.css";
import Image from "./Image";
import Button from "./Button";
// import Link from "./Link";

const Card = ({ animalsName, likesNumber, add, remove}) => {
  return (
    <div className={`${classes.card}`}>
      <Image title={animalsName} />
      <h2>{animalsName}</h2>
      <div>
        {likesNumber}
        <div>
          <Button
            className={`${classes.add}`}
            click={add}
            animalsName={animalsName}
            btnName="Add Button"
          />
          <Button
            className={`${classes.remove}`}
            click={remove}
            animalsName={animalsName}
            btnName="X"
          />
          <a
            href={`https://en.wikipedia.org/wiki/${animalsName}`}
            target="_blank"
          >
            <Button
              className={`${classes.seeMore}`}
              animalsName={animalsName}
              btnName="See More"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
