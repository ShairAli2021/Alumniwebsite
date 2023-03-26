import React from 'react'
import { useFormik } from 'formik'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilNoteAdd, cilPeople, cilUser } from '@coreui/icons'
import { SignUpScheme } from '../Schema'
import { Link } from 'react-router-dom'
// import { values } from 'core-js/core/array'
const initialValues={
  fname:"",
  lname:"",
email:"",
password :"" ,
cn_password:""
}

const Register = () => {
 const  {values, errors,touched, handleChange, handleBlur,handleSubmit}=useFormik({
    initialValues:initialValues,
    validationSchema:SignUpScheme,
    onSubmit:(values, action )=>{
      console.log("values", values)
      action.resetForm();
    },
    
  })
  // console.log("formik",errors)
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={handleSubmit}>
                  <h1>Register</h1>
                  <p className="text-medium-emphasis">Create your account</p>
               
                  <CInputGroup className='mb-3'>
                  <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                  <CFormInput
                      type="text"
                      placeholder="f-name"
                      autoComplete="off"
                      name="fname"
                      value={values.fname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    </CInputGroup>
                    {
                    errors.fname && touched.fname? 
                  
                  <p style={{color:"red"} }  text-medium-emphasis>{errors.fname}</p>:null
                  }
                    <CInputGroup className='mb-3'>
                  <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                      <CFormInput
                      type="text"
                      placeholder="l-name"
                      autoComplete="off"
                      name="lname"
                      value={values.lname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                     {
                    errors.lname && touched.lname? 
                  
                  <p style={{color:"red"} }  text-medium-emphasis>{errors.lname}</p>:null
                  }
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                     placeholder="Email"
                      autoComplete="email"
                       name="email"
                       value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}

                        />
                       
                  </CInputGroup>
                  
                  {
                    errors.email && touched.email? 
                  
                  <p style={{color:"red"} }  text-medium-emphasis>{errors.email}</p>:null
                  }
                
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                   
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  
                  </CInputGroup>
                  {
                    errors.password && touched.password? 
                  
                  <p style={{color:"red"} }  text-medium-emphasis>{errors.password}</p>:null
                  }
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Repeat password"
                      autoComplete="new-password"
                      name="cn_password"
                      value={values.cn_password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                     
                    />
                  
                  </CInputGroup>
                  {
                    errors.cn_password && touched.cn_password? 
                  
                  <p style={{color:"red"} }  text-medium-emphasis>{errors.cn_password}</p>:null
                  }
                  <div className="d-grid">
                  <Link to="/Home">
                    <CButton color="success" type="submit">Create Account</CButton>
                    </Link>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
