const HTTP = 'http://';

const REST_API_ENDPOINT = '/purchases';

export const AWS_SERVER_HOST = '@AWS_PATH@';
export const LOCAL_SERVER_HOST = 'localhost';
export const SERVER_PORT = '8888';

export const LOCAL_SERVER_BASE_PATH = `${ HTTP }${ LOCAL_SERVER_HOST }:${ SERVER_PORT }${ REST_API_ENDPOINT }`;
export const AWS_SERVER_BASE_PATH = `${ HTTP }${ AWS_SERVER_HOST }:${ SERVER_PORT }${ REST_API_ENDPOINT }`;
