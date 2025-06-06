import React from 'react'

const SignUpPage = () => {
  return (
    <section className='signup-page center-wrapper'>
      <div className='signup-form'>
              <h1>Sign Up</h1>

              <form noValidate>
                  <div className='form-input'>
                      <label>First Name</label>
                      <input type='text' name='firstName' required placeholder='First Name'/>
                  </div>
                  <div className='form-input'>
                      <label>Last Name</label>
                      <input type='text' name='lastName' required placeholder='Last Name'/>
                  </div>
                  <div className='form-input'>
                      <label>Email</label>
                      <input type='email' name='email' required placeholder='Email'/>
                  </div>
                  <div className='form-input'>
                      <label>Password</label>
                      <input type='text' name='password' required placeholder='Password'/>
                  </div> 
                  <div className='form-input'>
                      <label>Confirm Password</label>
                      <input type='text' name='confirmPassword' required placeholder='Confirm Password'/>
                  </div>
                  <button className='btn-submit' type='submit'>Sign up</button>
              </form>
          </div> 
    </section>
  )
}

export default SignUpPage