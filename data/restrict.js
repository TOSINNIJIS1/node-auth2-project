const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets.js')

module.exports = (req, res, next) => {

    try {

        const token = req.headers.authorization.split(" ")[1];
        console.log(token)

        if(token) {
            jwt.verify(token, secrets.jwt_secret, (err, decodedToken) => {
                if (err) {
                    res.status(401).json({message: "bad auth"});
                } else {
                    req.decodedToken = decodedToken;
                    next();
                }
            })
        } else {
            throw new Error("bad authentication");
        }
    } catch (err) {
        res.status(401).json(err.message)
    }
}; 