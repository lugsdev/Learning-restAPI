import * as yup from 'yup';

export const removeDomainSchema = yup.object({
  id: yup.string().required(),
  user_id: yup.string().required(),
});
