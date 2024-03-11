const express = require("express")
const app = express()
const zod = require("zod")
const jwt = require("jsonwebtoken")
const myValidPassword = "mack"

// so first we are going to create the zod schema and then if the usrname requirement mathches with the schema t
// then we are going to print the jwt tokem

// so schema will be

const emailscnema = zod.string().email()
const passwordSchema = zod.string().min(6)

// now we are going to make a function which will contain the username and passwoord and we are going to make the schema of thet

const creater = (email , passwoord)=>{

    const usernameResponse  = emailscnema.safeParse(email)
    const passwordResponse = passwordSchema.safeParse(passwoord)
    
    if(!(usernameResponse.success && passwordResponse.success)){
        return null;
    }
    
    else{
        const token = jwt.sign({email} , myValidPassword)
        return token
    }

}

const ans = creater("rahul@gmail.com" , "jfkidsj")
console.log(ans) 

