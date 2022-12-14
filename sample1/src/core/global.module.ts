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
	LoggerBundleParams,
	LoggerBundleParamsLogggerMode,
} from 'nest-logger-bundle';

import datadog from 'pino-datadog';

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
		LoggerBundleModule.forRoot({}),
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
