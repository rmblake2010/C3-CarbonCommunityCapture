import { Outlet, Link } from "react-router-dom"

const Navigation = () => {
    return (
        <div>
            <div>Navbar</div>
             <Outlet/>
        </div>
    )
}

export default Navigation