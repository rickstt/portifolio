import React from 'react'

function ProvidedCard({ src, h3, p }) {
  return (
    <div className="providedCard">
      <div className="overlay">
        <img src={src} alt={`${h3} logo`} />
      </div>
    </div>
  )
}

export default ProvidedCard
