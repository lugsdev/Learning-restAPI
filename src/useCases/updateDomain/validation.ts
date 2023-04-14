import * as yup from 'yup';

export const updateDomainSchema = yup.object({
  id: yup.string().required(),
  hidden: yup.boolean().required(),
  isValidated: yup.boolean().required(),
});
