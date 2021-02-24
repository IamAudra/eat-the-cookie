import {Link} from "react-router-dom"

export const NavBar = () => (
    <div className ="flex">
        <ul className="flex">
            <li className="ml-3">
            <Link to="/"> Medication List</Link>
            </li>
            <li className="ml-3">
                <Link to ="/DataResults">Recipe Page</Link></li>
            <li className="ml-3">
                Decision/Comment Board</li>
            <li className="ml-3">
                Upload Documents</li>
            <li className="ml-3">
                <Link to ="/Bit">FitBit</Link></li>
            <li className="ml-3">
                <Link to ="/DataResults">Food Data Request</Link></li>
            <li className="ml-3">
                <Link to ="Pages">Sugar Tracker</Link>
           </li>
        </ul>
</div>
)