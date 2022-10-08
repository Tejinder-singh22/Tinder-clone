import React, {useState} from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'
import axios from './axios';
import   { useEffect } from 'react';
function TinderCards() {
    const [people,setPeople] = useState([]);
  
    useEffect(()=>{
    async function fetchData(){
      const req = await axios.get("http://localhost:8001/tinder/cards");
      console.log(req.data);
      setPeople(req.data);

    }
    fetchData();
    },[]);
    console.log(people);
     const swiped = (direction,nameToDelete)=>{
       console.log("removing:"+ nameToDelete);
     }

     const outOfFrame = (name)=>{
      console.log("removing:"+ name);
    }
       
    return ( 
    <div className='tinderCards'>
        <div className='tinderCards__cardConatainer'>

        {people.map((person) => (
            <TinderCard  //pre defined component
            className='swipe'
            key={person.name}
            preventSwipe={['up','down']}
            onSwipe={(dir) =>swiped(dir,person.name)}
            onCardLeftScreen={()=>outOfFrame(person.name)}
            >
           <div
           style={{ backgroundImage: `url(${person.imgUrl})` }}
           className='card'
           >
              <h3>{person.name}</h3>

           </div>
            
            </TinderCard>
             
          ))}

        </div>



        

    </div>
    );
}

export default TinderCards;