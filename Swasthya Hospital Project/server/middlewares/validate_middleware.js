const appointmentSchema = require("../validators/auth_validator")

const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        const status = 432;
        const message = "Fill the Input Properly";
        for(let i=0; i<err.errors.length; i++){
            var extraDetails = err.errors[i].message;
        }

        const error = {
            status,
            message,
            extraDetails,
        }
        console.log(error.extraDetails);

        // res.status(400).json({ msg : error });
        next(error);
    }
}

module.exports = validate;