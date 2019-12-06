import React, {useEffect} from "react";

export default function PlayerInfo(props){
    useEffect(() => {
       console.log(props)
      }, []);
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h2>Country: {props.country}</h2>
            <h2>Searches: {props.searches}</h2>
        </div>
    )
}