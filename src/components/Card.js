import React from "react";
import classes from "./Card.module.css";
import Image from "./Image";
import Button from "./Button";
// import Link from "./Link";

const Card = ({ animalsName, likesNumber, add, remove }) => {
  return (
    <div className={`${classes.card}`}>
      <div className={classes.imageDiv}>
        <Image className={classes.img} title={animalsName} />
      </div>
      <div>

        <h2>{animalsName}</h2>
        <h2>{likesNumber}</h2>
        <Button
          className={`${classes.remove}`}
          click={remove}
          animalsName={animalsName}
          btnName="X"
        />
        <div className={`${classes.buttonsGroup}`}>
          <Button
            className={`${classes.add}`}
            click={add}
            animalsName={animalsName}
            btnName="Add Like"
          />
          {/* <a
            href={`https://en.wikipedia.org/wiki/${animalsName}`}
            target="_blank"
          >
            <Button
              className={`${classes.seeMore}`}
              animalsName={animalsName}
              btnName="See More"
            />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
