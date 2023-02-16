interface DateFormats {
	long: Intl.DateTimeFormatOptions;
	short: Intl.DateTimeFormatOptions;
}

export const DateFormats: DateFormats = {
	long: {
		weekday: 'long',
		day: 'numeric',
		month: 'short',
		hour: '2-digit',
		minute: '2-digit'
	},
	short: {
		day: '2-digit',
		month: '2-digit',
		year: '2-digit',
		hour: '2-digit',
		minute: '2-digit'
	}
};
