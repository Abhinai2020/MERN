const Router=require('router');
const router=Router();
const services=require("../controllers/service_controllers");

router.route("/service").get(services);

module.exports=router