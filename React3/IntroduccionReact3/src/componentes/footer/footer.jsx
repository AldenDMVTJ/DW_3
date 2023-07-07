import imgAe from '../../assets/adobe-ae.svg'
import imgAi from '../../assets/adobe-ai.svg'
import imgPs from '../../assets/adobe-ps.svg'
import './footer.css'

function Footer(){
    return(
        <footer className="footer">
            <div className="footer_container">
                <img src={imgAe} alt="" />
                <img src={imgAi} alt="" />
                <img src={imgPs} alt="" />
            </div>
        </footer>
    )
}

export default Footer
