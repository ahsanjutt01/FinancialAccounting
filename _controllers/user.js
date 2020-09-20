const User = require('../_models/user');


exports.postSignUp = async (req, res, next) => {
    const { email, password, firstName, lastName} = req.body;
    const user = new User(email, password, firstName, lastName);
    const isSignUped = await user.signUp();
    return res.status(201).json('signup successfully');
}