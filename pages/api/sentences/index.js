import dbConnect from "../../../utils/dbConnect"
import Sentence from '../../../models/Sentence'

dbConnect()

export async function getJokes() {
    try {
        const sentences = await Sentence.find({})
        return sentences
    } catch (err) {
        console.log(err)
    }
}

export async function postJokes(body) {
    try {
        const sentence = await Sentence.create(body)
        return { sentenceId: sentence.sentenceId, sentence: sentence.sentence }
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