import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
  fname: {
    type: String,
    required: 'Enter your first name'
  },
  lname: {
    type: String,
    required: 'Enter your last name'
  },
  email: {
    type: String,
    required: 'Enter your email address'
  },
  mobile: {
    type: Number
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  deleted_at: {
    type: Date,
    default: null
  }
});
