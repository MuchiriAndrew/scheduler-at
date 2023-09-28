import React, { useEffect } from 'react';

function Homepage() {

      return(
            <div className='homepage m-0'>
            <header className='row m-0'>
                  <div className='col row'>
                        <i className='bi bi-code m2 col'></i>
                        <div className='col'>
                              <span className='row'>Schecduler</span>
                              <span className='row'>Timeline</span>
                        </div>
                  </div>
                  <nav className='col'>
                        <a href="/schedule"><i className="bi bi-calendar m-2"></i> Schedule</a>
                        <a href="/classes"><i className="bi bi-book m-2"></i> Classes</a>
                        <a href="/home"><i className="bi bi-house-door m-2"></i> Home</a>
                        <a href="/tasks"><i className="bi bi-check-square m-2"></i> Tasks</a>
                  </nav>
                  <div className='col'>
                        <button className='btn btn-success'>Create</button>
                        <button className='btn  border-success'>View</button>
                  </div>
            </header>
            <main>
                  <div className='welcome'>
                        <div className='header-container'>
                              <div className='content'>
                                      <h1>Organizing your schedule is our priority</h1>
                                      <p>Transforming Individuals into productive citizens</p>
                              </div>
                        </div>
                        <div className='image-container'>
                              
                        </div>
                  </div>
            </main>
            </ div>
      );
}

export default Homepage;