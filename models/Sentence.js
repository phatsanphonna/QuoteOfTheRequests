const mongoose = require('mongoose')

const SentenceSchema = mongoose.Schema({
    sentenceId: {
        type: Number,
        require: true,
    },
    sentence: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    name: {
        'type': String,
        require: false,
        default: 'ใครสักคนบนโลก'
    }
})

module.exports = mongoose.models.Sentence || mongoose.model('Sentence', SentenceSchema)