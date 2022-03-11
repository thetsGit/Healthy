import React from 'react'

export default function ListLinks({data}) {
  return (
    <ul className='list-links'>
        {
            data.map(each => (
                <li className={each.link ? "" : "main"}><a href={each.link || "#"}>{each.label}</a></li>
            ))
        }
    </ul>
  )
}
