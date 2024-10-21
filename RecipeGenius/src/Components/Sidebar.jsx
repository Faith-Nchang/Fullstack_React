import './sidebar.css'; // Import CSS

const Sidebar = () => {
    return (
        <div className="sidebar">
        <h1>Recipe Genius</h1>
        <ul>
            <li>Home</li>
            <li><a href="list"> Recipes </a></li>
            <li>About</li>
        </ul>
        </div>
    );
    }; // End of Sidebar

export default Sidebar; // Export Sidebar