import { useState } from "react";
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      'Project-ID': "508d4077-bbfe-4d3a-841a-52b776c4854b",
      'User-Name': username,
      'User-Secret': password
    };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject })

      localStorage.setItem('username', username)
      localStorage.setItem('password', password)

      window.location.reload();
    } catch (error) {
      // ошибки -> try с новым юзернеймом

    }

  }

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Dragon Чат</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input" placeholder="Ваш логин"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input" placeholder="Ваш пароль"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Зайти в чат</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;