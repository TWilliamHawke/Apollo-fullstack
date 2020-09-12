import { Schema, model } from 'mongoose';

const postSchema = new Schema({
  title: {type: String, required: true},
  content: {type: String, required: true},
  author: {type: String, required: true},
  createdAt: {type: Date, default: Date.now()}
})

export const Post = model('Post', postSchema)