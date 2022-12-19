import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import environment from '../config/environment.config';
import { GlobalInterceptor } from './global-http-interceptor';
import { GlobalExceptionFilter } from './global-exception.filter';

import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { environmentSchema } from '../config/environment.schema';
import {
	LoggerBundleLevelStrategy,
	LoggerBundleModule,
	LoggerBundleParamsLogggerMode,
} from 'nest-logger-bundle';

//
const { NODE_ENV } = process.env;
const prod = !NODE_ENV || NODE_ENV === 'production';

@Global()
@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: !prod ? `./environment/${process.env.NODE_ENV}.env` : '',
			isGlobal: false,
			load: [environment],
			validationSchema: environmentSchema,
		}),

		//
		LoggerBundleModule.forRoot({
			loggers: {
				type: 'default',
				prettyPrint: {
					mode: LoggerBundleParamsLogggerMode.LOG_BUNDLE,
					disabled: false
				},
				timestamp: {
					format: {
						template: 'DD/MM/YYYY - HH:mm:ss.SSS',
						timezone: 'America/Sao_Paulo',
					},
				},
			},

			contextBundle: {
				strategy: {
					level: LoggerBundleLevelStrategy.MAJOR_LEVEL,
				},
			},
		})
	],

	providers: [
		{
			provide: APP_INTERCEPTOR,
			useClass: GlobalInterceptor,
		},
		{
			provide: APP_FILTER,
			useClass: GlobalExceptionFilter,
		},
	],

	exports: [ConfigModule, LoggerBundleModule],
})
export class GlobalModule {}
