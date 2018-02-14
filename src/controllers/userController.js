import User from '../models/User';
import parseErrors from '../helpers/parseErrors';

exports.register = (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const user = new User({ firstName, lastName, email });
    user.setPassword(password);
    user.save()
        .then( userRecord => {
            const user = userRecord.toAuthJSON();
            res.json({ user });
        })
        .catch( err => res.status(400).json({ errors: parseErrors(err.errors)}));
};