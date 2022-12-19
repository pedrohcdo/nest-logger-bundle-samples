import { Injectable } from '@nestjs/common'
import { LoggerBundleService } from 'nest-logger-bundle';

@Injectable()
export class SampleService {

	constructor(
	  private logService: LoggerBundleService
	) {
	  this.logService.setContextToken(SampleService.name)
	}
  
	private async slowFunction(){
		const asyncLogger = await this.logService.createAsyncLogger();
		await new Promise(resolve => setTimeout(resolve, 5000));
		asyncLogger.log('inside slow function 1')
		await new Promise(resolve => setTimeout(resolve, 5000));
		asyncLogger.log('inside slow function 2')
		asyncLogger.dispatch('end slow function')
	}

  
	async logSample(valueToLog: string){
	  	this.logService.log('before slow function %s', valueToLog)
		this.slowFunction();
		this.logService.log('after slow function without await')
	}
  }
  