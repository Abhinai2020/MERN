const Contact=require("../models/contact_model");

const contactForm=async(req,res)=>{
    try {
        const response=req.body;
        await Contact.create(response);
        return res.status(200).json({message:"Contact successfully"});
    } catch (error) {
        return res.status(500).json({message:"Contact message not sent"})
    }
}
module.exports=contactForm;