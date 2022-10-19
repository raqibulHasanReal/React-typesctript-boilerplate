import { hexToRGB } from '@/utils/helpers';
import styled from 'styled-components';

export const NavItems = styled.ul`
	margin: 0;
	padding: 1rem 0;
	width: 100%;
	list-style: none;
	background: ${({ theme }) => theme.colors.white};
	border-radius: 5px;
	border-right: 1px solid rgba(0, 0, 0, 0.06);

	li {
		margin: 0.25rem 0;
		display: inline-block;
		width: 100%;

		a {
			display: block;
			padding: 0.5rem 1rem;
			font-size: 1rem;
			border-left: 3px solid transparent;
			color: ${({ theme }) => theme.colors.text};

			&:hover {
				color: ${({ theme }) => theme.colors.primary};
			}

			&.active {
				font-weight: 600;
				border-color: ${({ theme }) => theme.colors.primary};
				color: ${({ theme }) => theme.colors.primary};
				background-color: ${({ theme }) => hexToRGB(theme.colors.primary, 0.1)};
			}
		}
	}
`;

export const NavItem = styled.li`
	display: block;
	margin: 0.25rem 0;
	padding: 0.25rem 0;

	&:first-child {
		margin-top: 0;
	}

	&:last-child {
		margin-bottom: 0;
	}

	a {
		font-size: 1.1rem;
		color: ${({ theme }) => theme.colors.text};

		&.active {
			font-weight: 600;
			color: ${({ theme }) => theme.colors.primary};
		}
	}
`;
