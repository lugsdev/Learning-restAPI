import { HTTPError } from '@errors/httpError';
import { DomainInput, DomainModel } from '../../models/domain';
import { createDomainSchema } from './validation';

export const createDomainService = async (data: DomainInput) => {
  const validationResult = createDomainSchema.validateSync(data, {
    abortEarly: false,
    stripUnknown: true,
  });

  const domainAlreadyExists = await DomainModel.findOne({
    domainName: validationResult.domainName,
  });

  if (domainAlreadyExists) throw new HTTPError('domain name already exists', 400);

  const createdDomain = await DomainModel.create(validationResult);

  return createdDomain;
};
