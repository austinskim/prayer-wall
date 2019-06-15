import { getRepository } from 'typeorm';

import { PrayerRequest } from '../entity';

export class PrayerRequestService {

  private prayerRequestRepository = getRepository(PrayerRequest);

  getAll() {
    return this.prayerRequestRepository.find();
  }
}
