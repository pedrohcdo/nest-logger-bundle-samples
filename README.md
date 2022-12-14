
## Description

This repository is used to get examples of using the library <a href="https://github.com/pedrohcdo/nest-logger-bundle" target="blank">NestLoggerBundle</a>, just choose some sample according to the tutorial below and run it, for better understanding feel free to see the source code, it is commented for a better understanding.

________________

## Setup

- Clone this repo

  ```bash
  git clone git@github.com:pedrohcdo/nest-logger-bundle-samples.git
  ```

- Install all dependencies

  ```bash
  $ npm i
  ```
> For x examples you will need to configure the environment but if you want to test the examples you can skip this step
- Create a file called `development.env` in the `./environment` folder with the following scheme
  ```
  PORT=3002

  #LOG
  DATADOG_API_KEY=[YOUR_DATADOG_KEY]
  DATADOG_SERVICE_NAME=[YOUR_SERVICE_NAME]
  ```
  Where `[YOUR_DATADOG_KEY]` is the Datadog key and `[YOUR_SERVICE_NAME]` is the service name

________________

## Running

To run the desired project just follow the instructions below.

| Sample | Description | Command |
| :--- | :----: | :--- |
| Sample1 | Minimum configuration example  | ```npm run start:sample1``` |
| Sample2 | Project demonstrating how to configure a transporter, using the datadog as a base  | ```npm run start:sample2``` |
| Sample2 | Project demonstrating how to use the `AsyncLoggerService`  | ```npm run start:sample3``` |

________________

## Stay in touch

- Author - [Pedro Henrique C.](https://twitter.com/pedrohcdo)

## License

NestLoggerBundle is [Apache License 2.0](LICENSE).
