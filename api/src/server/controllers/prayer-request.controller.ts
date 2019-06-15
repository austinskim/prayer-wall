import { Get, Controller, Route } from 'tsoa';

import { PrayerRequestService } from '../services/prayer-request';

interface PrayerRequestResponse {
  title: string;
  content: string;
}

@Route('prayer-request')
export class PrayerRequestController extends Controller {

  private prayerRequestService = new PrayerRequestService();

  @Get()
  public getAll(): PrayerRequestResponse {
    const allPrayerRequests = this.prayerRequestService.getAll();
    console.log(allPrayerRequests);
    return {
      title: 'running',
      content: 'Your API is healthy :)',
    };
  }
}
