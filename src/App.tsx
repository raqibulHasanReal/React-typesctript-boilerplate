import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './assets/styles/styled';
import { Spin } from './components/atoms';
import { ErrorBoundary } from './components/ErrorBoundary';
import config, { defaultTheme } from './config';
import { BaseRoutes } from './routes';
import { persistor, store } from './store';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: false,
		},
	},
});

const App = () => {
	return (
		<GoogleOAuthProvider clientId={config.googleApiKey}>
			<Provider store={store}>
				<Suspense fallback={<Spin type='window-centre' size='large' />}>
					<PersistGate loading={<Spin type='window-centre' size='large' />} persistor={persistor}>
						<QueryClientProvider client={queryClient}>
							<ErrorBoundary>
								<ThemeProvider theme={defaultTheme}>
									<BaseRoutes />
								</ThemeProvider>
								<GlobalStyles />
							</ErrorBoundary>
							<ReactQueryDevtools initialIsOpen={config.dev} />
						</QueryClientProvider>
					</PersistGate>
				</Suspense>
			</Provider>
		</GoogleOAuthProvider>
	);
};

export default App;
