import { useParams } from 'react-router-dom'


const REDIRECT_MAP = {
  'linkedin': 'https://linkedin.com/in/amirsharapov',
  'github': 'https://github.com/amirfounder',
  'resume-final-pdf': 'https://drive.google.com/file/d/1xN3j_HEL3GxulxsmXXVqoL3AmAQshO2q/view?usp=sharing',
  'resume-final-docx': 'https://docs.google.com/document/d/1MqQFwRRDmDsUmcnH4vEtoWsbzZvqW6qc',
  'resume-source': 'https://docs.google.com/document/d/1P23NRwlovpxTlb5tr4B4c4xFxewCSGScAkcWsduDAxk',
  'twitch': 'https://twitch.tv/amirfounder'
}


export const Redirect = () => {
  const { key } = useParams()
  window.location.replace(REDIRECT_MAP[key], '_blank')
}
