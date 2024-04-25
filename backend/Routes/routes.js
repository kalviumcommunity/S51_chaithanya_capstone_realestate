bconst express = require("express")

const router = express.router()
const user = require("../Models/User")

router.post("/login", (req, res) => {
    const { email, password } = req.body;

    try {

        const user = awaitLogin.findOne({ email });
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