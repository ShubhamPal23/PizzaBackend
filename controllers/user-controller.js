import { userModel } from "../db/models/user-schema.js";
import { hashing } from "../utils/encrypt.js";

export const controller={
    
    async login(request,response){
        const userInfo = request.body;
        //console.log(body);
        try{
        const doc = await userModel.findOne({'email':userInfo.email}).exec();
        if(doc && doc._id){
            const plainPassword = userInfo.password;
            const dbPassword = doc.password;
            if(hashing.matchPassword(plainPassword,dbPassword)){
                response.json({message:"Welcome "+doc.name,name:doc.name});
            }
            else{
                response.json({message:'Invalid user id or password'});
            }
        }
        else{
            response.json({message:'Invalid user id or password'});
        }}
        catch(err){console.log(err);}
},
    async register(request,response){
        const userInfo = request.body;
        userInfo.password = hashing.passwordHash(userInfo.password);
        try{
        const doc = await userModel.create(userInfo);
        if(doc && doc._id){
            response.json({message:'Registered Successfully'});}
        else{
            response.json({message:'Problem'});
        }}
        catch(err){console.log(err);}
        },
    profile(request,response){
        const userName = request.params.username;
        response.json({message:userName+' Hellow '})},
    changePassword(request,response){response.json({message:'Hellow '})}
}