const countries = [
  { name: 'Finland', city: 'Helsinki' },
  { name: 'Sweden', city: 'Stockholm' },
  { name: 'Denmark', city: 'Copenhagen' },
  { name: 'Norway', city: 'Oslo' },
  { name: 'Iceland', city: 'Reykjavík' },
]

const Country = ({ country: { name, city } }) => {
    return (
        <div>
            <h1>{name}</h1>
            <small>{ city }</small>
        </div>
    )
}

const Countries = ({ countries }) => {
    const CountryList = countries.map((country) => <Country key={country.name} country={country} /> )
    return CountryList
}

export default function App() {
    return (
        <div>
            <h1>Day 6</h1>
            <Countries countries={countries} />
        </div>
    )
}
