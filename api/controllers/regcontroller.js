const Reg = require('../models/reg')


exports.register = async (req, res) => {
    try {
        const { name, email, password, repassword } = req.body
        const usercheck = await Reg.findOne({ email: email })
        if (usercheck == null) {
            const record = new Reg({ email: email, password: password, name: name, Repassword: repassword })
            record.save()
            res.status(201).json({
                message: `successfully ${email} has been registered`,
                status: 201
            })
        } else {
            res.status(400).json({
                message: `${email} is already register`
            })
        }
    } catch (error) {
        res.status(400).json({
            message: error.message,
            status: 400
        })

    }
}