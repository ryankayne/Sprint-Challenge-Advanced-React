import React, {useEffect} from "react";
import styled from 'styled-components';

const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const PlayerCard = styled.div`
    height: 200px;
    width: 400px;
    background-color: darkgrey;
    border-radius: 30px;
    margin: 2%;
`;

export default function PlayerInfo(props){
    useEffect(() => {
       console.log(props)
      }, [props]);
    return (
        <Container>
        <PlayerCard>
            <h1>Name: {props.name}</h1>
            <h2>Country: {props.country}</h2>
            <h2>Searches: {props.searches}</h2>
        </PlayerCard>
        </Container>
    )
}