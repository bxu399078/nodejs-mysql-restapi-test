import {config} from 'dotenv'

config()

export const PORT = process.env.PORT || 3000

export const DB_HOST = process.env.DB_HOST || 'localhost'

export const DB_PORT = process.env.DB_PORT || '3306'

export const DB_USER = process.env.DB_USER || 'guli'

export const DB_PASSWORD = process.env.DB_PASSWORD || 'a'

export const DB_DATABASE = process.env.DB_DATABASE || 'companydb'



//console.log(process.env.PORT)
