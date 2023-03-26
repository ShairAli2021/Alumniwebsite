import * as Yup from 'yup'

export const LoginScheme=Yup.object(
    {
        email:Yup.string().email().required("please enter valid email"),
        password:Yup.string().min(6).required("enter password"),
       

    }
)