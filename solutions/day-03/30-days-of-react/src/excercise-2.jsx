const header = (
    <div>
        <h1>SUBSCRIBE</h1>
        <p>Sign Up with your email address to recieve news and updates</p>
    </div>
)

const inputRow = (
    <div>
        <input type="text" name="first" id="first" />
        <input type="text" name="last" id="last" />
        <input type="text" name="email" id="email" />
    </div>
)

const app2 = (
    <div>
        {header}
        {inputRow}
        <button type="button">Subscribe</button>
    </div>
)

export default app2