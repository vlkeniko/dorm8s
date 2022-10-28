import React from 'react'
import Nav from '../components/Nav'
import Profile from '../components/Profile'
import Settings from '../components/Settings'
export default function ProfilePage() {
  
  return (
    <>
    <h1 className="header-title">Profile</h1>


    <Profile/>
    <Settings/>
    <Nav/>
    </>
  )
}
