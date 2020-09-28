const {
    Router
} = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const {
    check,
    validationResult
} = require('express-validator');
const router = Router();

router.post('/signup', async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body;

        // checking email
        const condidate = await User.findOne({
            email
        })

        if (condidate) {
            return res.status(400).json({
                message: 'User exists'
            })
        }

        // hashing password
        const hashedPassword = await bcrypt.hash(password, 15);

        // creating user
        const user = new User({
            email,
            password: hashedPassword
        })

        await user.save();

        res.status(201).json({
            message: 'User created'
        });
    } catch (e) {
        res.status(500).json({
            message: "Something went wrong try again!"
        })
    }
})

router.post('/login', async (req, res) => {

})

module.exports = router;