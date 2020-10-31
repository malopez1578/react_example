import { useState, useEffect } from "react";
import getGifs  from "../../services/getGifs";
import { Card } from "../index";

export default function CardList({keyWord}) {
    const [gifs, setGifs] = useState([])

    useEffect(() => {
        getGifs({keyWord}).then(gifs => setGifs(gifs));
      }, [keyWord])
    return(gifs.map(({title, id, url}) => <Card  key={id} title={title} url={url} idCard={id} />))
}