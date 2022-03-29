import React from "react";
import classes from "./Card.module.css";
import Image from "./Image";
import Button from "./Button";

const Card = ({ animalsName, likesNumber, add }) => {
  return (
    <div className={`${classes.card}`}>
      <Image title={animalsName} />
      <h2>{animalsName}</h2>
      <div>
        {likesNumber}
        <Button add={add} animalsName={animalsName} />
      </div>
    </div>
  );
};

export default Card;
