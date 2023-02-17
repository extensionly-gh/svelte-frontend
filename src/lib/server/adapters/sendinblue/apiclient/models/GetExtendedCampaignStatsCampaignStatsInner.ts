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
 * @interface GetExtendedCampaignStatsCampaignStatsInner
 */
export interface GetExtendedCampaignStatsCampaignStatsInner {
	/**
	 * List Id of email campaign (only in case of get email campaign(s)(not for global stats))
	 * @type {number}
	 * @memberof GetExtendedCampaignStatsCampaignStatsInner
	 */
	listId?: number;
	/**
	 * Number of unique clicks for the campaign
	 * @type {number}
	 * @memberof GetExtendedCampaignStatsCampaignStatsInner
	 */
	uniqueClicks: number;
	/**
	 * Number of total clicks for the campaign
	 * @type {number}
	 * @memberof GetExtendedCampaignStatsCampaignStatsInner
	 */
	clickers: number;
	/**
	 * Number of complaints (Spam reports) for the campaign
	 * @type {number}
	 * @memberof GetExtendedCampaignStatsCampaignStatsInner
	 */
	complaints: number;
	/**
	 * Number of delivered emails for the campaign
	 * @type {number}
	 * @memberof GetExtendedCampaignStatsCampaignStatsInner
	 */
	delivered: number;
	/**
	 * Number of sent emails for the campaign
	 * @type {number}
	 * @memberof GetExtendedCampaignStatsCampaignStatsInner
	 */
	sent: number;
	/**
	 * Number of softbounce for the campaign
	 * @type {number}
	 * @memberof GetExtendedCampaignStatsCampaignStatsInner
	 */
	softBounces: number;
	/**
	 * Number of harbounce for the campaign
	 * @type {number}
	 * @memberof GetExtendedCampaignStatsCampaignStatsInner
	 */
	hardBounces: number;
	/**
	 * Number of unique openings for the campaign
	 * @type {number}
	 * @memberof GetExtendedCampaignStatsCampaignStatsInner
	 */
	uniqueViews: number;
	/**
	 * Recipients without any privacy protection option enabled in their email client
	 * @type {number}
	 * @memberof GetExtendedCampaignStatsCampaignStatsInner
	 */
	trackableViews: number;
	/**
	 * Number of unsubscription for the campaign
	 * @type {number}
	 * @memberof GetExtendedCampaignStatsCampaignStatsInner
	 */
	unsubscriptions: number;
	/**
	 * Number of openings for the campaign
	 * @type {number}
	 * @memberof GetExtendedCampaignStatsCampaignStatsInner
	 */
	viewed: number;
	/**
	 * Number of deferred emails for the campaign
	 * @type {number}
	 * @memberof GetExtendedCampaignStatsCampaignStatsInner
	 */
	deferred?: number;
	/**
	 * Total number of non-delivered campaigns for a particular campaign id.
	 * @type {number}
	 * @memberof GetExtendedCampaignStatsCampaignStatsInner
	 */
	returnBounce?: number;
}

/**
 * Check if a given object implements the GetExtendedCampaignStatsCampaignStatsInner interface.
 */
export function instanceOfGetExtendedCampaignStatsCampaignStatsInner(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && 'uniqueClicks' in value;
	isInstance = isInstance && 'clickers' in value;
	isInstance = isInstance && 'complaints' in value;
	isInstance = isInstance && 'delivered' in value;
	isInstance = isInstance && 'sent' in value;
	isInstance = isInstance && 'softBounces' in value;
	isInstance = isInstance && 'hardBounces' in value;
	isInstance = isInstance && 'uniqueViews' in value;
	isInstance = isInstance && 'trackableViews' in value;
	isInstance = isInstance && 'unsubscriptions' in value;
	isInstance = isInstance && 'viewed' in value;

	return isInstance;
}

export function GetExtendedCampaignStatsCampaignStatsInnerFromJSON(
	json: any
): GetExtendedCampaignStatsCampaignStatsInner {
	return GetExtendedCampaignStatsCampaignStatsInnerFromJSONTyped(json, false);
}

export function GetExtendedCampaignStatsCampaignStatsInnerFromJSONTyped(
	json: any,
	ignoreDiscriminator: boolean
): GetExtendedCampaignStatsCampaignStatsInner {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		listId: !exists(json, 'listId') ? undefined : json['listId'],
		uniqueClicks: json['uniqueClicks'],
		clickers: json['clickers'],
		complaints: json['complaints'],
		delivered: json['delivered'],
		sent: json['sent'],
		softBounces: json['softBounces'],
		hardBounces: json['hardBounces'],
		uniqueViews: json['uniqueViews'],
		trackableViews: json['trackableViews'],
		unsubscriptions: json['unsubscriptions'],
		viewed: json['viewed'],
		deferred: !exists(json, 'deferred') ? undefined : json['deferred'],
		returnBounce: !exists(json, 'returnBounce') ? undefined : json['returnBounce']
	};
}

export function GetExtendedCampaignStatsCampaignStatsInnerToJSON(
	value?: GetExtendedCampaignStatsCampaignStatsInner | null
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		listId: value.listId,
		uniqueClicks: value.uniqueClicks,
		clickers: value.clickers,
		complaints: value.complaints,
		delivered: value.delivered,
		sent: value.sent,
		softBounces: value.softBounces,
		hardBounces: value.hardBounces,
		uniqueViews: value.uniqueViews,
		trackableViews: value.trackableViews,
		unsubscriptions: value.unsubscriptions,
		viewed: value.viewed,
		deferred: value.deferred,
		returnBounce: value.returnBounce
	};
}