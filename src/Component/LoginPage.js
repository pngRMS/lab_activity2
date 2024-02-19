import React from "react";

function LoginPage({ onLogin }) {
  return (
    <body>
      <div class="login-container justify-content-center">
        <h2>Login</h2>
        <form class="login-form">
          <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" class="login-btn" onClick={onLogin}>
            Login
          </button>
        </form>
      </div>
    </body>
  );
}

export default LoginPage;
