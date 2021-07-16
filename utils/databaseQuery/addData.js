import Sentence from '../../models/Sentence'
import dbConnect from '../dbConnect'

import { stringToEnumCategory } from '../convertCategory'

dbConnect()

export async function postJokes(body) {
    try {
        body.category = stringToEnumCategory(body.category)
        // console.log('Post Jokes: ' + body);

        const sentence = await Sentence.create(body)
    } catch (err) {
        console.log(err)
    }
}