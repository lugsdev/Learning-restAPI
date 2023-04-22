import { DomainModel } from '@models/domain';
import { getAllDomainsSchema } from './validation';

type GetAllDomainsData = {
  user_id: string;
};

export const getAllDomainsService = async (data: GetAllDomainsData) => {
  const validationResult = getAllDomainsSchema.validateSync(data);
  console.log(validationResult);
  return DomainModel.find({});
};
