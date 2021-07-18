import { getJokes } from '@utils/databaseQuery/findData'

export default async function handler(req, res) {
    const { id } = req.query
    const sentence = await getJokes(Number(id))
    res.status(200).json({ success: true, data: sentence })
}