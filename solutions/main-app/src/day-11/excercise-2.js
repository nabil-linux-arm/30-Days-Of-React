import { useState } from "react";

const MovingDiv = () => {

    const [top, setTop] = useState(0)
    const [left, setLeft] = useState(0)

    function getRandomInt(n) {
      return Math.floor(Math.random() * (n + 1));
    }

    const style = {
        backgroundColor: 'lightblue',
        display: "inline-block",
        padding: "10px 20px",
        position: "absolute",
        top: `${top}px`,
        left: `${left}px`
    }

    function handleClick() {
        setTop(getRandomInt(700));
        setLeft(getRandomInt(1400));
    }

    return (
        <div
            style={style}
            onClick={handleClick}
        >
            <h1>30 Days Of React</h1>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <MovingDiv />
        </div>
    )
}

export default App
