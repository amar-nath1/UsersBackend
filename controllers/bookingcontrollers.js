const User=require('../model/appointmentmodel')

exports.getAll=(req,res,next)=>{
User.fetchAll().then(([rows,field])=>{
    res.status(200).json({list:rows})
})
        
}

exports.addNew=(req,res,next)=>{
    console.log(req.body,'req')
const user=new User(req.body)
user.save().then(()=>{
    
    res.status(200).json({message:`${req.body.username} user added`})
})
}

exports.delete=(req,res,next)=>{
User.deleteItem(req.params.id).then(()=>{
    res.status(200).json({message:'deleted'})
})
}

exports.edit=(req,res,next)=>{
let edUser=new User(req.body)
const id=req.params.id
edUser.editUser(id).then(()=>{
    res.status(200).json({message:'edited succ'})
})
}