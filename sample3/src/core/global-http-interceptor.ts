import { CallHandler, Catch, ExecutionContext } from '@nestjs/common';
import { LoggerHttpInterceptor } from 'nest-logger-bundle';

@Catch()
export class GlobalInterceptor extends LoggerHttpInterceptor {
	intercept(context: ExecutionContext, next: CallHandler<any>) {
		return super.intercept(context, next);
	}
}
