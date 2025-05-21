import { useState } from 'react';
import axios from 'axios';

function Register() {
    const [form, setForm] = useState({ username: '', email: '', password: '', confirm: '' });
    const [message, setMessage] = useState('');

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (form.password !== form.confirm) {
            setMessage('Passwords do not match');
            return;
        }

        try {
            const res = await axios.post('http://localhost:5000/api/register', {
                username: form.username,
                email: form.email,
                password: form.password
            });
            setMessage(res.data.message);
        } catch (err) {
            setMessage(err.response?.data?.error || 'Registration failed');
        }
    };

    return (
        <div className="container mt-5" style={{ maxWidth: '500px' }}>
            <h2>Register</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <input name="username" type="text" placeholder="Username" className="form-control mb-3" onChange={handleChange} required />
                <input name="email" type="email" placeholder="Email" className="form-control mb-3" onChange={handleChange} required />
                <input name="password" type="password" placeholder="Password" className="form-control mb-3" onChange={handleChange} required />
                <input name="confirm" type="password" placeholder="Confirm Password" className="form-control mb-3" onChange={handleChange} required />
                <button type="submit" className="btn btn-primary w-100">Register</button>
            </form>
        </div>
    );
}

export default Register;