import { SchemaTypes } from "mongoose";
import mongoose from "../connection.js";

const Schema = mongoose.Schema;
const pizzaSchema = new Schema(
    {
        'pizzaId':{type:SchemaTypes.Number,required:true,unique:true},
        'pizzaName':{type:SchemaTypes.String,required:true},
        'pizzaDesc':{type:SchemaTypes.String,required:true},
        'pizzaSrc':{type:SchemaTypes.String,required:true},
        'pizzaPrice':{type:SchemaTypes.Number,required:true}
    }
);
export const pizzaModel = mongoose.model('pizza',pizzaSchema);