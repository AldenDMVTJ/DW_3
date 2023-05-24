import imgGithub from '../../assets/react.svg'


function Footer(){

    return(

        <footer className="footer">
            <div className='footer_conatiner'>
                <img src={imgGithub} alt="" />
                <img src={imgGithub} alt="" />
                <img src={imgGithub} alt="" />
            </div>
        </footer>

    )
}


export default Footer