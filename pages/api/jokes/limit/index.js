import { getLowerThanLimitJokes } from '@utils/databaseQuery/findData'

export default async function handler(req, res) {
    try {
        const { start, limit } = req.query

        const sentences = await getLowerThanLimitJokes(Number(start), Number(limit))

        res.status(200).json({ success: true, data: sentences })
    } catch (err) {
        // res.status(500).json({ success: false, error: err })
        console.log(err)
    }
}