import htmlImg from './images/html.png'
import cssImg from './images/css.png'
import jsImg from './images/javascript.png'
import reactImg from './images/react.png'


export default function App() {
    const listStyle = {
        listStyleType: "none",
        display: "flex",
        padding: "0",
        margin: "0"
    }

    const divStyle = {
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "rgb(240,241,247)",
        width: "60vw"
    }

    return (
        <div
            style={divStyle}
        >
            <h2>Front End Technologies</h2>
            <ul
                style={listStyle}
            >
                <li><img src={htmlImg} alt="" /></li>
                <li><img src={cssImg} alt="" /></li>
                <li><img src={jsImg} alt="" /></li>
                <li><img src={reactImg} alt="" /></li>
            </ul>
        </div>
    )
}
