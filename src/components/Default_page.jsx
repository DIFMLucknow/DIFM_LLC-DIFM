import React from 'react'
import styles from '../style'
import { Link } from 'react-router-dom'

const Default_page = () => {
  return (
    <div>
      <section
        className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} mx-10 sm:flex-row mx-5 flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
      >
        <div className="flex-1 flex flex-col">
          <h2
            className={`${styles.heading2} text-[32px] leading-[45px] sm:text-[38px]`}
          >
            404 - Page Not Found
          </h2>
          <p className={`${styles.paragraph} ss:leading-[28.8px] leading-[15px]  max-w-[370px]  mt-6`}>
           Sorry, the page you are looking for does not exist.
          </p>
        </div>

        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Link to={"/"}><button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Back To Home
  </button></Link>
        </div>
      </section>
    </div>
  )
}

export default Default_page
