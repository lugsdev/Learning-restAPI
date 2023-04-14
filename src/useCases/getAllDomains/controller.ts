import { HTTPError } from '@errors/httpError';
import { RequestHandler } from 'express';
import { getAllDomainsService } from './service';

export const getAllDomainsController: RequestHandler = async (req, res) => {
  try {
    const domains = await getAllDomainsService(req.params as { userID: string });

    return res.json({ domains });
  } catch (error) {
    if (error instanceof HTTPError)
      return res.status(error.statusCode).json({
        errors: [error.message],
      });

    if (error instanceof Error) res.status(500).json({ errors: [error.message] });
  }
};
