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
import type { CreateSenderIpsInner } from './CreateSenderIpsInner';
import {
	CreateSenderIpsInnerFromJSON,
	CreateSenderIpsInnerFromJSONTyped,
	CreateSenderIpsInnerToJSON
} from './CreateSenderIpsInner';

/**
 *
 * @export
 * @interface UpdateSender
 */
export interface UpdateSender {
	/**
	 * From Name to update the sender
	 * @type {string}
	 * @memberof UpdateSender
	 */
	name?: string;
	/**
	 * From Email to update the sender
	 * @type {string}
	 * @memberof UpdateSender
	 */
	email?: string;
	/**
	 * Only in case of dedicated IP, IPs to associate to the sender. If passed, will replace all the existing IPs.
	 * @type {Array<CreateSenderIpsInner>}
	 * @memberof UpdateSender
	 */
	ips?: Array<CreateSenderIpsInner>;
}

/**
 * Check if a given object implements the UpdateSender interface.
 */
export function instanceOfUpdateSender(value: object): boolean {
	let isInstance = true;

	return isInstance;
}

export function UpdateSenderFromJSON(json: any): UpdateSender {
	return UpdateSenderFromJSONTyped(json, false);
}

export function UpdateSenderFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateSender {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		name: !exists(json, 'name') ? undefined : json['name'],
		email: !exists(json, 'email') ? undefined : json['email'],
		ips: !exists(json, 'ips')
			? undefined
			: (json['ips'] as Array<any>).map(CreateSenderIpsInnerFromJSON)
	};
}

export function UpdateSenderToJSON(value?: UpdateSender | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		name: value.name,
		email: value.email,
		ips:
			value.ips === undefined
				? undefined
				: (value.ips as Array<any>).map(CreateSenderIpsInnerToJSON)
	};
}