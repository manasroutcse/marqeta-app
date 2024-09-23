"use client"
import Link from 'next/link';
// import React, { Component } from 'react';
import Head from 'next/head'
import styles from './MegaMenu.module.scss';
import Image from 'next/image'
// import  '../styles/MegaMenu.css';
// import {Signin} from "../signin";

const MegaMenu = ({ Component, pageProps }) => {
  return (
    <>
    <nav className={styles.megamenu}>
   
       
      <ul className={styles.menu}>
      <div className={styles.logo}>
        <Link href="/"><Image
        src="https://images.ctfassets.net/wqi8u1luxsv0/logo.svg/8559a40e8a503b55eeec4852e60efd49/logo.svg"
        width={160}
        height={160}
        alt="Picture of the author"
      /></Link>
     
    </div>
      <li className={`${styles.menuItem} ${styles.dropdown}`}>
          <Link href="/services">Platform</Link>
          <div className={styles.dropdownContent}>
            <div className={styles.dropdownColumn}>
              <h3>Platform</h3>
              <Link href="/service1">Platform Overview</Link>
              <Link href="/service2">Marqeta Dashboard</Link>
            </div>
            <div className={styles.dropdownColumn}>
              <h3>Issuing</h3>
              <Link href="/service3">Issuing Overview</Link>
              <Link href="/service4">Credit Cards</Link>
              <Link href="/service3">Debit Cards</Link>
              <Link href="/service4">Prepaid Cards</Link>
              <Link href="/service3">Virtual Cards</Link>
              <Link href="/service4">Digital Wallets & Tokenization</Link>
            </div>
            <div className={styles.dropdownColumn}>
              <h3>Processing</h3>
              <Link href="/service3">Processing Overview</Link>
              <Link href="/service4">Just In Time Funding</Link>
              <Link href="/service3">Dynamic Spend controls</Link>
              
            </div>
            <div className={styles.dropdownColumn}>
              <h3>Digital Banking</h3>
              <Link href="/service3">Marqeta Banking Overview</Link>
              <Link href="/service4">Money movement </Link>
              <Link href="/service3">Accounts</Link>
              
            </div>
            <div className={styles.dropdownColumn}>
              <h3>Risk</h3>
              <Link href="/service3">Risk Control Overview</Link>
              <Link href="/service4">Real Time Decision </Link>
              <Link href="/service3">3D secure</Link>
              
            </div>
          </div>
        </li>
        <li className={`${styles.menuItem} ${styles.dropdown}`}>
          <Link href="/services">Solotions</Link>
          <div className={styles.dropdownContent}>
          <div className={styles.dropdownColumn}>
              <h3>Overview</h3>
              <Link href="/service3">Ssolutions Oversview</Link>
              <Link href="/service4">What is modern card issuing?</Link>
              <Link href="/service3">Credit cards</Link>
              <Link href="/service4">Embadded Finance</Link>
            </div>

            <div className={styles.dropdownColumn}>
              <h3>Expert Services</h3>
              <Link href="/service1">Programe Management</Link>
              <Link href="/service2">Partnership</Link>
            </div>
            <div className={styles.dropdownColumn}>
              <h3>By Industry</h3>
              <Link href="/service3">Digital Banking</Link>
              <Link href="/service4">Incentives and Rewards</Link>
              <Link href="/service3">Online Travel</Link>
              <Link href="/service4">SMB lending</Link>
              <Link href="/service4">On demand services</Link>
              <Link href="/service4">Crypto cards</Link>
              <Link href="/service3">Expense Management</Link>
              <Link href="/service4">Media and ad agencies</Link>
              <Link href="/service4">Buy Now and Buy later</Link>
              <Link href="/service4">Insurance</Link>
              <Link href="/service4">Online marketplaces</Link>
              <Link href="/service4">Financial Instituions</Link>
             
            </div>
          </div>
        </li>
        <li className={`${styles.menuItem} ${styles.dropdown}`}>
          <Link href="/services">Developers</Link>
          <div className={styles.dropdownContent}>
                <div className={styles.dropdownColumn}>
                <h3>Overview</h3>
                <Link href="/service1">Developer Overview</Link>
                <Link href="/service2">Developer Community</Link>
                <Link href="/service2">Marqeta Status</Link>
                </div>
            <div className={styles.dropdownColumn}>
              <h3>API Documentation</h3>
              <Link href="/service3">Guides</Link>
              <Link href="/service4">Core API</Link>
              <Link href="/service3">DIVA API</Link>
              <Link href="/service4">API Explorer</Link>
              <Link href="/service4">Release notes</Link>
            </div>
          </div>
        </li>
        <li className={`${styles.menuItem} ${styles.dropdown}`}>
          <Link href="/services">Resources</Link>
          <div className={styles.dropdownContent}>
            <div className={styles.dropdownColumn}>
              <h3>Overview</h3>
              <Link href="/service1">Resourse Center</Link>
             
            </div>
            <div className={styles.dropdownColumn}>
              <h3>Content</h3>
              <Link href="/service3">Research and Reports</Link>
              <Link href="/service4">Guides</Link>
              <Link href="/service3">Customer case studies</Link>
              <Link href="/service4">Videos</Link>
            </div>
            <div className={styles.dropdownColumn}>
              <h3>Helpful Links</h3>
              <Link href="/service3">Blog</Link>
          </div>
          </div>
        </li>
        <li className={`${styles.menuItem} ${styles.dropdown}`}>
          <Link href="/services">Company</Link>
          <div className={styles.dropdownContent}>
            <div className={styles.dropdownColumn}>
              <h3>Overview</h3>
              <Link href="/service1">About us</Link>
              
            </div>
            <div className={styles.dropdownColumn}>
                <div className={styles.companyDivOne}>
                <h3>Learn more </h3>
              <Link href="/service3">Why marqeta</Link>
              <Link href="/service4">Newsroom</Link>
              <Link href="/service3">Socialimpact</Link>
              <Link href="/service4">Investor relations</Link>
                </div>
             
              <div className={styles.companyDivTwo}>
              <Link href="/service3">Leadership</Link>
              <Link href="/service4">Careers & culture</Link>
              <Link href="/service3">Tech at marqeta</Link>
              <Link href="/service4">Diversity,Equity & inclusion</Link>
              
              </div>
              <div className={styles.companyDivThree}> <Link href="/service3">Contact us</Link></div>
              
           
            </div>
          </div>
        </li>
        {/* <li className={styles.signin}><Link href="/SignInPage">Sign in</Link></li> */}
        <li className={styles.signin}><Link href="/signin">
        Sign in
      </Link></li>
        
        {/* <li className={`${styles.menuItem} ${styles.dropdown}`}>
          <Link href="/services">Sign in</Link>
          <div className={styles.dropdownContent}> */}
            {/* <div className={styles.dropdownColumn}>
              <h3>Category 1</h3>
              <Link href="/service1">Service 1</Link>
              <Link href="/service2">Service 2</Link>
            </div>
            <div className={styles.dropdownColumn}>
              <h3>Category 2</h3>
              <Link href="/service3">Service 3</Link>
              <Link href="/service4">Service 4</Link>
            </div> */}
          {/* </div> */}
        {/* </li> */}
        <li>
          <button className={styles.contact}><Link href="/contactus">Contact us</Link></button>
          <div className={styles.dropdownContent}>
            {/* <div className={styles.dropdownColumn}>
              <h3>Category 1</h3>
              <Link href="/service1">Service 1</Link>
              <Link href="/service2">Service 2</Link>
            </div>
            <div className={styles.dropdownColumn}>
              <h3>Category 2</h3>
              <Link href="/service3">Service 3</Link>
              <Link href="/service4">Service 4</Link>
            </div> */}
          </div>
        </li>
      </ul>
    </nav>
    </>
  );
};

export default MegaMenu;
