import type { NextApiRequest, NextApiResponse } from 'next'
import { Result, success, failure } from '../../../../types/result'
import { findUser } from '../../../../databases/mongo/db'
import { UserData } from '../../../../types/user'

export default async function handler(req: NextApiRequest, res: NextApiResponse<Result<UserData | Error>>) {
  const uid = req.query.uid as string
  await findUser(parseInt(uid))

  res.status(200).json(success({
    id: 1,
    points: 0,
    experience: 0
  }))
}
