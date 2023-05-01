import { useState } from "react";

// Write your Character component here
const [character, setCharacter] = useState();//axios characters here?

useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
        .then(res => {
            console.log(res);
        })
        .catch(err => console.err(err))
}, [])

// return (
// <div className='container'>
//     <h1>people.name</h1>
// </div>



// )
