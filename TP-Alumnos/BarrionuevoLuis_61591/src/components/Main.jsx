import { useEffect, useState } from 'react'
import { Box, Typography, Divider } from '@mui/material'
import Estudios from './Estudios'
import SoftSkills from './SoftSkills'
import Proyectos from './Proyectos'
import Experiencia from './Experiencia'
import Idiomas from './Idiomas'
import Certificados from './Certificados'

export default function Main() {
  const [data, setData] = useState({})

  useEffect(() => {
    Promise.all([
      fetch('/api/profile').then(r => r.json()),
      fetch('/api/estudios').then(r => r.json()),
      fetch('/api/soft-skills').then(r => r.json()),
      fetch('/api/proyectos').then(r => r.json()),
      fetch('/api/experiencia').then(r => r.json()),
      fetch('/api/idiomas').then(r => r.json()),
      fetch('/api/certificados').then(r => r.json())
    ]).then(([profile, estudios, softSkills, proyectos, experiencia, idiomas, certificados]) =>
      setData({ profile, estudios, softSkills, proyectos, experiencia, idiomas, certificados })
    )
  }, [])

  if (!data.profile) return null

  return (
    <Box component="main" sx={{ pb: 6 }}>
      <Typography variant="h5" sx={{ mb: 1 }}>Sobre mí</Typography>
      <Typography sx={{ mb: 3 }}>{data.profile.about}</Typography>

      <Divider sx={{ my: 3 }} />
      <div id="estudios"><Estudios items={data.estudios} /></div>

      <Divider sx={{ my: 3 }} />
      <SoftSkills items={data.softSkills} />

      <Divider sx={{ my: 3 }} />
      <div id="proyectos"><Proyectos items={data.proyectos} /></div>

      <Divider sx={{ my: 3 }} />
      <div id="experiencia"><Experiencia items={data.experiencia} /></div>

      <Divider sx={{ my: 3 }} />
      <Idiomas items={data.idiomas} />

      <Divider sx={{ my: 3 }} />
      <Certificados items={data.certificados} />
    </Box>
  )
}
