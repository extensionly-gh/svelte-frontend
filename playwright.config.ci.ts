import type { PlaywrightTestConfig } from '@playwright/test';
import sharedConfig from './playwright.config';

const config: PlaywrightTestConfig = {
	...sharedConfig,
	webServer: {
		command: 'pnpm build:ci && pnpm preview:ci',
		port: 4173
	}
};

export default config;
