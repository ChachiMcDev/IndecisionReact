

const Header = ({ subtitle, title }) => {

    return (
        <div className="header text-white text-center bg-slate-800 mb-20 pt-7 pb-7">
            <div className="container max-w-5xl mr-auto ml-auto pr-7 pl-7 text-center">
                <h1 className="header_title mx-0 text-7xl">{title}</h1>
                {subtitle ? <h2 className='header__subtitle text-slate-400 text-2xl font-medium m-0'>{subtitle}</h2> : null}
            </div>

        </div>
    )
}


export default Header