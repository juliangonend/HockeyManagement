var pool = require('./bd');


async function insertarContacto(obj){
        try{
            var query= "insert into contactos  set ?";
            var rows = await pool.query(query,[obj]);
            return rows;
        } catch (error){
            console.log(error)
            throw error;
        }

    
    }
 async function getContactos(){
        var query= "select * from contactos order by id desc ";
        var rows = await pool.query(query);
        return rows;
     }

    module.exports={insertarContacto,getContactos}
    