import { ValidationError } from 'yup';
import { RequestHandler } from 'express';
import { removeDomainService } from './service';

export const removeDomainController: RequestHandler = async (req, res) => {
  try {
    await removeDomainService(req.params as { id: string; user_id: string });

    res.status(204).send();
  } catch (error) {
    if (error instanceof ValidationError)
      return res.status(400).json({
        errors: error.errors,
      });

    if (error instanceof Error) res.status(500).json({ errors: [error.message] });
  }
};
