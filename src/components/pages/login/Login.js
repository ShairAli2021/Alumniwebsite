import React from 'react'
import { Link } from 'react-router-dom'
import { Formik, useFormik } from 'formik'
import { SignUpScheme } from '../Schema'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CNavLink,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { LoginScheme } from '../Schema1'
const initialValues = {
  email: "",
  password: ""
}

const Login = () => {
  //use formic and yup
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: LoginScheme,
    onSubmit: (values, action) => {
      console.log("values", values)
      action.resetForm();

    },

  })
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center ">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>

                    <CInputGroup className="mb-2 border-radius-5">
                      <CInputGroupText>@</CInputGroupText>
                      <CFormInput 
                        placeholder="Email"
                        autoComplete="off"
                         id="email"
                          name="email" 
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                         />
                    </CInputGroup>
                    {
                      errors.email && touched.email?
                      <p className="text-medium-emphasis">{errors.email}</p>:null
                    }

                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        id="password"
                        name="password"
                        value={values.password}
                    
                          onChange={handleChange}
                          onBlur={handleBlur}
                      />
                     
                    </CInputGroup>
                    {
                      errors.password && touched.password?
                      <p className="text-medium-emphasis">{errors.password}</p>:null
                    }
                    <CRow>
                   
                      <CCol xs={6}>
                      
                      
                      {
                        errors.email || values.email && errors.password ||values.password ?
               
                         <Link to="/Home">
                      
                        <CButton color="primary" className="px-4" type="submit">
                          Login
                        </CButton>
                        </Link>: onsubmit=false
                      }
                    
                    
                      </CCol>
                      <CCol xs={6} className="text-right">
                      <CNavLink to='/Home'>
                        <CButton color="link" className="px-0" type="submit">
                          Forgot password?
                        </CButton>
                        </CNavLink>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div className='mt-5'>
                    <h2>Sign up</h2>

                    <Link to="/register">
                      <CButton color="success" className="mt-5" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
