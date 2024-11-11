function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }

  return true;
}

const Header = () => {
    return (
        <div>
            <h1>30 Days Of React</h1>
            <h2>Number Generator</h2>
        </div>
    )
}

// Generates a sequance of Ints from 0 to 31
const numberSequence = [...Array(32).keys()]

const Number = ({ number }) => {

    let isOdd = number %  2 === 0 ? false : true
    let isPrimeNumber = isPrime(number)
    let backColor = "#21bf73"
    if (isPrime(number)) {
        backColor = "#fd5f53"
    } else if (isOdd) {
        backColor = "#fddb3b"
    }

    const style = {
        display: "grid",
        placeItems: "center",
        aspectRatio: "1/1",
        margin: "0",
        backgroundColor: backColor,
        color: "white",
        fontSize: "3em"
    }

    return <p style={style}>{ number }</p>
}

const Numbers = ({ numbers }) => {
    const NumberList = numbers.map((number) => <Number number={number} />)
    return NumberList
}

const NumberSection = () => {
    const style = {
        display: "grid",
        gridTemplateColumns: "repeat(8, 1fr)",
        columnGap: "3px",
        rowGap: "3px",
        width: "90%"
    }

    return (
        <div style={style}>
            <Numbers numbers={numberSequence} />
        </div>
    )
}

export default function App() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center"
            }}
        >
            <Header />
            <NumberSection />
        </div>
    )
}
