import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: 'First Name is required!',
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: 'Email is required!',
        index: true,
        unique: true
    },
    passwordHash: {
        type: String,
        required: 'Password is required!'
    }},
    { timestamps: true }
);

export default mongoose.model('User', UserSchema )