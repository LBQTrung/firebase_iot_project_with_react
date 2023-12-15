import logoImage from '../assets/images/logo.png'

const Logo = () => {
    return (
        <div className='logo'>
            <img className='logo-img' src={logoImage} alt='Logo' />
            <h3 className='logo-text'>Smart Room</h3>
        </div>
    )
}

export default Logo