import mongoose from 'mongoose';
var Schema = mongoose.Schema({
  createdAt:{
    type: Date,
    default: Date.now
  },
  todoDesc: {
    type: String, require: true},
  todoDate: Date
}
);
console.log(Schema);

export default mongoose.model('Todo', Schema);
