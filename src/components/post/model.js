import { Schema, model } from 'mongoose';

const postSchema = new Schema({
  title: String,
  context: String,
  author: String,
  createdAt: Date
})

export const Post = model('Post', postSchema)