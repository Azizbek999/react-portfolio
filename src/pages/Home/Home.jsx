import Footer from "../../components/Footer.tsx"
import "./Home.css"


const Home = () => {
    return (
        <div className="Home">
            <div>
                <div className="about-me">
                    <h2>About Me</h2>
                    <div className="info-about-me">
                        <p>I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p>
                        <p>My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>
                    </div>
                </div>
                <section className="what-i-do">
                    <h3 >What I do!</h3>
                    <div >
                        <div >
                            <img alt="icon" />
                            <div className="space-y-2 break-all">
                                <h3>Ui/Ux Design</h3>
                                <p >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.</p>
                            </div>
                        </div>
                        <div>
                            <img alt="icon" src="/images/icons/icon-2.svg" />
                            <div >
                                <h3 >App Development</h3>
                                <p >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.</p>
                            </div>
                        </div>
                        <div >
                            <img alt="icon" src="/images/icons/icon-3.svg" />
                            <div >
                                <h3 >Photography</h3>
                                <p >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </div>
    )
}

export default Home