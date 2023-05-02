import { useState, useEffect } from "react";

// Write your Character component here
const Character = (props) => {
const { characters, characterStats } = props;

return (
    <div className='character-container'>
        { characters.map(character => {
        return <Character character={character.name} characterStats={characterStats} key={character.id}/>
      })}

    </div>
)
}
export default Character;



// )
