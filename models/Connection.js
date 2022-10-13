const mongoose = require('mongoose');

// Pending Connections and Connections
// Connections get contact information and messages

const connectionSchema = new mongoose.Schema({
    user1: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    user2: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    messages: [{
        message: {
            type: String
        },
        time: {
            type: Date,
            default: Date.now
        }
    }]
},
{
    timestamps: true
}
);

// mongoose.model(<mongodb collection name>, our schema)
const Connection = mongoose.model('Connection', connectionSchema);

module.exports = Connection;