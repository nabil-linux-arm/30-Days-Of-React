const header = (
    <div className="header">
        <h1>SUBSCRIBE</h1>
        <p>Sign Up with your email address to recieve news and updates</p>
    </div>
)

const inputRow = (
    <div className="input-row">
        <input type="text" name="first" id="first" className="rectangle form-input" placeholder="First name"/>
        <input type="text" name="last" id="last" className="rectangle form-input" placeholder="Last name"/>
        <input type="text" name="email" id="email" className="rectangle form-input" placeholder="Email"/>
    </div>
)

const app2 = (
    <div className="subscribe-form">
        {header}
        {inputRow}
        <button type="button" className="action-button rectangle">Subscribe</button>
    </div>
)

export default app2
