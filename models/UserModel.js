import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    lastName: {
        type: String,
        default: 'lastName',
    },
    location: {
        type: String,
        default: 'my city',
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
    avatar: String,
    avatarPublicId: String,
});

UserSchema.methods.toJSON = function () { //functionality wont work without "function()" syntax, dont use arrow function or anything else
    var obj = this.toObject();
    delete obj.password;
    return obj;
};

export default mongoose.model('User', UserSchema);