import Footer from "../../components/Footer.tsx"
import "./Contact.css"

const Contact = () => {
    return (
        <div className="Home">
            <div>
                <div className="Contact">
                    <h2>Contact</h2>
                    <div className="two-contacts">
                        <div>
                            <span>
                                <img src="phone-call.webp" alt="" />
                            </span>
                            <div>
                                <p>Phone:</p>
                                <p>+7 999 720-57-44</p>
                            </div>
                        </div>
                        <div><span>
                            <img src="email.webp" alt="" />
                        </span>
                            <div>
                                <p>Email:</p>
                                <p>azairov91@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <h3 >
                    <span >I'm always open to discussing product</span>
                    <br />
                    <span >design work or partnerships.</span>
                </h3>
                <form id="myForm">
                    <div class="relative z-0 w-full mt-[40px] mb-8 group">
                        <input type="text" name="name" placeholder=" " required="" />
                        <label for="name" >Name *</label>
                    </div>
                    <div class="relative z-0 w-full mb-8 group">
                        <input type="email" name="user_email" placeholder=" " id="user_email" required="" />
                        <label for="user_email">Email *</label>
                    </div>
                    <div class="relative z-0 w-full mb-8 group">
                        <input type="text" name="message" placeholder=" " id="message" required="" />
                        <label for="message">Message *</label>
                    </div>
                    <div><input type="submit" value="Submit" />
                    </div>
                </form>





                <div>
                    <form action="">





                    </form>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Contact