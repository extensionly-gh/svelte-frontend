import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	globalSetup: './playwright-global-setup.ts',
	webServer: {
		command: process.env.CI ? 'pnpm build:ci && pnpm preview:ci' : 'pnpm build && pnpm preview',
		port: 4173
	},
	testMatch: '**/*.e2e.ts',
	timeout: 30000,
	reporter: [['list'], ['html']],
	use: {
		trace: 'on',
		video: 'on',
		storageState: 'playwright-logged-in-state.json',
		locale: 'en-US'
	}
};

export default config;
