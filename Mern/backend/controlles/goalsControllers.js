const  asyncHandler = require('express-async-handler')
const Goal = require ("../model/goalModel")
const User = require ("../model/userModel")

// @desc create goals @route POST /api/goals
const setGoals = asyncHandler (async (req, res) => {
    if(!req.body.text){
        res.status(400) 
        throw new Error("Please add a text ")
    }
    const goal = await Goal.create({
        text:req.body.text,
        user: req.user.id
    })
    res.status(200).json(goal)
    })

// @desc read goals @route GET /api/goals
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find({
       user:req.user.id 
    })
    res.status(200).json(goals)
    })

// @desc update goals @route PUT /api/goals/id
const putGoals =asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error ("Goal not found")
    }
    const user = await User.findById(req.user.id)

    // Check for user
    if(!user){
res.status(401)
throw new Error("User not found")
    }

    // Make sure the logged in user matches the goal user
    if(goal.user.toString()!== user.id){
        res.status(401)
        throw new error("user not authorized")
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body,{
        new:true,
    })
    res.status(200).json(updatedGoal)
    })

// @desc delete goals @route delete /api/goals/id
const deleteGoals =asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error ("Goal not found")
    }
    const user = await User.findById(req.user.id)

    // Check for user
    if(!user){
res.status(401)
throw new Error("User not found")
    }

    // Make sure the logged in user matches the goal user
    if(goal.user.toString()!== user.id){
        res.status(401)
        throw new error("user not authorized")
    }
    const deleteGoal = await Goal.findByIdAndRemove(req.params.id)
    res.status(200).json({id:req.params.id})
})

module.exports = {
    setGoals,
    getGoals,
    putGoals,
    deleteGoals
}