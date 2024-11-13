import { useState } from "react"

const Animal = () => {
    const [image, setImage] = useState('https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg')

    const changeAnimal = () => {
        const dogURL = 'https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg';
        const catURL = 'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg';
        // toggling between dog and cat image URLs
        setImage((prevImage) => (prevImage === catURL ? dogURL : catURL));
    };


    return (
        <div className='App'>
        <h1>30 Days Of React</h1>
        <div className='animal'>
            <img src={image} alt='animal' />
        </div>

        <button onClick={changeAnimal} class='btn btn-add'>
            Change
        </button>
        </div>
    )
}

export default function App() {
    return (
        <div>
            <Animal />
        </div>
    )
}
