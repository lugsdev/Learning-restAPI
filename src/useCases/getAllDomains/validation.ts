import * as yup from 'yup';

export const getAllDomainsSchema = yup.object({
  userID: yup.string().required(),
});
