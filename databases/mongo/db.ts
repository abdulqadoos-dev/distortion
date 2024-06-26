import fs from 'fs'
import path from 'path'
import mongoose, { mongo, Schema } from 'mongoose'
import { Connections } from '../../types/connections'

const connect = async () => {
  const content = fs.readFileSync(path.resolve(process.cwd(), '../connections.json'), 'utf-8')
  const connections: Connections = JSON.parse(content)
  const mongoConnection = connections.mongo

  try {
    await mongoose.connect(`mongodb://${mongoConnection.user}:${mongoConnection.password}@${mongoConnection.address}:${mongoConnection.port}`)
  } catch (err) {
    console.error('Mongo connection failed')
  }
}

const isConnected = (): boolean => {
  return mongoose.connection.readyState === 1
}

connect()

export const findUser = (id: number) => {
  if (isConnected()) {
    // Look for user
  }
}