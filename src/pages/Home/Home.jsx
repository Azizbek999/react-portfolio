import Footer from "../../components/Footer.tsx"
import "./Home.css"


const Home = () => {
    return (
        <div className="Home">
            <div>
                <div className="about-me">
                    <h2>About Me</h2>
                    <div className="info-about-me">
                        <p>Residing in Tashkent, Uzbekistan, I'm a full-stack developer deeply immersed in the realms of Node.js, React, and MongoDB. My expertise spans both frontend and backend technologies, allowing me to conceive and implement holistic solutions seamlessly.</p>
                        <p>My fascination with technology ignited a journey that led me to explore the intricate world of web development. From architecting robust backend systems with Node.js to crafting intuitive user interfaces with React, and optimizing database performance with MongoDB, I constantly push the boundaries of possibility.</p>
                    </div>
                </div>
                <section className="what-i-do">
                    <h3 >What I do!</h3>
                    <div class="grid-container" >
                        {/* <div class="flex-container">
                            <div>
                                <img alt="icon" src="/images/icons/icon-6.svg" />
                            </div>
                            <div className="space-y-2 break-all">
                                <h3>Web Development</h3>
                                <p >I craft engaging and functional websites, blending design and technology to create seamless online experiences that leave a lasting impression.</p>
                            </div>
                        </div> */}
                        <div class="flex-container">
                            <div>
                                <img alt="icon" src="/images/icons/icon-6.svg" />
                            </div>
                            <div className="break-all">
                                <h3 >Front-end Development</h3>
                                <p >I bring designs to life, building intuitive user interfaces that captivate and delight, ensuring users enjoy a smooth and responsive experience.</p>
                            </div>
                        </div>
                        <div class="flex-container">
                            <div>
                                <img alt="icon" src="/images/icons/backend.png" />
                            </div>                            <div className="break-all">
                                <h3 >Backend Development</h3>
                                <p >I architect the backbone of applications, building robust and scalable server-side systems that efficiently handle data and power dynamic online experiences.</p>
                            </div>
                        </div>
                        <div class="flex-container">
                            <div>
                                <img alt="icon" src="/images/icons/devops.png" />
                            </div>                            <div className="break-all">
                                <h3 >DevOps Development</h3>
                                <p >I optimize the software development lifecycle, automating processes and managing infrastructure to ensure swift, reliable, and efficient delivery of high-quality applications.</p>
                            </div>
                        </div>
                        <div class="flex-container dark:nano">
                            <div>
                                <img alt="icon" src="/images/icons/database.png" />
                            </div>                            <div className="break-all">
                                <h3 >Database Management</h3>
                                <p >I design and maintain efficient database systems, ensuring data integrity and seamless access, empowering applications with the information they need to thrive.</p>
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