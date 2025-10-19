import React from 'react'

function Footer() {
  return (
    <footer className="text-center mt-4 border-top pt-3">
      <p>© {new Date().getFullYear()} Ruben Cabanellas</p>
      <div>
        <a href="https://linkedin.com" className="me-3 text-decoration-none">LinkedIn</a>
        <a href="https://github.com" className="text-decoration-none">GitHub</a>
      </div>
    </footer>
  )
}

export default Footer
