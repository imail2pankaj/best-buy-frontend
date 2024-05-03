import React from 'react'
import SignInForm from './SignInForm'

const SignIn = () => {

  return (
    <section className="contact section">
      <div className="container">
        <div className="row mb-4">
          <div className="text-center contact-title mx-auto">
            <h1 className="text-center">Sign In</h1>
          </div>
          <div className='d-flex justify-content-center mx-auto'>
            <SignInForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignIn