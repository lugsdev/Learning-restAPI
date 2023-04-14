import { DomainModel } from '@models/domain';
import { getAllDomainsSchema } from './validation';

type GetAllDomainsData = {
  userID: string;
};

export const getAllDomainsService = async (data: GetAllDomainsData) => {
  const validationResult = getAllDomainsSchema.validateSync(data);

  return DomainModel.find({ userID: validationResult.userID });
};
