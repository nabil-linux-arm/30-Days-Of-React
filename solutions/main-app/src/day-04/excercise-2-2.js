
function FormInputs() {

    const sectionStyle = {
        display: "flex",
        columnGap: "10px"
    }

    const inputStyle = {
        width: "25ch",
        padding: "0.7rem 10px",
        marginTop: "5vh",
        borderRadius: "5px",
        borderStyle: "none"
    }
    return (
        <div
            style={sectionStyle}
        >
            <input type="text" style={inputStyle} placeholder="First name"/>
            <input type="text" style={inputStyle} placeholder="Last name"/>
            <input type="text" style={inputStyle} placeholder="Email"/>
        </div>
    )
}

export default function App() {

    const divStyle = {
        display: "grid",
        justifyItems: "center",
        backgroundColor: "lightblue",
        width: "70vw",
        margin: "auto",
        borderRadius: "20px"
    }

    const subscribeBtnStyle = {
        backgroundColor: "rgb(237,119,119)",
        margin: "1.5rem",
        color: "white",
        padding: "0.7rem 0px",
        width: "45ch",
        borderRadius: "5px",
        borderStyle: "none"
    }

    return (
        <div
            style={divStyle}
        >
            <h1>SUBSCRIBE</h1>
            <p>Sign up with your email address to recieve news and updates</p>
            <FormInputs />
            <button type="button" style={subscribeBtnStyle}>Subscribe</button>
        </div>
    )
}
