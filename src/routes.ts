import { Router } from 'express';
import { createDomainController } from './useCases/createDomain/controller';
import { updateDomainController } from './useCases/updateDomain/controller';
import { getAllDomainsController } from './useCases/getAllDomains/controller';
import { removeDomainController } from './useCases/removeDomain/controller';

const router = Router();

router.post('/domains', createDomainController);
router.patch('/domains/:id', updateDomainController);
router.get('/domains/user/:userID', getAllDomainsController);
router.delete('/domains/:id/user/:userID', removeDomainController);

export { router };
