import { getRandomJokes } from '@utils/databaseQuery/findData'
import { postJokes } from '@utils/databaseQuery/addData'

export default async function handler(req, res) {
  const { method } = req

  switch (method) {
    case 'GET':
      try {
        const sentences = await getRandomJokes()
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