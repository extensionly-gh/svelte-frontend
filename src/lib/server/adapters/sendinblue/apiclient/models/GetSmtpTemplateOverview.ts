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
import type { GetSmtpTemplateOverviewSender } from './GetSmtpTemplateOverviewSender';
import {
	GetSmtpTemplateOverviewSenderFromJSON,
	GetSmtpTemplateOverviewSenderFromJSONTyped,
	GetSmtpTemplateOverviewSenderToJSON
} from './GetSmtpTemplateOverviewSender';

/**
 *
 * @export
 * @interface GetSmtpTemplateOverview
 */
export interface GetSmtpTemplateOverview {
	/**
	 * ID of the template
	 * @type {number}
	 * @memberof GetSmtpTemplateOverview
	 */
	id: number;
	/**
	 * Name of the template
	 * @type {string}
	 * @memberof GetSmtpTemplateOverview
	 */
	name: string;
	/**
	 * Subject of the template
	 * @type {string}
	 * @memberof GetSmtpTemplateOverview
	 */
	subject: string;
	/**
	 * Status of template (true=active, false=inactive)
	 * @type {boolean}
	 * @memberof GetSmtpTemplateOverview
	 */
	isActive: boolean;
	/**
	 * Status of test sending for the template (true=test email has been sent, false=test email has not been sent)
	 * @type {boolean}
	 * @memberof GetSmtpTemplateOverview
	 */
	testSent: boolean;
	/**
	 *
	 * @type {GetSmtpTemplateOverviewSender}
	 * @memberof GetSmtpTemplateOverview
	 */
	sender: GetSmtpTemplateOverviewSender;
	/**
	 * Email defined as the "Reply to" for the template
	 * @type {string}
	 * @memberof GetSmtpTemplateOverview
	 */
	replyTo: string;
	/**
	 * Customisation of the "to" field for the template
	 * @type {string}
	 * @memberof GetSmtpTemplateOverview
	 */
	toField: string;
	/**
	 * Tag of the template
	 * @type {string}
	 * @memberof GetSmtpTemplateOverview
	 */
	tag: string;
	/**
	 * HTML content of the template
	 * @type {string}
	 * @memberof GetSmtpTemplateOverview
	 */
	htmlContent: string;
	/**
	 * Creation UTC date-time of the template (YYYY-MM-DDTHH:mm:ss.SSSZ)
	 * @type {Date}
	 * @memberof GetSmtpTemplateOverview
	 */
	createdAt: Date;
	/**
	 * Last modification UTC date-time of the template (YYYY-MM-DDTHH:mm:ss.SSSZ)
	 * @type {Date}
	 * @memberof GetSmtpTemplateOverview
	 */
	modifiedAt: Date;
	/**
	 * It is true if template is a valid Double opt-in (DOI) template, otherwise it is false. This field will be available only in case of single template detail call.
	 * @type {boolean}
	 * @memberof GetSmtpTemplateOverview
	 */
	doiTemplate?: boolean;
}

/**
 * Check if a given object implements the GetSmtpTemplateOverview interface.
 */
export function instanceOfGetSmtpTemplateOverview(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && 'id' in value;
	isInstance = isInstance && 'name' in value;
	isInstance = isInstance && 'subject' in value;
	isInstance = isInstance && 'isActive' in value;
	isInstance = isInstance && 'testSent' in value;
	isInstance = isInstance && 'sender' in value;
	isInstance = isInstance && 'replyTo' in value;
	isInstance = isInstance && 'toField' in value;
	isInstance = isInstance && 'tag' in value;
	isInstance = isInstance && 'htmlContent' in value;
	isInstance = isInstance && 'createdAt' in value;
	isInstance = isInstance && 'modifiedAt' in value;

	return isInstance;
}

export function GetSmtpTemplateOverviewFromJSON(json: any): GetSmtpTemplateOverview {
	return GetSmtpTemplateOverviewFromJSONTyped(json, false);
}

export function GetSmtpTemplateOverviewFromJSONTyped(
	json: any,
	ignoreDiscriminator: boolean
): GetSmtpTemplateOverview {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		id: json['id'],
		name: json['name'],
		subject: json['subject'],
		isActive: json['isActive'],
		testSent: json['testSent'],
		sender: GetSmtpTemplateOverviewSenderFromJSON(json['sender']),
		replyTo: json['replyTo'],
		toField: json['toField'],
		tag: json['tag'],
		htmlContent: json['htmlContent'],
		createdAt: new Date(json['createdAt']),
		modifiedAt: new Date(json['modifiedAt']),
		doiTemplate: !exists(json, 'doiTemplate') ? undefined : json['doiTemplate']
	};
}

export function GetSmtpTemplateOverviewToJSON(value?: GetSmtpTemplateOverview | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		id: value.id,
		name: value.name,
		subject: value.subject,
		isActive: value.isActive,
		testSent: value.testSent,
		sender: GetSmtpTemplateOverviewSenderToJSON(value.sender),
		replyTo: value.replyTo,
		toField: value.toField,
		tag: value.tag,
		htmlContent: value.htmlContent,
		createdAt: value.createdAt.toISOString(),
		modifiedAt: value.modifiedAt.toISOString(),
		doiTemplate: value.doiTemplate
	};
}
