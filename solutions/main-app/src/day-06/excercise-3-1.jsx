const tenHighestPopulation = [
  { country: 'World', population: 7693165599 },
  { country: 'China', population: 1377422166 },
  { country: 'India', population: 1295210000 },
  { country: 'United States of America', population: 323947000 },
  { country: 'Indonesia', population: 258705000 },
  { country: 'Brazil', population: 206135893 },
  { country: 'Pakistan', population: 194125062 },
  { country: 'Nigeria', population: 186988000 },
  { country: 'Bangladesh', population: 161006790 },
  { country: 'Russian Federation', population: 146599183 },
  { country: 'Japan', population: 126960000 },
]

const Bar = ({ amount, total }) => {
    const percentange = (amount / total) * 100;

    return (
        <div
            style={{
                flex: "1",
                width: "50vw"
            }}
        >
            <div
                style={{
                    backgroundColor: "orange",
                    width: `${percentange}%`,
                    height: "2em",
                    borderRadius: "3px"
                }}
            >
            </div>
        </div>
    )
}

const CountryPopulation = ({ countryData: {country, population } , total_population }) => {

    const mainStyle = {
        display: "flex",
        width: "100%",
    }

    const fontStyles = {
        fontFamily: "Monaco"
    }

    return (
        <tr>
            <td
                style={fontStyles}
            >{ country.toUpperCase() }</td>
            <td>
                <Bar amount={population} total={total_population} />
            </td>
            <td
                style={fontStyles}
            >{ population.toLocaleString() }</td>
        </tr>
    )
}

const PopulationList = ({ populationData }) => {
    let world = populationData.find(item => item.country.toLowerCase() === "world")

    const popList = populationData.map((countryData) => <CountryPopulation
            countryData={countryData} total_population={world.population} />)
    return (
        <table
            style={{
                borderSpacing: "5px"
            }}
        >
            {popList}
        </table>
    );
}


export default function App() {
    return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}
            >
                <h1>30 Days of React</h1>
                <h2>World Population</h2>
                <small>Ten most populated countries</small>
                <PopulationList populationData={tenHighestPopulation} />
            </div>
        )
}
