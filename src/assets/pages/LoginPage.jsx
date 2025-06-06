import React from 'react'

const LoginPage = () => {
  return (
      <section className='login-page center-wrapper'>
      <div className='login-form'>
              <h1>Login</h1>
              
              <form noValidate>
                  <div className='form-input'>
                      <label>Email</label>
                      <input type='email' name='email' required placeholder='Email'/>
                  </div>
                  <div className='form-input'>
                      <label>Password</label>
                      <input type='text' name='password' required placeholder='Password'/>
                  </div>
                  <button className='btn-submit' type='submit'>Sign up</button>
              </form>
          </div> 
    </section>
  )
}

export default LoginPage