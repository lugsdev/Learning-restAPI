import { Schema, model, Document } from 'mongoose';

export interface DomainInput {
  user_id: number;
  domainTittle: string;
  domainName: string;
  validationKey: string;
  isValidated: boolean;
  hidden: boolean;
}

export interface DomainDocument extends Document, DomainInput {}

const DomainSchema = new Schema(
  {
    user_id: { type: String, required: true },
    domainTittle: { type: String, required: true },
    domainName: { type: String, required: true },
    validationKey: { type: String, required: false, default: '' },
    isValidated: { type: Boolean, required: false, default: false },
    hidden: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  },
);

export const DomainModel = model<DomainDocument>('domains', DomainSchema);
