const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please enter your first name"],
        maxLength: 100
    },
    lastName: {
        type: String,
        required: [true, "Please enter your last name"],
        maxLength: 100
    },
    address: {
        type: String,
        required: [true, "Please enter your address"]
    },
    phoneNumber: {
        type: String,
        required: [true, "Please enter your phone number"]
    },
    email: {
        type: String,
        required: [true, 'email cannot be empty'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'password must be between 6 and 50 characters'],
    },
},
{
    timestamps: true
}
);

// mongoose.model(<mongodb collection name>, our schema)
const User = mongoose.model('Account', userSchema);

module.exports = User;