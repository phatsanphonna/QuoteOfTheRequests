import dbConnect from "../../../utils/dbConnect"
import Sentence from '../../../models/Sentence'
import { stringToEnumCategory, enumToStringCategory } from '../../../utils/convertCategory'
dbConnect()

export async function getJokes(quoteId) {
    try {
        const sentence = await Sentence.findOne({ sentenceId: Number(quoteId) })
        const sentenceCategory = enumToStringCategory(sentence.category)

        // console.log('Sentence : ' + sentence)
        // console.log('Sentence Category : ' + sentence.category);

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

export async function postJokes(body) {
    try {
        body.category = stringToEnumCategory(body.category)
        // console.log('Post Jokes: ' + body);

        const sentence = await Sentence.create(body)
    } catch (err) {
        console.log(err)
    }
}


export default async (req, res) => {
    const { method } = req

    switch (method) {
        case 'GET':
            try {
                const sentences = await getJokes()
                res.status(200).json({ success: true, data: sentences })
            } catch (err) {
                console.log(err)
            }
            break;

        case 'POST':
            try {
                const sentence = await postJokes(req.body)
                res.status(201).json({ success: true, data: sentence })
            } catch (err) {
                console.log(err)
            }
            break;

        default:
            res.status(400).json({ success: false })
            break;
    }
}