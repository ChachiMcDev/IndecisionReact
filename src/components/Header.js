

const Header = ({ subtitle, title }) => {

    return (
        <div className="header">
            <div className="container">
                <h1 className="header_title">{title}</h1>
                {subtitle ? <h2 className='header__subtitle'>{subtitle}</h2> : null}
            </div>

        </div>
    )
}


export default Header