import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class Bitrix24 implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Bitrix24',
    name: 'Bitrix24',
    icon: 'file:bitrix24.svg',
    group: ['transform'],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: 'Work with bitrix24 api',
    defaults: {
      name: 'Bitrix24',
    },
    inputs: ['main'],
    outputs: ['main'],
    credentials: [
      {
        name: 'bitrix24Api',
        required: true,
      }
    ],
    requestDefaults: {
      baseURL: '',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
    properties: [
      {
        displayName: 'Resource',
        name: 'resource',
        type: 'options',
        noDataExpression: true,
        options: [
          {
            name: 'Contact',
            value: 'contact',
          },
          {
            name: 'Deal',
            value: 'deal',
          },
          // Add other Bitrix24 resources as needed
        ],
        default: 'contact',
      },
      // Operations will go here
    ]
  };
}