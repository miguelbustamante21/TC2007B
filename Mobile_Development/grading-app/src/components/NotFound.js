import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Oops...</h2>
            <p>Page not found.</p>
            <Link to="/">Back to homepage</Link>
        </div>
     );
}
 
export default NotFound;