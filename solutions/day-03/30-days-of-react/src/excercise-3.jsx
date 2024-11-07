import chickenImage from './images/crispy_sesame_chicken.jpg'
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

const profileImage = {
    borderRadius: "50%"
}
const header = (
    <div>
        <img src={chickenImage} alt="profile picture" style={ profileImage } />
        <p>{ profile.name }</p>
        <p>{profile.career}, { profile.country }</p>
    </div>
)

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
const skill_section = (
    <div>
        <h3>Skills</h3>
        <ul
            style={listStyle}
        >
            {skillsFormated}
        </ul>
    </div>
)

const footer = (
    <div>
        <p>Joined on Aug 30, 2020</p>
    </div>
)

const app3 = (
    <div>
        {header}
        {skill_section}
        {footer}
    </div>
)

export default app3
