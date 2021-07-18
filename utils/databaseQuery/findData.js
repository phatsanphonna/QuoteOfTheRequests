import Sentence from '../../models/Sentence'
import dbConnect from '@utils/dbConnect'

import { enumToStringCategory } from '@utils/convertCategory'

dbConnect()

export async function getJokes(quoteId) {
    try {
        const sentence = await Sentence.findOne({ sentenceId: Number(quoteId) })
        const sentenceCategory = enumToStringCategory(sentence.category)

        return {
            sentenceId: sentence.sentenceId,
            sentence: sentence.sentence,
            name: sentence.name,
            date: sentence.date,
            category: sentenceCategory
        }

    } catch (err) {
        console.log(err)
    }
}

export async function getAllJokes() {
    try {
        const rawSentences = await Sentence.find({})
        const sentences = rawSentences.map(sentence => {
            return { sentenceId: sentence.sentenceId, sentence: sentence.sentence, name: sentence.name }
        })

        return sentences
    } catch (err) {
        console.log(err)
    }
}

export async function getRandomJokes() {
    try {
        const rawSentences = await Sentence.find({})
        // console.log(rawSentences)
        const sentence = rawSentences[Math.floor(Math.random() * rawSentences.length)]

        return { sentenceId: sentence.sentenceId, sentence: sentence.sentence, name: sentence.name }
    } catch (err) {
        console.log(err)
    }
}

export async function getGreaterThanLimitJokes(start, limit = 10) {
    try {
        const rawSentences = await Sentence.find({ sentenceId: { $gt: start } }).sort({ sentenceId: -1 }).limit(limit)

        const sentences = rawSentences.map(sentence => {
            return { sentenceId: sentence.sentenceId, sentence: sentence.sentence, name: sentence.name }
        })
        // console.log(sentences)

        return sentences
    } catch (err) {
        console.log(err)
    }
}

export async function getLowerThanLimitJokes(start, limit = 10) {
    try {
        const rawSentences = await Sentence.find({ sentenceId: { $lte: start } }).sort({ sentenceId: -1 }).limit(limit)

        const sentences = rawSentences.map(sentence => {
            return { sentenceId: sentence.sentenceId, sentence: sentence.sentence, name: sentence.name }
        })
        // console.log(sentences)
        
        return sentences
    } catch (err) {
        console.log(err)
    }
}

export async function getLimitJokes(limit = 10) {
    try {
        const rawSentences = await Sentence.find().sort({ sentenceId: -1 }).limit(limit)

        const sentences = rawSentences.map(sentence => {
            return { sentenceId: sentence.sentenceId, sentence: sentence.sentence, name: sentence.name }
        })

        return sentences
    } catch (err) {
        console.log(err)
    }
}