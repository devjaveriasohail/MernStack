const express = require('express')
const router = express.Router()
const {setGoals,getGoals,putGoals,deleteGoals}=require ('../controlles/goalsControllers')

// CRUD calling routes
router.route('/').get(getGoals).post(setGoals)
router.route('/:id').delete(deleteGoals).put(putGoals)

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