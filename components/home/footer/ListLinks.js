import React from 'react'
import Link from 'next/link'

export default function ListLinks({data}) {
  return (
    <ul className='list-links'>
        {
            data.map(each => (
                <li key={each.label} className={each.link ? "" : "main"}><Link href={each.link || "#"}><a>{each.label}</a></Link></li>
            ))
        }
    </ul>
  )
}
