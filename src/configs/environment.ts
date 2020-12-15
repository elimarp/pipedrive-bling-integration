import 'dotenv/config'

const PIPEDRIVE_API_TOKEN = process.env.PIPEDRIVE_API_TOKEN
const BLING_API_KEY = process.env.BLING_API_KEY
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_NAME = process.env.DB_NAME

if (!PIPEDRIVE_API_TOKEN) throw new Error('Please, provide your Pipedrive API_TOKEN')
if (!BLING_API_KEY) throw new Error('Please, provide your Bling API_KEY')
if (!DB_USER) throw new Error('Missing DB_USER ')
if (!DB_PASS) throw new Error('Missing DB_PASS')
if (!DB_NAME) throw new Error('Missing DB_NAME')

const env = {
  locals: {
    PORT: process.env.PORT
  },
  externals: {
    PIPEDRIVE_API_TOKEN,
    BLING_API_KEY
  },
  database: {
    USERNAME: DB_USER,
    PASSWORD: DB_PASS,
    NAME: DB_NAME
  }
}

export default env
