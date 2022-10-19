import { useGoogleLogin } from '@react-oauth/google';
import { useLocation, useNavigate } from 'react-router-dom';
import { authService } from '@/libs/auth';
import styled from 'styled-components';
import googleIcon from './assets/google_logo.webp';
import { message } from 'antd';
import { useTranslation } from 'react-i18next';

const GoogleSignInButton = () => {
  const navigate = useNavigate();
  const { pathname = 'dashboard' } = useLocation();
  const { t } = useTranslation();
  const login = useGoogleLogin({
    onSuccess: response => {
      console.log(response);
      navigate(pathname);
      // authService.setToken(response.access_token);
      authService.setToken('da6f98d20cd3e5fb552e23d947a9dd8c4a1f5cc2');
      message.success(t('You have successfully signed in!'));
    },
    onError: error => console.log(error)
  });

	return (
    <SignInButton onClick={() => login()}>
      <GoogleIcon src={googleIcon} alt='google' />
      Login With Google
    </SignInButton>
  );
};

export default GoogleSignInButton;

export const SignInButton = styled.button`
  background: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 4px;
  padding: 8px 48px;
  cursor: pointer;
`;

export const GoogleIcon = styled.img`
  width: 20px;
  margin-right: 8px;
`;