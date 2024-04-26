const express = require("express")

const router = express.Router()
const user = require("../Models/User")

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {

        const user = await Login.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }


        const passwordMatch = awaitbcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid password' });
        }


        const token = jwt.sign({ email }, process.env.SECRET_TOKEN);
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }

})

router.post("/signup", async (req, res) => {
    const { password, email, username } = req.body;

    try {
        const newuser = user.create({
            password,
            email,
            username
        })
        console.log(newuser)
        res.status(200).json(newuser)




    } catch (error) {
        console.log(error.message)
    }
})

module.exports = router