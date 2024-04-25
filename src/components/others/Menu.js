import {Link} from "react-router-dom"

const Menu = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li> 
                        <Link to="/">Strona główna</Link>
                    </li>
                    <li> 
                        <Link to="/example01">useState</Link>
                    </li>
                    <li> 
                        <Link to="/example02">useEffect</Link>
                    </li>
                    <li> 
                        <Link to="/example03">useRef</Link>
                    </li>
        
                </ul>
            </nav>

        </div>
    )
}

export default Menu;