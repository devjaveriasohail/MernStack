const express = require('express')
const router = express.Router()
const {setGoals,getGoals,putGoals,deleteGoals}=require ('../controlles/goalsControllers')

const {protect}= require ("../middleware/authmiddleware")

// CRUD calling routes
router.route('/').get(protect,getGoals).post(protect,setGoals)
router.route('/:id').delete(protect,deleteGoals).put(protect,putGoals)

module.exports=router

/* Crud operation individully
// (C)creating/setting(post) request
router.post("/",setGoals)
// (R)get request
router.get("/",getGoals)
// (U)put/updating request
router.put("/:id",putGoals)
//(D) deleting request
router.delete("/:id",deleteGoals)
*/