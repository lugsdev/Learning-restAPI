import { RequestHandler } from 'express';
import { updateDomainService } from './service';
import { HTTPError } from '@errors/httpError';
import { ValidationError } from 'yup';

export const updateDomainController: RequestHandler = async (req, res) => {
  try {
    await updateDomainService({
      id: req.params.id,
      ...req.body,
    });

    res.status(204).send();
  } catch (error) {
    if (error instanceof HTTPError)
      return res.status(error.statusCode).json({
        errors: [error.message],
      });

    if (error instanceof ValidationError)
      return res.status(400).json({
        errors: error.errors,
      });

    if (error instanceof Error)
      res.status(500).json({
        errors: [error.message],
      });
  }
};
