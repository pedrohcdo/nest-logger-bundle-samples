import { Controller, Get, Param } from '@nestjs/common'
import { ApiParam, ApiTags } from '@nestjs/swagger'
import { SampleService } from '../service/sample.service'

@ApiTags('Sample')
@Controller('sample')
export class SampleController {

	constructor(private readonly sampleService: SampleService) {}

	@Get('log-sample/:valueToLog')
	@ApiParam({ name: 'valueToLog', example: 'Teste 123' })
	logSample(@Param('valueToLog') valueToLog: string) {
		return this.sampleService.logSample(valueToLog);
	}
}
