import { RequestHandler } from 'express';
import { createDomainService } from './service';
import { HTTPError } from '@errors/httpError';

export const createDomainController: RequestHandler = async (req, res) => {
  try {
    const { name, domain } = req.body;

    const createdDomain = await createDomainService({
      domain,
      name,
    });

    res.status(201).json({
      domain: createdDomain,
    });
  } catch (error) {
    if (error instanceof HTTPError)
      res.status(error.statusCode).json({
        message: error.message,
      });
  }
};
