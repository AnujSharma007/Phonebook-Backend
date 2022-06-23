var phonebookModel = require("../model/Phonebook");

function readData(req,res){
    phonebookModel.find()
    .then(data=>{
        res.json({result:data});
    })
    .catch(err=>{
        res.status(500)
        res.json({error:err});
    })
}


function addData(req,res){
    phonebookModel.create(req.body)
    .then(data=>{
        res.json({result:data});
    })
    .catch(err=>{
        res.status(500)
        res.json({error:err})
    })
}


function updateData(req,res){
    phonebookModel.findByIdAndUpdate({_id: req.params.id},req.body)
    .then(data=>{
        res.json({result:data});
    })
    .catch(err=>{
        res.status(500)
        res.json({error:err})
    })
}


function deleteData(req,res){
    phonebookModel.findByIdAndDelete({_id:req.params.id})
    .then(data=>{
        res.json({result:data});
    })
    .catch(err=>{
        res.status(500)
        res.json({error:err})
    })
}


module.exports = {readData,addData,updateData,deleteData};