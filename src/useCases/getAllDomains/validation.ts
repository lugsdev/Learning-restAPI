import * as yup from 'yup';

export const getAllDomainsSchema = yup.object({
  user_id: yup.string().required(),
});
