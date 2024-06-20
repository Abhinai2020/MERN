const Router=require('router');
const router=Router();
const adminControllers=require("../controllers/admin_controllers");
const authMiddleware=require("../middleware/authMiddleware");
const adminMiddleware = require('../middleware/adminMiddleware');

router.route("/users").get(authMiddleware,adminMiddleware,adminControllers.getAllUsers);
router.route("/contacts").get(authMiddleware,adminMiddleware,adminControllers.getAllContacts);
router.route("/users/delete/:id").delete(authMiddleware,adminMiddleware,adminControllers.deleteUserById);
router.route("/contacts/delete/:id").delete(authMiddleware,adminMiddleware,adminControllers.deleteContactById);
router.route("/users/:id").get(authMiddleware,adminMiddleware,adminControllers.getUserById)
router.route("/users/update/:id").patch(authMiddleware,adminMiddleware,adminControllers.updateUserById)

module.exports=router;