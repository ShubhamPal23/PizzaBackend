const URL = "mongodb+srv://hero:abcd1234@cluster-1.yzouvb7.mongodb.net/userdb1?retryWrites=true&w=majority";
import mongoose from "mongoose";
const promise = mongoose.connect(URL);
promise.then(data=>{console.log("DB CONNECTED But 1");
}).catch(err=>console.log("Error Building db connection",err))

export default mongoose;