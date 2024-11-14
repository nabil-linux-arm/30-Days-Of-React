import { useState } from "react"

const App = () => {
    const [season, setSeason] = useState('summer')

    let backColour = ''
    if (season === 'summer') {
        backColour = "yellow"
    } else if (season === 'autumn') {
        backColour = "brown"
    } else if (season === 'winter') {
        backColour = 'blue'
    } else {
        backColour = 'green'
    }

    return (
        <div
            style={{
                backgroundColor: backColour
            }}
        >
            <select name="season" id="season"
                value={season}
                onChange={(e) => setSeason(e.target.value)}
            >
                <option value="autumn">Autumn</option>
                <option value="summer">Summer</option>
                <option value="winter">Winter</option>
                <option value="spring">Spring</option>
            </select>
        </div>
    )
}

export default App
