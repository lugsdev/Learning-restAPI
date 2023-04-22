import * as yup from 'yup';

export const createDomainSchema = yup.object({
  user_id: yup.string().required(),
  domainTittle: yup.string().required(),
  domainName: yup.string().required(),
  validationKey: yup.string().required(),
});
