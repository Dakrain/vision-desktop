import './Login.scss';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import login from '@/renderer/features/Auth/store/action';
import { selectIsAuth } from '@/renderer/features/Auth/store/selector';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAuth = useAppSelector(selectIsAuth);

  useEffect(() => {
    if (isAuth) {
      navigate('/home');
    }
  }, [isAuth, navigate]);

  const handleLogin = () => {
    dispatch(
      login({
        email: 'visiontester@gmail.com',
        password: '123456',
      }),
    );
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1 className="title">Sign in</h1>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Email" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-input">
            <input type="password" id="password" placeholder="Password" />
            <button type="button" className="toggle-password">
              <i className="eye-icon" />
            </button>
          </div>
          <a href="#" className="forgot-password">
            Forget password?
          </a>
        </div>

        <button type="button" className="sign-in-button" onClick={handleLogin}>
          Sign in
        </button>

        <p className="terms">
          By Sign in, you agree to our <a href="#">Term of services</a>,{' '}
          <a href="#">Privacy</a> & <a href="#">Cookies</a>
        </p>

        <div className="register-prompt">
          Don't have an account? <a href="#">Register</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
