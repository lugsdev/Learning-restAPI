import { Router } from 'express';
import { createDomainController } from './useCases/createDomain/controller';

const router = Router();

router.post('/domains', createDomainController);

export { router };
