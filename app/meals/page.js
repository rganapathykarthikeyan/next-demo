import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div>
        Meals Page
        <Link href='/meals/share'>Share</Link>
        <Link href='/meals/moreDetails'>More Details</Link>
    </div>
  )
}

export default Page