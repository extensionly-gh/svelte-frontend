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
import type { CreateAttributeEnumerationInner } from './CreateAttributeEnumerationInner';
import {
	CreateAttributeEnumerationInnerFromJSON,
	CreateAttributeEnumerationInnerFromJSONTyped,
	CreateAttributeEnumerationInnerToJSON
} from './CreateAttributeEnumerationInner';

/**
 *
 * @export
 * @interface CreateAttribute
 */
export interface CreateAttribute {
	/**
	 * Value of the attribute. Use only if the attribute's category is 'calculated' or 'global'
	 * @type {string}
	 * @memberof CreateAttribute
	 */
	value?: string;
	/**
	 * List of values and labels that the attribute can take. Use only if the attribute's category is "category". For example, [{"value":1, "label":"male"}, {"value":2, "label":"female"}]
	 * @type {Array<CreateAttributeEnumerationInner>}
	 * @memberof CreateAttribute
	 */
	enumeration?: Array<CreateAttributeEnumerationInner>;
	/**
	 * Type of the attribute. Use only if the attribute's category is 'normal', 'category' or 'transactional' ( type 'boolean' is only available if the category is 'normal' attribute, type 'id' is only available if the category is 'transactional' attribute & type 'category' is only available if the category is 'category' attribute )
	 * @type {string}
	 * @memberof CreateAttribute
	 */
	type?: CreateAttributeTypeEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum CreateAttributeTypeEnum {
	Text = 'text',
	Date = 'date',
	Float = 'float',
	Boolean = 'boolean',
	Id = 'id',
	Category = 'category'
}

/**
 * Check if a given object implements the CreateAttribute interface.
 */
export function instanceOfCreateAttribute(value: object): boolean {
	let isInstance = true;

	return isInstance;
}

export function CreateAttributeFromJSON(json: any): CreateAttribute {
	return CreateAttributeFromJSONTyped(json, false);
}

export function CreateAttributeFromJSONTyped(
	json: any,
	ignoreDiscriminator: boolean
): CreateAttribute {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		value: !exists(json, 'value') ? undefined : json['value'],
		enumeration: !exists(json, 'enumeration')
			? undefined
			: (json['enumeration'] as Array<any>).map(CreateAttributeEnumerationInnerFromJSON),
		type: !exists(json, 'type') ? undefined : json['type']
	};
}

export function CreateAttributeToJSON(value?: CreateAttribute | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		value: value.value,
		enumeration:
			value.enumeration === undefined
				? undefined
				: (value.enumeration as Array<any>).map(CreateAttributeEnumerationInnerToJSON),
		type: value.type
	};
}
