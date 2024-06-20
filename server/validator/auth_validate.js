const { z }=require("zod");

// creating a schema

const loginSchema=z.object({
    email:z
    .string({reqd_err:"Email is required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(6,{message:"Email must be atleast 6 characters"})
    .max(255,{message:"Email must not be more than 255 characters"}),
    password:z
    .string({reqd_err:"Password is required"})
    .trim()
    .min(3,{message:"Password must be atleast 3 characters"})
    .max(255,{message:"Password must not be more than 255 characters"}),
})
const signUpSchema = z.object({
    username:z
    .string({reqd_err:"Name is required"})
    .trim()
    .min(3,{message:"Name must be atleast 3 characters"})
    .max(255,{message:"Name must not be more than 255 characters"}),
    email:z
    .string({reqd_err:"Email is required"})
    .trim()
    // .email({message:"Invalid email address"})
    .min(6,{message:"Email must be atleast 6 characters"})
    .max(255,{message:"Email must not be more than 255 characters"}),
    phone:z
    .string({reqd_err:"Phone number is required"})
    .min(6,{message:"Phone number must be atleast 6 characters"})
    .max(25,{message:"Phone number must not be more than 25 characters"}),
    password:z
    .string({reqd_err:"Password is required"})
    .trim()
    .min(3,{message:"Password must be atleast 3 characters"})
    .max(255,{message:"Password must not be more than 255 characters"}),
  
});

module.exports={signUpSchema,loginSchema};