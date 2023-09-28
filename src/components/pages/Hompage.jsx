import React, { useState, useEffect } from 'react';

function Homepage() {

      useEffect(() => {
      const handleScroll = () => {
            const header = document.getElementsByTagName('header')[0]; // Select the first <header> element
            if (header && window.scrollY > 0) {
            header.classList.add('scrolled'); // Add the "scrolled" class
            } else if (header) {
            header.classList.remove('scrolled'); // Remove the "scrolled" class
            }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
            window.removeEventListener('scroll', handleScroll);
      };
      }, []);

      return(
            <div className='homepage m-0'>
            <header className='row m-0'>
                  <div className='col'>
                        <div className='logo'>
                              <div>
                                    <img type='icon' src="/dash_icon.svg" alt="dash icon" />
                              </div>
                              <div className=''>
                                    <span className='h6 text-warning'>Scheduler</span><br />
                                    <span className='text-success'>Timeline</span>
                              </div>
                        </div>
                  </div>
                  <nav className='col'>
                        <a href="/schedule"><i className="bi bi-calendar m-2"></i> Schedule</a>
                        <a href="/classes"><i className="bi bi-book m-2"></i> Classes</a>
                        <a href="/"><i className="bi bi-house-door m-2"></i> Home</a>
                        <a href="/tasks"><i className="bi bi-check-square m-2"></i> Tasks</a>
                  </nav>
                  <div className='col'>
                        <div className=' button-div'>
                                <a href='/credetials' className='btns btn-login'>Create</a>
                                <a href='/schedule' className='btns btn-view'>View</a>
                        </div>
                      
                  </div>
            </header>
            <main>
                  <div className='welcome'>
                        <div className='header-container'>
                              <div className='content'>
                                      <h1>Organizing your <br /> <mark className='marked'>schedule</mark>  is our priority</h1>
                                      <p>Transforming Individuals into productive citizens</p>
                              </div>
                        </div>
                        <div className='image-container'>
                              <img src="/dash_pic.jpg" alt="dashboard image" />
                        </div>
                  </div>
                  <div className='features'>
                        <div className='motto-container'>
                              <span className='motto'>
                                    <h2>Our Goal is to make you <mark className='marked'>productive</mark>  and <br /> adhere to your <mark className='marked'>schedules</mark>.</h2>
                              </span>
                        </div>
                        <div className='features-list'>
                              <h2 className='h6 links-header'><i className='ft bi bi-house m-2'></i>Available Features</h2>
                              <ul>
                                    <li>Get Schedules</li>
                                    <li>Create using Ussd</li>
                                    <li>Get sms notifications</li>
                              </ul>
                        </div>
                        <div className='motive-container'>
                              <h2 className='h6 text-dark'><i className='ft bi bi-person-add m-2'></i> Become more productive</h2>
                             <span>Have all you schedule organised</span>
                        </div>
                  </div>
            </main>
            <footer className="">
                  <div className="link-container">
                        <div className="row links-col">
                              <div className="col-md-4">
                                    <h5>Contacts</h5>
                                    <ul className="list-unstyled">
                                          <li><a href="#">Email</a></li>
                                          <li><a href="#">Phone</a></li>
                                          <li><a href="#">Address</a></li>
                                    </ul>
                              </div>
                              <div className="col-md-4">
                                    <h5>Page Links</h5>
                                    <ul className="list-unstyled">
                                          <li><a href="#">Home</a></li>
                                          <li><a href="#">About Us</a></li>
                                          <li><a href="#">Services</a></li>
                                    </ul>
                              </div>
                              <div className="col-md-4">
                                    <h5>Terms</h5>
                                    <ul className="list-unstyled">
                                          <li><a href="#">Privacy Policy</a></li>
                                          <li><a href="#">Terms of Use</a></li>
                                          <li><a href="#">Cookie Policy</a></li>
                                    </ul>
                              </div>
                        </div>
                  </div>

                  <div className="copyright-container p-5">
                        <hr />
                        <p>&copy; 2023 TEAM-X.<br /> All Rights Reserved.</p>
                  </div>
            </footer>
            </ div>
      );
}

export default Homepage;