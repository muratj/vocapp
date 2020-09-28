const {
    Router
} = require('express');
const router = Router();

router.post('/signup', async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body;
    } catch (e) {
        res.status(500).json({
            messge: "Something went wrong try again!"
        })
    }
})

router.post('/login', async (req, res) => {

})

module.exports = router;