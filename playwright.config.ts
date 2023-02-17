import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'pnpm build && pnpm preview',
		port: 4173
	},
	testMatch: '**/*.e2e.ts',
	timeout: 30000,
	reporter: [['list'], ['html']],
	use: {
		trace: 'on',
		video: 'on'
	}
};

export default config;
