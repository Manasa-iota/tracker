import {body} from "express-validator"

const userRegistrationValidator = ()=>{
    return [
        body('email')
            .trim()
            .notEmpty().withMessage("Email is required")
            .isEmail().withMessage("Enter vaild Email"),
        body("username")
            .trim()
            .notEmpty("Username is required")
            .isLength({min:3}).withMessage("username should have minimum 3 characters")
            .isLength({max:15}).withMessage("username cannot not exceed 15 characters"),
        body("password")
            .trim()
            .notEmpty().withMessage("password is required")
            .isStrongPassword().withMessage("Enter a strong password")
    ]
}

const userLoginValidator=()=>{
    return [
        body("email")
            .trim()
            .isEmail().withMessage("Email is not valid"),
        body("password")
            .notEmpty().withMessage("password cannot be empty")
    ]
}


export {userRegistrationValidator,userLoginValidator};

