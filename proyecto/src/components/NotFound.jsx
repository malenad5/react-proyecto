import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:15 }}>
    <img src="https://static.vecteezy.com/ti/vecteur-libre/p1/27570050-papier-avion-avec-ombre-erreur-404-eclat-message-moulage-avion-ombre-site-internet-atterrissage-page-ui-conception-ne-pas-a-trouve-dessin-anime-image-reveur-vibrations-vecteur-plat-illustration-avec-annees-90-retro-contexte-vectoriel.jpg" alt='error' style={{ width: '55%', marginBottom: 15 }}/>
    <Link className='btn btn-dark' to='/'>Volver a home</Link>
    </div>
)
}

export default NotFound