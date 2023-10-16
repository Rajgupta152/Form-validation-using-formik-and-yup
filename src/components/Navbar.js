import { Link } from "react-router-dom"

const Navbar = () => {

    return(
        <div className="navbar-wrapper" >
            <div className="navbar">
                <div className="form">
                    <Link style={{textDecoration: 'none', color: '#fff', fontSize: '25px'}} to='/'>Form</Link>
                </div>
                <div className="Data">
                    <Link style={{textDecoration: 'none', color: '#fff', fontSize: '25px'}} to='/DataTable'>Data</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar