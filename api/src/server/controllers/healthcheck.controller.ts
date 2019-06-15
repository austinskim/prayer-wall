import { Get, Controller, Route } from 'tsoa';

import HealthCheckResponse from '../models/response/healthcheck';

@Route('healthcheck')
export class HealthCheckController extends Controller {
  @Get()
  public getHealthStatus(): HealthCheckResponse {
    return {
      data: 'running',
      message: 'Your API is healthy :)',
    };
  }
}
