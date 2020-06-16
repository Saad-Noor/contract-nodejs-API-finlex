const contractModel = require('./../models/contract')
const fs = require('fs')
const path = require ('path')

exports.List = async function (req, res) {
    fs.readFile('./public/data/contract.json', 'utf8', (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err)
            return res.status(404).send({ status: false, message: 'Error reading file' })
        }
        jsonString = "[" + jsonString + "]"
        const constracts = JSON.parse(jsonString)
        console.log('File data:', constracts)
        res.status(200).send({ status: true, message: "List found successfully", constracts });
    })
}
exports.Create = async function (req, res) {
    try {
        console.log(req.body)
        const data = req.body
        jsonData = JSON.stringify(data)
        jsonData = " \n ," + jsonData
        console.log('data in data is', jsonData)
        fs.appendFile('./public/data/contract.json', jsonData, 'utf8',
            // callback function
            function (err) {
                if (err) throw err;
                // if no error
                console.log("Data is appended to file successfully.")
                return res.status(201).send({ status: true, message: 'Add to list successfully' })
            });

    } catch (err) {
        res.status(500).send({ status: false, message: err })

    }

}
