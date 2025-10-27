import { useState } from 'react'

const FormularioLogin = () => {
    const [nombre, setNombre] = useState("")
    const [contraseña, setContraseña] = useState("")

    const handleChangeName = (e) => {
        setNombre(e.target.value) //obtiene el valor del input nombre
    }

    const handleChangePassword = (e) => {
        setContraseña(e.target.value) //obtiene el valor del input contraseña
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        localStorage.setItem("nombre", JSON.stringify(nombre)) //guarda el nombre en el navegador
        localStorage.setItem("constraseña", JSON.stringify(contraseña)) //guarda la contraseña en el navegador
        
        window.location.href = "/tabla-eventos" //se podria usar el Hook "useNavigate" pero no lo vimos
    }

  return (
    <div className='login-container'>
        <form onSubmit={handleSubmit} className='container-form'> 
              <h3>Login</h3>
              <div>
                <h5>Nombre y Apellido</h5>
                  <input
                    type="text"
                    onChange={handleChangeName}
                    required
                    placeholder='Ingresa tu nombre completo...' />
              </div>
              
              <div>
                <h5>Contraseña</h5>
                  <input
                    type="password"
                    onChange={handleChangePassword}
                    required
                    placeholder='Ingresa tu contraseña...' />
              </div>
            
              <button type='submit'>Ingresar</button>
        </form>
    </div>
  )
}

export default FormularioLogin