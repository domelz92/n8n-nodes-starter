import {
	IAuthenticateGeneric,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class Bitrix24Api implements ICredentialType {
	name = 'bitrix24Api';
	displayName = 'Bitrix24 API';
	documentationUrl = 'https://training.bitrix24.com/rest_help/';
	properties: INodeProperties[] = [
		{
			displayName: 'Webhook URL',
			name: 'webhookUrl',
			type: 'string',
			default: '',
			placeholder: 'https://your-domain.bitrix24.com/rest/1/your-token/',
			required: true,
		},
	];
	authenticate = {
		type: 'generic',
		properties: {
			baseURL: '={{$credentials.webhookUrl}}',
		},
	} as IAuthenticateGeneric;
}