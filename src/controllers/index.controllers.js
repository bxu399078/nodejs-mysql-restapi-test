import {pool} from '../db/db.js'

export const ping = async(req,res) => {
    const result = await pool.query("SELECT 4 * 5 AS RESULT")
    res.json(result)
}