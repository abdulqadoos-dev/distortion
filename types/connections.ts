export interface Connections {
  mongo: MongoConnection,
  mysql: MysqlConnection
}

export interface MongoConnection {
  address: string
  port: number
  database: string
  user: string
  password: string
}

export interface MysqlConnection {
  address: string
  port: number
  database: string
  user: string
  password: string
}