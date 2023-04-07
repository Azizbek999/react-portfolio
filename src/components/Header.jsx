import DarkMode from "./DarkMode/DarkMode.tsx"
// import DarkMode from "./DarkMode/DarkMode.js"
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <span>Hola</span>
            <DarkMode />
        </div>
    )
}

export default Header