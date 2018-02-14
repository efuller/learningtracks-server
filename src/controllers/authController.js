import User from '../models/User';

exports.authenticate = (req, res) => {
    const creds = req.body;
    User.findOne({ email: creds.email })
        .then( user => {
            if (user && user.isValidPassword(creds.password) ) {
                res.json({ user: user.toAuthJSON() });
            } else {
                res.status(400).json({ errors: { global: 'Invalid Credentials' }});
            }
        })
};