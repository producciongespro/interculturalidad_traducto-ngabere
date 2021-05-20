/*
Referencia de librería octicons: (utilizada para generear iconos)
https://primer.style/octicons/
https://primer.style/octicons/packages/react

npm install @primer/octicons-react
*/
import React, { useState, useEffect } from "react";
import { ThumbsupIcon, ThumbsdownIcon, EyeIcon } from "@primer/octicons-react";
import "./vendor/animate.min.css";

export default function Social(props) {
  console.log("props.item", props.item);

  const conf = props.config;
  const item = props.item;
  //Parsing to Integer
  item.likes = parseInt(item.likes);
  item.dislikes = parseInt(item.dislikes);

  console.log("item.likes---->", item.likes);

  //Estados que se despliegan en tarjetas:
  const [likes, setLikes] = useState(item.likes);
  const [dislikes, setDislikes] = useState(item.dislikes);

  const [stateLike, setStateLike] = useState(false);
  const [stateDislike, setStateDislike] = useState(false);

  

  useEffect(() => {
   // console.log("updated");
    setLikes(item.likes);
    setDislikes(item.dislikes);
  });


  const handleLikesDislikes = (e) => {
    const data = {
      id: item.id,
      like: 0,
      dislike: 0,
    };
    console.log(e.currentTarget.id);
    //LIKES --------------------------------
    if (e.currentTarget.id === "btnLike") {
      if (stateLike) {
        setStateLike(false);
        setLikes(props.item.likes);
        data.like = -1;
      } else {
        setStateLike(true);
        //coprueba si el dislike fue seleccionado antes
        if (stateDislike) {
          setStateDislike(false);
          //Se resetea el conteo de dislikes a su número original:
          setDislikes(props.item.dislikes);
          data.dislike = -1;
        }

        setLikes(props.item.likes + 1);
        data.like = 1;
      }
    }

    //DISLIKES ------------------
    if (e.currentTarget.id === "btnDislike") {
      if (stateDislike) {
        setStateDislike(false);
        setDislikes(props.item.dislikes);
        data.dislike = -1;
      } else {
        setStateDislike(true);
        //coprueba si el like fue seleccionado antes
        if (stateLike) {
          //Se deshabilita el like
          setStateLike(false);
          //Se resetea el conteo de likes a su número original:
          setLikes(likes);
          data.like = -1;
        }
        setDislikes(dislikes + 1);
        data.dislike = 1;
      }
    }
    console.log(data);
    props.putLikesDislikes(data);
  };

  return (
    <div className="row">
      <div
        id="btnLike"
        className="col-4 text-center"
        role="button"
        onClick={handleLikesDislikes}
      >
        <ThumbsupIcon
          verticalAlign="middle"
          className={stateLike ? "animate__animated animate__bounce" : null}
          size={conf.size}
          fill={stateLike ? conf.fill2 : conf.fill}
          aria-label="me gusta"
        />
        <br />
        <span style={stateLike ? { color: conf.fill2 } : { color: conf.fill }}>
          {likes}
        </span>
      </div>
      <div
        id="btnDislike"
        className="col-4 text-center"
        style={
          stateDislike
            ? { backgroundColor: conf.background, borderRadius: "25%" }
            : null
        }
        role="button"
        onClick={handleLikesDislikes}
      >
        <ThumbsdownIcon
          verticalAlign="middle"
          className={stateDislike ? "animate__animated animate__flip" : null}
          size={conf.size}
          fill={stateDislike ? conf.fill2 : conf.fill}
          aria-label="no me gusta"
        />
        <br />
        <span
          style={stateDislike ? { color: conf.fill2 } : { color: conf.fill }}
        >
          {dislikes}
        </span>
      </div>
      <div className="col-4 text-center">
        <EyeIcon size={conf.size} fill={conf.fill} aria-label="vistas" />
        <br />
        <span style={{ color: conf.fill }}> {item.views}</span>
      </div>
    </div>
  );
}
