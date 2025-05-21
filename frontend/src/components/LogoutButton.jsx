import { useNavigate } from 'react-router-dom';

function LogoutButton() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
    };

    return (
        <button className="btn btn-outline-danger" onClick={handleLogout}>
            Logout
        </button>
    );
}

export default LogoutButton;