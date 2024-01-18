const jwt = require('jsonwebtoken');
const { login } = require('../controller/auth');

const isAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({ errors: [{ msg: "You are not authorized" }] });
        }

        const KEY = process.env.KEY;

        const decoded = jwt.verify(token, KEY, { algorithms: ['HS256'] });
       console.log(decoded)
        req.user = { id: decoded.userId };
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ errors: [{ msg: "You are not authorized" }] });
    }
};

module.exports = isAuth;