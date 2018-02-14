import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import uniqueValidator from 'mongoose-unique-validator';

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

UserSchema.methods.isValidPassword = function isValidPassword(password) {
    return bcrypt.compareSync(password, this.passwordHash);
};

UserSchema.methods.setPassword = function setPassword(password) {
    this.passwordHash = bcrypt.hashSync(password, 10);
};

UserSchema.methods.generateJWT = function generateJWT() {
    return jwt.sign({
        email: this.email,
        firstName: this.firstName
    });
};

UserSchema.methods.toAuthJSON = function toAuthJSON() {
    return {
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName,
        token: this.generateJWT()
    }
};

UserSchema.plugin(uniqueValidator, {
    message: 'Already taken. Please try another!'
});

export default mongoose.model('User', UserSchema )