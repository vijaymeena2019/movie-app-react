

const Navbar = ({onTotalItems, onTotalProducts}) => {  // {onSum}  {onSum()}
    return (
        <nav className="navbar bg-light">
            
        <div className="container-fluid">
        <span className="">{`Total Items ${onTotalItems()}`}</span>
        <span className="">{`Total Products ${onTotalProducts}`}</span>
            <h6 className="navbar-brand">Navbar</h6>
        </div>
        </nav>
    )
}

export default Navbar;