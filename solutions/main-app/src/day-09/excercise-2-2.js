import { useState } from "react"


const App = () => {
    const [fetch, setFetch] = useState(false)

    function fetchData() {
        setFetch(true)
        setTimeout(() => {
            setFetch(false)
        }, 2000)
    }

    return (
        <div>
            <button type="button" onClick={fetchData}>
                { fetch ? 'Loading...' : 'Fetch data'}
            </button>
        </div>
    )
}

export default App
