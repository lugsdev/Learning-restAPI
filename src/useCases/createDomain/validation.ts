import * as yup from 'yup';

export const createDomainSchema = yup.object({
  userID: yup.string().required(),
  domainTittle: yup.string().required(),
  domainName: yup.string().required(),
  validationKey: yup.string().required(),
});
