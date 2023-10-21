const express = require(`express`)
const { UserModel } = require("../model/userModel")

const UserRouter = express.Router()

// For Get User 
UserRouter.get(`/`, async (req, res) => {
    try {
        let user = await UserModel.find()
        res.send(user)
    } catch (error) {
        res.send({ msg: error.message })
    }
})

//For Single User 
UserRouter.get('/SingleUserData', async(req, res) => {
    try {
        let data = await UserModel.aggregate([
            { $match: { email: req.query.email } }, 
            { $lookup: { from: 'favourites', localField: "email", foreignField: 'userEmail', as: 'allRecipe' } }
        ]);
        console.log(data);
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
})

// For User id
UserRouter.get(`/:id`, async (req, res) => {
    const { id } = req.params
    console.log(id)
    try {
        let user = await UserModel.findOne({ _id: id })
        res.send(user)
    } catch (error) {
        res.send({ msg: error.message })
    }
})

// For Post User
UserRouter.post('/', async (req, res) => {
    let { email } = req.body
    const exist = await UserModel.findOne({ email })
    try {
        if (exist) {
            res.send(`user already exist`)
        } else {
            let newuser = new UserModel(req.body)
            await newuser.save()
            res.status(200).send({ msg: `User registered successfully` })
        }

    } catch (error) {
        res.send({ err: error.message })
    }

})

module.exports = {
    UserRouter
}