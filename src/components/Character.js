import React from "react";

// Write your Character component here
const Character = (props) => {
const { character } = props;

return (
    <div className='character-container'>
        <h2>{character.name}</h2>
    </div>
)
}
export default Character;



// )
