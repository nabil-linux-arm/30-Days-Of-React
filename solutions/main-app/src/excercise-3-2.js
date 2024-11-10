import jsImg from './images/javascript.png'
const profile = {
    name:  "Asabaneh Yetayeh",
    career: "Senior Developer",
    country: "Finland",
    skills: [
        "HTML",
        "CSS",
        "Sass",
        "JS",
        "React",
        "Redux"
    ]
}

const SkillSection = () => {
    const listStyle = {
        listStyleType: "none",
        padding: 0,
        margin: 0,
        display: "flex",
        columnGap: "10px"
    }

    const skillStyle = {
        backgroundColor: "lightblue",
        padding: "5px",
        borderRadius: "5px",
        color: "white",
        minWidth: "50px",
        textAlign: "center"
    }

    const skillsFormated = profile.skills.map((skill) => <li style={ skillStyle }>{ skill }</li>)

    return (
        <div>
            <h3>Skills</h3>
            <ul
                style={listStyle}
            >
                {skillsFormated}
            </ul>
        </div>
    )
}

const Header = () => {
    return (
        <div >
            <img src={jsImg} alt="profile" style={{ borderRadius: "50%"}}/>
            <p>{ profile.name }</p>
            <p>{profile.career}, { profile.country }</p>
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            <p>Joined on Aug 30, 2020</p>
        </div>
    )
}

export default function App() {
    return (
        <div>
            <Header />
            <SkillSection />
            <Footer />
        </div>
    )
}
