import { DateTime } from 'luxon';

export const DateIs = {
	Ended: 'ENDED',
	NotStarted: 'NOT_STARTED',
	Open: 'OPEN'
} as const;

export type DateIsType = (typeof DateIs)[keyof typeof DateIs];

interface DateStateProps {
	/**
	 * ISO 8601 date string
	 */
	start: Date;
	/**
	 * ISO 8601 date string
	 */
	end: Date;
}

export const getDateStatus = ({ start, end }: DateStateProps): DateIsType => {
	const startDate = DateTime.fromJSDate(start);
	const endDate = DateTime.fromJSDate(end);
	const now = DateTime.now();

	if (now.toMillis() > startDate.toMillis() && now.toMillis() < endDate.toMillis()) {
		return DateIs.Open;
	}
	if (now.toMillis() < startDate.toMillis()) {
		return DateIs.NotStarted;
	}
	return DateIs.Ended;
};
