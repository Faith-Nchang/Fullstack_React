import './sidebar.css'; // Import CSS
import { Link } from 'react-router-dom';


const Sidebar = () => {
    return (
        <div className="sidebar">
        <h1>Recipe Genius</h1>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/visualizations"> Visualizations</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
        </div>
    );
    }; // End of Sidebar

export default Sidebar; // Export Sidebar