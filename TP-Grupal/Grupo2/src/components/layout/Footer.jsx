import React from 'react'; import './Footer.css';
 // Crea este archivo CSS 
 function Footer() {
     return ( 
    <footer className="footer">
         <p>&copy; {new Date().getFullYear()} Sistema de Gestión de Reservas de Gimnasio. </p>
    </footer> ); }
  export default Footer;