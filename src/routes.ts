import { Router } from 'express';
import { createDomainController } from './useCases/createDomain/controller';
import { updateDomainController } from './useCases/updateDomain/controller';
import { getAllDomainsController } from './useCases/getAllDomains/controller';
import { removeDomainController } from './useCases/removeDomain/controller';

const router = Router();

router.post('/domains', createDomainController);
router.patch('/domains/:id', updateDomainController);
router.get('/domains/user/:user_id', getAllDomainsController);
router.delete('/domains/:id/user/:user_id', removeDomainController);

export { router };
