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
import type { RequestContactImportNewList } from './RequestContactImportNewList';
import {
	RequestContactImportNewListFromJSON,
	RequestContactImportNewListFromJSONTyped,
	RequestContactImportNewListToJSON
} from './RequestContactImportNewList';

/**
 *
 * @export
 * @interface RequestContactImport
 */
export interface RequestContactImport {
	/**
	 * Mandatory if fileBody is not defined. URL of the file to be imported (no local file). Possible file formats: .txt, .csv
	 * @type {string}
	 * @memberof RequestContactImport
	 */
	fileUrl?: string;
	/**
	 * Mandatory if fileUrl is not defined. CSV content to be imported. Use semicolon to separate multiple attributes. Maximum allowed file body size is 10MB . However we recommend a safe limit of around 8 MB to avoid the issues caused due to increase of file body size while parsing. Please use fileUrl instead to import bigger files.
	 * @type {string}
	 * @memberof RequestContactImport
	 */
	fileBody?: string;
	/**
	 * Mandatory if newList is not defined. Ids of the lists in which the contacts shall be imported. For example, [2, 4, 7].
	 * @type {Array<number>}
	 * @memberof RequestContactImport
	 */
	listIds?: Array<number>;
	/**
	 * URL that will be called once the import process is finished. For reference, https://help.sendinblue.com/hc/en-us/articles/360007666479
	 * @type {string}
	 * @memberof RequestContactImport
	 */
	notifyUrl?: string;
	/**
	 *
	 * @type {RequestContactImportNewList}
	 * @memberof RequestContactImport
	 */
	newList?: RequestContactImportNewList;
	/**
	 * To blacklist all the contacts for email
	 * @type {boolean}
	 * @memberof RequestContactImport
	 */
	emailBlacklist?: boolean;
	/**
	 * To blacklist all the contacts for sms
	 * @type {boolean}
	 * @memberof RequestContactImport
	 */
	smsBlacklist?: boolean;
	/**
	 * To facilitate the choice to update the existing contacts
	 * @type {boolean}
	 * @memberof RequestContactImport
	 */
	updateExistingContacts?: boolean;
	/**
	 * To facilitate the choice to erase any attribute of the existing contacts with empty value. emptyContactsAttributes = true means the empty fields in your import will erase any attribute that currently contain data in SendinBlue, & emptyContactsAttributes = false means the empty fields will not affect your existing data ( only available if `updateExistingContacts` set to true )
	 * @type {boolean}
	 * @memberof RequestContactImport
	 */
	emptyContactsAttributes?: boolean;
}

/**
 * Check if a given object implements the RequestContactImport interface.
 */
export function instanceOfRequestContactImport(value: object): boolean {
	let isInstance = true;

	return isInstance;
}

export function RequestContactImportFromJSON(json: any): RequestContactImport {
	return RequestContactImportFromJSONTyped(json, false);
}

export function RequestContactImportFromJSONTyped(
	json: any,
	ignoreDiscriminator: boolean
): RequestContactImport {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		fileUrl: !exists(json, 'fileUrl') ? undefined : json['fileUrl'],
		fileBody: !exists(json, 'fileBody') ? undefined : json['fileBody'],
		listIds: !exists(json, 'listIds') ? undefined : json['listIds'],
		notifyUrl: !exists(json, 'notifyUrl') ? undefined : json['notifyUrl'],
		newList: !exists(json, 'newList')
			? undefined
			: RequestContactImportNewListFromJSON(json['newList']),
		emailBlacklist: !exists(json, 'emailBlacklist') ? undefined : json['emailBlacklist'],
		smsBlacklist: !exists(json, 'smsBlacklist') ? undefined : json['smsBlacklist'],
		updateExistingContacts: !exists(json, 'updateExistingContacts')
			? undefined
			: json['updateExistingContacts'],
		emptyContactsAttributes: !exists(json, 'emptyContactsAttributes')
			? undefined
			: json['emptyContactsAttributes']
	};
}

export function RequestContactImportToJSON(value?: RequestContactImport | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		fileUrl: value.fileUrl,
		fileBody: value.fileBody,
		listIds: value.listIds,
		notifyUrl: value.notifyUrl,
		newList: RequestContactImportNewListToJSON(value.newList),
		emailBlacklist: value.emailBlacklist,
		smsBlacklist: value.smsBlacklist,
		updateExistingContacts: value.updateExistingContacts,
		emptyContactsAttributes: value.emptyContactsAttributes
	};
}
