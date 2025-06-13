import './Footer.modules.css'
import {Github, Phone, Instagram} from 'lucide-react'

export default function Footer(){
    return (
        <div className="footer-container">
            <div className='footer-ifrn'><p>IFRN - Campus Macau</p> <p>Curso Técnico em Informática</p><p>Programação para a Internet 2025</p></div>
            <div className='bonheur-royale-regular'>Guilherme Leal Santos</div>
            <div className='footer-icons'><a href=""><Github /></a><a href=""><Instagram /></a><a href=""><Phone /></a></div>
        </div>
    )
}
