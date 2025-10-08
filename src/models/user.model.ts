import { model, Schema, SchemaTypes} from "mongoose";

const userSchema = new Schema({
    name :{type: SchemaTypes.String, required: true},
    email: {type: SchemaTypes.String, required: true, unique:true},
    password: { type: SchemaTypes.String, required: true },
});

const user = model('user', userSchema)