'use client'
import React, {useEffect}from 'react'

export const redirect = () => {
    useEffect(() => {
        window.location.replace("http://localhost:3000/")
    }, [])
  return (
    <></>
  )
}
export default redirect
