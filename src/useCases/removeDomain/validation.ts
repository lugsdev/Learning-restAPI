import * as yup from 'yup';

export const removeDomainSchema = yup.object({
  id: yup.string().required(),
  userID: yup.string().required(),
});
