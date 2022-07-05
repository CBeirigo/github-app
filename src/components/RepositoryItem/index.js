import React from 'react'

function RepositoryItem({name, linkToRepo, fullName}) {
  return (
    <>
      <h2>{name}</h2>
      <h4>full name:</h4>
      <a href={linkToRepo}
        target='_blank'
        rel='noreferrer'>{fullName}</a>

    </>
  )
}

export default RepositoryItem