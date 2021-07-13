import { useState } from 'react';
import axios from 'axios';
import moduleName from 'module'

const projectID = '508d4077-bbfe-4d3a-841a-52b776c4854b';

const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Неправильный логин или пароль');
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Drago Чат</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Логин" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Пароль" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Зайти в чат</span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>

  );
};

export default Modal;