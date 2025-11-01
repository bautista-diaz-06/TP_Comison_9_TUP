import React from 'react'

export default function AuthLayout({ children }){
  return (
    <div className="d-flex justify-content-center" style={{ minHeight: 'calc(100vh - 80px)' }}>
      <div style={{ width: '100%', maxWidth: 1220 }}>
        {children}
      </div>
    </div>
  )
}
