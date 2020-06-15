const contractModel = require('./../models/contract')



const fs = require('fs')



exports.List = async function(req, res) {   
    fs.readFile('./../src/public/data/contract.json', 'utf8', (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err)
            return res.status(404).send({status:false,message:'Error reading file'})
        }
        console.log('File data:',jsonString) 
        res.status(200).send({ status: true, message: "List found successfully",List:jsonString});       

    })
      }
exports.Create = async function(req,res){
    try{
        console.log(req.body)
        const data = req.body        
        jsonData = JSON.stringify(data)
        jsonData += ", \n"
        console.log  ('data in data is' , jsonData)
      fs.appendFile('./../src/public/data/contract.json',jsonData, 'utf8',
      // callback function
      function(err) { 
          if (err) throw err;
          // if no error
          console.log("Data is appended to file successfully.")
          return res.status(201).send({status:true,message:'Add to list successfully'})
  });

    } catch(err){
        res.status(500).send({status:false,message:err})

    }
     
}
