const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    tag: {
        type: String,
        required: true,
        minlength: 5
    },
    title: {
        type: String,
        required: true,
        unique: true,
        minlength: 3
    },
    description: {
        type: String,
        required: true,
    },

},
    { timestamps: true }
);

const tasks = mongoose.model('task', taskSchema);


module.exports = tasks