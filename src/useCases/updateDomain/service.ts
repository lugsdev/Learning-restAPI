import { DomainModel } from '@models/domain';
import { updateDomainSchema } from './validation';
import { HTTPError } from '@errors/httpError';

type UpdateData = {
  id: string;
  validationKey?: string;
  isValidated: boolean;
  hidden: boolean;
};

export const updateDomainService = async (data: UpdateData) => {
  const validationResult = updateDomainSchema.validateSync(data, {
    abortEarly: false,
    stripUnknown: true,
  });

  const domainExists = await DomainModel.findOne({
    _id: validationResult.id,
  });

  if (!domainExists) throw new HTTPError('Domain does not exist');

  return domainExists.updateOne(validationResult);
};
