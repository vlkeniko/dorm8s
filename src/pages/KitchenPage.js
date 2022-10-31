import React from 'react'
import Kitchen from '../components/Kitchen'
import Nav from '../components/Nav'
import ProfileNav from '../components/ProfileNav'
export default function KitchenPage() {
  return (
    <>
    <ProfileNav/>
    <h1 className="header-title">Kitchen</h1>
    <Nav/>
    <Kitchen/>
    </>
   
  )
}