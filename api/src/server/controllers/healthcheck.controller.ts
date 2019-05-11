import { Get, Controller, Route } from 'tsoa';

interface HealthCheckResponse {
  data: string;
  message: string;
}

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
