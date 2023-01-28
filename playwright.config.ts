import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'pnpm build && pnpm preview',
		port: 4173
	},
	testMatch: '**/*e2e.ts',
	timeout: 5000,
	reporter: [['list'], ['html']],
	use: {
		trace: 'retain-on-failure'
	},
	fullyParallel: true
};

export default config;
