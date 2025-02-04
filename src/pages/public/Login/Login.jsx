import React from 'react'
import { Link } from 'react-router-dom'
import image from './../../../assets/heroImage.avif'

const Login = () => {
  return (
    <div style={{'--image-url': `url(${image})`,}} 
        className='bg-no-repeat bg-cover bg-[image:var(--image-url)]'>
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <div className="w-full backdrop-blur-3xl rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
          Sign in to your account
        </h1>
        <form className="space-y-4 md:space-y-6" action="#">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="remember" className="text-gray-50 dark:text-gray-300">Remember me</label>
              </div>
            </div>
            <a href="#" className="text-sm font-medium text-white hover:underline">Forgot password?</a>
          </div>
          <button type="submit" className="w-full text-white bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
          <p className="text-sm font-light text-gray-50 dark:text-gray-400">
            Don’t have an account yet? <Link to="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Register</Link>
          </p>
        </form>
      </div>
    </div>
  </div>
</div>
  )
}

export default Login