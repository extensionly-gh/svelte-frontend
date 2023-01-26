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
import type { GetSmsCampaignsCampaignsInner } from './GetSmsCampaignsCampaignsInner';
import {
	GetSmsCampaignsCampaignsInnerFromJSON,
	GetSmsCampaignsCampaignsInnerFromJSONTyped,
	GetSmsCampaignsCampaignsInnerToJSON
} from './GetSmsCampaignsCampaignsInner';

/**
 *
 * @export
 * @interface GetSmsCampaigns
 */
export interface GetSmsCampaigns {
	/**
	 *
	 * @type {Array<GetSmsCampaignsCampaignsInner>}
	 * @memberof GetSmsCampaigns
	 */
	campaigns?: Array<GetSmsCampaignsCampaignsInner>;
	/**
	 * Number of SMS campaigns retrieved
	 * @type {number}
	 * @memberof GetSmsCampaigns
	 */
	count: number;
}

/**
 * Check if a given object implements the GetSmsCampaigns interface.
 */
export function instanceOfGetSmsCampaigns(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && 'count' in value;

	return isInstance;
}

export function GetSmsCampaignsFromJSON(json: any): GetSmsCampaigns {
	return GetSmsCampaignsFromJSONTyped(json, false);
}

export function GetSmsCampaignsFromJSONTyped(
	json: any,
	ignoreDiscriminator: boolean
): GetSmsCampaigns {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		campaigns: !exists(json, 'campaigns')
			? undefined
			: (json['campaigns'] as Array<any>).map(GetSmsCampaignsCampaignsInnerFromJSON),
		count: json['count']
	};
}

export function GetSmsCampaignsToJSON(value?: GetSmsCampaigns | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		campaigns:
			value.campaigns === undefined
				? undefined
				: (value.campaigns as Array<any>).map(GetSmsCampaignsCampaignsInnerToJSON),
		count: value.count
	};
}
