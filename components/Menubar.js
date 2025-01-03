"use client"
import {useState} from 'react'


function Menubar() {
    
    const [menuvis, setMenu] = useState('mobilenotvisible')
    const [hamvis, setHam] = useState('mobilevisible')
    const [xvis, setX] = useState('mobilenotvisible')

    function mobileVisible() {
        setMenu('mobilevisible')
        setHam('mobilenotvisible')
        setX('mobilevisible')
    }
    function mobileNotVisible() {
        setMenu('mobilenotvisible')
        setX('mobilenotvisible')
        setHam('mobilevisible')
    }
    return (
    <>
        <div id="mobilebar" className="mobiledisplay">
          <div id="hamburgerbutton" onClick={mobileVisible} className={hamvis}><i className="las la-bars"></i></div>
          <div id="xbutton" onClick={mobileNotVisible} className={xvis}><i className="las la-times"></i></div>
        </div>
        <div id="aboutbar" className={menuvis}>
          <div>
            <div id="about-left" className="bargroup">
              <div className="about-item">
                <a href="/about">About YS</a>
                <div className="dropdown">
                  <a href="/about/about-js">About JS</a>
                  <a href="/about/vision">Mission & Vision</a>
                  <a href="/about/history">History</a>
                </div>
              </div>
              <div className="about-item">
                <a href="/business">Business</a>
                <div className="dropdown">
                  <a href="/business/golf">Golf</a>
                  <a href="/business/center">Community Center</a>
                  <a href="/business/screengolf">Screen Golf</a>
                  <a href="/business/franchise">Franchise</a>
                  <a href="/business/management">Management</a>
                </div>
              </div>
            </div>
            <div id="about-right" className="bargroup">
              <div className="about-item">
                <a href="/">Community</a>
                <div className="dropdown">
                <a href="/">News</a>
                <a href="/">Event</a>
                <a href="/">Gallery</a>
                <a href="/">Communication</a>
                </div>
              </div>
              <div className="about-item">
                <a href="/">Contact</a>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
  
  export default Menubar
  