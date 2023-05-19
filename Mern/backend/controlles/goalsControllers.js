const  asyncHandler = require('express-async-handler')
// @desc create goals @route POST /api/goals
const setGoals = asyncHandler(async(req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error("Please add a text file")
    }
    res.status(200).json({ message: "setting data successfully" })
    })

// @desc read goals @route GET /api/goals
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Getting data successfully" })
    })

// @desc update goals @route PUT /api/goals/id
const putGoals =asyncHandler(async (req, res) => {
    res.status(200).json({ message: `updating data successfully${req.params.id}` })
    })

// @desc delete goals @route delete /api/goals/id
const deleteGoals =asyncHandler(async (req, res) => {
    res.status(200).json({ message: `deleting data successfully${req.params.id}` })
})

module.exports = {
    setGoals,
    getGoals,
    putGoals,
    deleteGoals
}