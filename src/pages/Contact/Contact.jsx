import Footer from "../../components/Footer.tsx"
import "./Contact.css"

const Contact = () => {
    return (
        <div className="Contact">
            <div className="Contact-container">
                <div className="Contact-me">
                    <h2>Contact</h2>
                    <div className="two-contacts">
                        <div>
                            <span>
                                <img src="phone-call.webp" alt="" />
                            </span>
                            <div>
                                <p className="text-headed">Phone:</p>
                                <p className="text-contact">+7 999 720-57-44</p>
                            </div>
                        </div>
                        <div><span>
                            <img src="email.webp" alt="" />
                        </span>
                            <div>
                                <p className="text-headed">Email:</p>
                                <p className="text-contact">azairov91@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <form className="form-section" id="myForm">
                    <div className="login-box">
                        <div className="login-box-title">
                            <h3 >
                                <span >I'm always open to discussing product</span>
                                <br />
                                <span className="buttom-title">Design work or partnerships.</span>
                            </h3>
                        </div>
                        <div className="user-box">
                            <input type="text" name="name" placeholder=" " required="" />
                            <label for="name" >Name *</label>
                        </div>
                        <div className="user-box">
                            <input type="text" name="user_email" />
                            <label for="user_email">Email *</label>
                        </div>
                        <div className="user-box">
                            <input type="text" name="message" placeholder=" " id="message" required="" />
                            <label for="message">Message *</label>
                        </div>
                        <div className="submit-button">
                            <input className="btn-submit" type="submit" value="Submit" />
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Contact