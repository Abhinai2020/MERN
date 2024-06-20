const Router=require('router');
const router=Router();
const contactForm=require("../controllers/contact_controllers");

router.route("/contact").post(contactForm);

module.exports=router