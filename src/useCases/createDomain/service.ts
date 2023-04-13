import { HTTPError } from '@errors/httpError';
import { DomainInput, DomainModel } from '../../models/domain';

export const createDomainService = async (data: DomainInput) => {
  if (!data.domain) throw new HTTPError('domain is required');
  if (!data.name) throw new HTTPError('domain name is required');

  const createdDomain = await DomainModel.create(data);

  return createdDomain;
};
