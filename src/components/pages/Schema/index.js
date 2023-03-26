import * as Yup from 'yup'

export const SignUpScheme=Yup.object(
    { 
        fname:Yup.string().min(2).required("please enter f-name"),
        lname:Yup.string().min(2).required("please enter l-name"),
        email:Yup.string().email().required("please enter valid email"),
        password:Yup.string().min(6).required("enter password"),
        cn_password:Yup.string().required().oneOf([Yup.ref('password'),null], "password must match")

    }
)



