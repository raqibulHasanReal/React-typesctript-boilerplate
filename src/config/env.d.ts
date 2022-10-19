type MetaEnv = Record<string, string | boolean | undefined>;

interface ImportMetaEnv extends Readonly<MetaEnv> {
	readonly VITE_BACKEND_API_URL: string;
	readonly VITE_GOOGLE_API_KEY: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
