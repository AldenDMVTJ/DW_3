import reactLogo from '../../assets/react.svg'
import './header.css'


function Header(){
    return(
        <>
            <header className="header_container">
                <div className="header_content">
                    <div className="header_logo">
                        <img src={reactLogo} alt=""/>
                    </div>
                    <div className="header_nav">
                        <ul>
                            <li>Home</li>
                            <li>Productos</li>
                            <li>Contactos</li>
                        </ul>
                    </div>
                </div>
            </header>
        

        </>
    )
}


export default Header