import {pool} from '../db/db.js'

export const getEmployees = async(req,res)=> {
    try{
       // throw new error('')
        const [rows] = await pool.query('SELECT * FROM employe')
        res.json(rows)
    }
    catch(error){
        return res.status(500).json({
            message:"errose"
        })
    }
    
    
    
}

export const getEmployee = async(req,res)=> {
    try{
        const [rows] = await pool.query('SELECT * FROM employe WHERE id = ?',[req.params.id])
        //console.log(rows.id)
        if (rows.length <= 0){
            return res.status(404).json({
                message:'noooo'
            })
        }

        res.json(rows[0])
    }
    catch(error){
        return res.status(500).json({
            message:"errose get"
        })
    }
}

//export const createEmployees = (req,res)=> res.send('creando esclavosss')
export const createEmployees = async(req,res)=> {
    try{

        const {name,salary}= req.body
        const [rows]= await pool.query('INSERT INTO employe (name,salary) values(?,?)',[name,salary])
        res.send({
            id: rows.insertId,
            name,
            salary,
        })
    }catch(error){
        return res.status(500).json({
            message:"errose create"
        })
    }
}
export const updateEmployees = async(req,res)=> {
    try{
        const {id} = req.params
        const {name,salary} = req.body
    
        const [result] = await pool.query('UPDATE employe SET name = IFNULL(?, name) ,salary = IFNULL(?,salary) WHERE id =?',[name,salary,id])

        if (result.affectedRows === 0){
            return res.status(404).json({
                message:'no update'
            })
        }


        const [rows] = await pool.query('SELECT * FROM employe WHERE id = ?',[id])

        res.json(rows[0])
    }
    catch(error){
        return res.status(500).json({
            message:"errose update"
        })
    }
}

export const deleteEmployees = async(req,res)=> {
    try{
    
        const [result] = await pool.query('DELETE FROM employe WHERE id = ?',[req.params.id])
        if (result.affectedRows <= 0){
            return res.status(404).json({
                message:'no employe'
            })
        }  
        res.sendStatus(204)
    }
    catch(error){
        return res.status(500).json({
            message:"errose delete"
        })
    }
}

