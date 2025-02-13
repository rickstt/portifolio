import React from 'react'

function ProvidedCard({ src, h3, p }) {
  return (
        <div>
            <img src={src} alt={`${h3} logo`} />
            <h3>{h3}</h3>
            <p>{p}</p>
        </div>
  )
}

export default ProvidedCard