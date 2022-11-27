import { NestLoggerLevelStrategy } from "@pedrohcd/nest-logger/nest-logger.params";
import { PinoLevels } from "../logger.definitions";

export interface LoggerNode {

	toObject(): any;
	introspectLevel(_: NestLoggerLevelStrategy, defaultLevel: string): PinoLevels;
	clone(parent?: LoggerNode): LoggerNode;
}
