import { Schema, model, Document } from 'mongoose';

export interface DomainInput {
  name: string;
  domain: string;
}

export interface DomainDocument extends Document, DomainInput {}

const DomainSchema = new Schema(
  {
    name: { type: String, required: true },
    domain: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const DomainModel = model<DomainDocument>('domains', DomainSchema);
