
const express= require("express");
const router= express.Router();
const bookController= require("../controllers/bookController")
router.route("/").get(bookController.homePage)




router.route("/contact").get(bookController.contactUs)





module.exports=router

