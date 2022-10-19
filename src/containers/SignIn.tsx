import { Brand, Typography } from '@/components/atoms';
// import SignInForm from './SignInForm';
import GoogleSignInButton from '@/components/atoms/GoogleAuth/GoogleSignInButton';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

export const SignIn = () => {
	const { t } = useTranslation();

	return (
			<>
				<FormHeader>
					<Brand />
					<Typography.Title level={3} type='primary' noMargin>
						{t('Sign in')}
					</Typography.Title>
					<Typography.Text>{t("It's so nice to see you")}</Typography.Text>
				</FormHeader>
				{/* <SignInForm /> */}
				<GoogleLoginContainer>
					<GoogleSignInButton />
				</GoogleLoginContainer>
			</>
	);
};

export const FormHeader = styled.div`
	width: 100%;
	display: block;
	text-align: center;
	margin-bottom: 1rem;

	& > h3.ant-typography {
		margin-top: 1rem;
	}

	& > span.ant-typography {
		font-size: 1.125rem;
		color: ${({ theme }) => theme.colors.text};
	}
`;

export const GoogleLoginContainer = styled.div`
	text-align: center;
	padding: 16px;
`;
