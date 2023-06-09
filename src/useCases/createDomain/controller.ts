import { RequestHandler } from 'express';
import { createDomainService } from './service';
import { HTTPError } from '@errors/httpError';
import { ValidationError } from 'yup';

export const createDomainController: RequestHandler = async (req, res) => {
  try {
    const createdDomain = await createDomainService(req.body);

    res.status(201).json({
      domain: createdDomain,
    });
  } catch (error) {
    if (error instanceof HTTPError)
      return res.status(error.statusCode).json({
        errors: [error.message],
      });

    if (error instanceof ValidationError)
      return res.status(400).json({
        errors: error.errors,
      });

    if (error instanceof Error) res.status(500).json({ errors: [error.message] });
  }
};
