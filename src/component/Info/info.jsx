import React from 'react'
import '../Info/info.css';

const info = () => {
  return (
    <section className="aboutUs">
      <div className="about">
        <div className='header_wrap'>
          <h1>About Us <span className='dot'></span></h1>
          <p>Welcome to <b>Crypto Gland !</b> We're here to help you invest
            in the future of finance and unleash the power of cryptocurrencies.</p>
        </div>
      </div>

      <div className="ourMission">
        <h1>Our Mission <span className='dot'></span></h1>
        <p>
          We believe that everyone should have the opportunity to participate in
          the crypto revolution, regardless of their background or experience level.
          Whether you're a seasoned trader or new to the world of digital assets,
          we're here to support you on your investment journey.
        </p>
      </div>

      <div className="whyUs">
        <h1>Why Choose Us ? <span className='dot'></span></h1>
        <ul>
          <li>
            <b>User-Focused Experience:</b> We prioritize user experience and strive to make our
            platform intuitive and easy to use for investors of all levels.
          </li>
          <li>
            <b>Security First:</b> The security of your assets is our top priority. We employ
            industry-leading security measures to safeguard your investments and personal information.
          </li>
          <li>
            <b>Transparency:</b> We believe in transparency and provide our users with access to real-time data,
            market insights, and comprehensive investment analytics.
          </li>
          <li>
            <b>Diverse Investment Options:</b> From Bitcoin and Ethereum to emerging altcoins, we offer a
            diverse range of investment options to help you build a well-rounded crypto portfolio.
          </li>
          <li>
            <b>Customer Support:</b> Our dedicated customer support team is 
            available to assist you every step of the way. Whether you have 
            questions about investing or need technical assistance, we're here to help.
          </li>
        </ul>
      </div>

      <div className="getStarted">
        <h1>Get Started Today <span className='dot'></span></h1>
        <p>
          Join thousands of investors who have chosen Crypto Gland as their trusted partner in the
          world of cryptocurrencies. Sign up today to start investing,
          and let's navigate the exciting world of digital assets together.
        </p>
      </div>
    </section>
  )
}

export default info