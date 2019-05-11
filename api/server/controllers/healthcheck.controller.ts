import { Request, Response } from 'express';

const HealthCheckController = (req: Request, res: Response) => {
  res.json({
    message: 'Running',
  });
}

export default HealthCheckController;
