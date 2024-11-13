import { useState } from "react"
import { countriesData } from "./countries"

const Header = ({ data }) => {
    const {
        welcome,
        title,
        subtitle,
        author: { firstName, lastName },
        date,
    } = data

    return (
        <header >
            <div className='header-wrapper'>
                <h1>{welcome}</h1>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <p>
                {firstName} {lastName}
                </p>
                <small>{date}</small>
            </div>
        </header>
    )
}

const Footer = ({ date }) => {
    return (
          <footer>
            <div className='footer-wrapper'>
              <p>Copyright {date.getFullYear()}</p>
            </div>
          </footer>
        )
}

const CountryCard = ({ country }) => {
    const cardStyle = {
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
        padding: "40px"
    }

    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }
    return (
        <div
            style={cardStyle}
        >
            <div
                style={containerStyle}
            >
                <img src={country.flag} alt={ country.name } style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "contain",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                }}/>
                <h2>{ country.name }</h2>
            </div>
            <p>Capital: { country.capital }</p>
            <p>Language: { country.language }</p>
            <p>Population: { country.population }</p>
            <p>Currency: { country.currency }</p>
        </div>
    )
}

const Main = () => {

    const [country, setCountry] = useState(countriesData[0])

    function getRandomInt(n) {
      return Math.floor(Math.random() * (n + 1));
    }

    function randomCountry() {
        let countryIndex = getRandomInt(countriesData.length)
        setCountry(countriesData[countryIndex])
    }

    return (
        <div>
            <CountryCard country={country} />
            <button type="button" onClick={randomCountry}>Select Country</button>
        </div>
    )
}

export default function App() {
    const data = {
          welcome: 'Welcome to 30 Days Of React',
          title: 'Getting Started React',
          subtitle: 'JavaScript Library',
          author: {
            firstName: 'Asabeneh',
            lastName: 'Yetayeh',
          },
          date: 'Oct 7, 2020',
        }

    return (
        <div>
            <Header data={data} />
            <Main />
            <Footer date={new Date()} />
        </div>
    )
}
