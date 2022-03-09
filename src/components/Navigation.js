import { Link } from 'react-router-dom';

function Navigation(props) {
    return(<div>
        <nav>
        <Link to="/scss">SCSS</Link>
        <Link to="/material">Material UI</Link>

        </nav>
        <div>{props.children}</div> </div>)
}

export default Navigation;