const Router=require('router');
const router=Router();
const controllers=require('../controllers/auth-controllers');
const {loginSchema,signUpSchema}=require("../validator/auth_validate");
const validate=require("../middleware/validate_middleware");
const authMiddleware=require("../middleware/authMiddleware");

router.route('/login').post(validate(loginSchema),controllers.login);
router.route('/register').post(validate(signUpSchema),controllers.register);
router.route('/user').get(authMiddleware,controllers.user)

module.exports=router;