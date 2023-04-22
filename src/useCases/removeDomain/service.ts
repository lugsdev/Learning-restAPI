import { DomainModel } from '@models/domain';
import { removeDomainSchema } from './validation';
import { HTTPError } from '@errors/httpError';

type RemoveDomainService = {
  id: string;
  user_id: string;
};

export const removeDomainService = async (data: RemoveDomainService) => {
  const validationResult = removeDomainSchema.validateSync(data);

  const domainExists = await DomainModel.findOne({
    _id: validationResult.id,
  });

  if (!domainExists) throw new HTTPError('Domain not exists');

  return DomainModel.findOneAndDelete({
    _id: validationResult.id,
    user_id: validationResult.user_id,
  });
};
