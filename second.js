const express= require("express")
const jwt = require("jsonwebtoken")
const port = 9000

const value = {
    name : "Mack Walker", 
    email :"mohitsati@gmil.com"
}


let token = jwt.sign(value , "secret")//so now using this we will get a jwt token 
console.log(token)