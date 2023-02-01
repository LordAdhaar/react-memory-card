import { useEffect, useState } from "react";
import uniqid from  "uniqid";
import CurrentScore from "./CurrentScore";
import BestScore from "./BestScore";

export default function GameLogic(){

    const [score, setScore] = useState(0);
    const [best, setBest] = useState(0);
    const [visited, setVisited] = useState([]);
    const [allCards, setAllCards] = useState(["Adhaar","Utkarsh","Ayush","Abhinav","chappri","chomu"]);

    useEffect(()=>{
        console.log("i was called")
        const newCards = [...allCards];
        console.log(newCards);

        shuffle(newCards);
        console.log(newCards);
        setAllCards(newCards);

    },[score])

    const shuffle = (newCards) => {
        for (let i = newCards.length - 1; i > 0; i--) {
          let randomIdx = Math.floor(Math.random() * i);
          [newCards[randomIdx], newCards[i]] = [newCards[i], newCards[randomIdx]];
        }
      };

    function handleVisited(clickedCard){
        if(visited.includes(clickedCard)){
            
            setVisited([]);
            setScore(0);

        }
        else{
            
            setVisited([...visited,clickedCard]);
            setScore(score+1);
            
            if(score>=best){
                console.log(true)
                setBest(score+1);
            }
       
        }
        console.log(clickedCard);

    }

    const children = allCards.map(card => {
        return(
            <li key={uniqid()}>
                <button onClick={()=>{handleVisited(card)}}>{card}</button>
            </li>
        )
    })


    return(
        <div className="game">
            <CurrentScore score={score}/>
            <BestScore best={best}/>
            {children}
        </div>
    )






}
