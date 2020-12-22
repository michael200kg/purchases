
import { AWS_SERVER_BASE_PATH, LOCAL_SERVER_BASE_PATH } from './environment-constants';
import { NgxLoggerLevel } from 'ngx-logger';

export const environment = {
  production: false,
  basePath: AWS_SERVER_BASE_PATH,
  loggerConfig: {
    level: NgxLoggerLevel.TRACE,
    serverLogLevel: NgxLoggerLevel.TRACE,
    serverLoggingUrl: `${ LOCAL_SERVER_BASE_PATH }/ui_logger`,
    disableConsoleLogging: false,
    enableSourceMaps: true
  }
};
