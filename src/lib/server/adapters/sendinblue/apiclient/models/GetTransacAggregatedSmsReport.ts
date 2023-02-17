/* tslint:disable */
/* eslint-disable */
/**
 * SendinBlue API
 * SendinBlue provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/sendinblue  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  |   | 406  | Error. Not Acceptable  |
 *
 * The version of the OpenAPI document: 3.0.0
 * Contact: contact@sendinblue.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 *
 * @export
 * @interface GetTransacAggregatedSmsReport
 */
export interface GetTransacAggregatedSmsReport {
	/**
	 * Time frame of the report
	 * @type {string}
	 * @memberof GetTransacAggregatedSmsReport
	 */
	range: string;
	/**
	 * Number of requests for the timeframe
	 * @type {number}
	 * @memberof GetTransacAggregatedSmsReport
	 */
	requests: number;
	/**
	 * Number of delivered SMS for the timeframe
	 * @type {number}
	 * @memberof GetTransacAggregatedSmsReport
	 */
	delivered: number;
	/**
	 * Number of hardbounces for the timeframe
	 * @type {number}
	 * @memberof GetTransacAggregatedSmsReport
	 */
	hardBounces: number;
	/**
	 * Number of softbounces for the timeframe
	 * @type {number}
	 * @memberof GetTransacAggregatedSmsReport
	 */
	softBounces: number;
	/**
	 * Number of blocked contact for the timeframe
	 * @type {number}
	 * @memberof GetTransacAggregatedSmsReport
	 */
	blocked: number;
	/**
	 * Number of unsubscription for the timeframe
	 * @type {number}
	 * @memberof GetTransacAggregatedSmsReport
	 */
	unsubscribed: number;
	/**
	 * Number of answered SMS for the timeframe
	 * @type {number}
	 * @memberof GetTransacAggregatedSmsReport
	 */
	replied: number;
	/**
	 * Number of accepted for the timeframe
	 * @type {number}
	 * @memberof GetTransacAggregatedSmsReport
	 */
	accepted: number;
	/**
	 * Number of rejected for the timeframe
	 * @type {number}
	 * @memberof GetTransacAggregatedSmsReport
	 */
	rejected: number;
}

/**
 * Check if a given object implements the GetTransacAggregatedSmsReport interface.
 */
export function instanceOfGetTransacAggregatedSmsReport(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && 'range' in value;
	isInstance = isInstance && 'requests' in value;
	isInstance = isInstance && 'delivered' in value;
	isInstance = isInstance && 'hardBounces' in value;
	isInstance = isInstance && 'softBounces' in value;
	isInstance = isInstance && 'blocked' in value;
	isInstance = isInstance && 'unsubscribed' in value;
	isInstance = isInstance && 'replied' in value;
	isInstance = isInstance && 'accepted' in value;
	isInstance = isInstance && 'rejected' in value;

	return isInstance;
}

export function GetTransacAggregatedSmsReportFromJSON(json: any): GetTransacAggregatedSmsReport {
	return GetTransacAggregatedSmsReportFromJSONTyped(json, false);
}

export function GetTransacAggregatedSmsReportFromJSONTyped(
	json: any,
	ignoreDiscriminator: boolean
): GetTransacAggregatedSmsReport {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		range: json['range'],
		requests: json['requests'],
		delivered: json['delivered'],
		hardBounces: json['hardBounces'],
		softBounces: json['softBounces'],
		blocked: json['blocked'],
		unsubscribed: json['unsubscribed'],
		replied: json['replied'],
		accepted: json['accepted'],
		rejected: json['rejected']
	};
}

export function GetTransacAggregatedSmsReportToJSON(
	value?: GetTransacAggregatedSmsReport | null
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		range: value.range,
		requests: value.requests,
		delivered: value.delivered,
		hardBounces: value.hardBounces,
		softBounces: value.softBounces,
		blocked: value.blocked,
		unsubscribed: value.unsubscribed,
		replied: value.replied,
		accepted: value.accepted,
		rejected: value.rejected
	};
}