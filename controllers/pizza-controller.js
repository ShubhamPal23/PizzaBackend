import { pizzaModel } from "../db/models/pizza-schema.js";

//import { hashing } from "../utils/encrypt.js";

export const controller={

    async register(request,response){
        const pizzaInfo = request.body;
        try{
        const doc = await pizzaModel.create(pizzaInfo);
        if(doc && doc._id){
            response.json({message:'Pizza Added Successfully'});}
        else{
            response.json({message:'Not able to add Pizza'});
        }}
        catch(err){console.log(err);}
        },
    async show(request,response){
       // const pizzaInfo = request.body;
        try{
            const doc = await pizzaModel.find({}).exec();
            console.log(doc);
            if(doc){
            response.json(doc)//id:pizzaInfo.pizzaId,name:pizzaInfo.pizzaName,desc:pizzaInfo.pizzaDesc,price:pizzaInfo.pizzaPrice,url:pizzaInfo.pizzaSrc})
            }

        }
        catch(err){
            console.log("Error is in show pizza",err);
        }

    }

}