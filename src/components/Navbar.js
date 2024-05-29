import { useEffect } from 'react';
import {Link, useLocation} from 'react-router-dom'

const Navbar = () => {
    let location = useLocation();
    useEffect(() => {
        console.log(location.pathname);

    } , [location]);

    return(
        // <div>
        //     <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        //         <div class="container-fluid">
        //             <Link className={`navbar-brand nav-link ${location.pathname==="/"? "active": ""}`} to="/">Home</Link>
        //             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span class="navbar-toggler-icon"></span>
        //             </button>
        //             <div class="collapse navbar-collapse" id="navbarSupportedContent">
        //             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        //                 <li class="nav-item">
        //                     <Link className={`nav-link ${location.pathname==="/about"? "active": ""}`}  to="/about">About</Link>
        //                     {/* <a class="nav-link active" href='#about1' >About</a> */}
        //                 </li>
        //                 <li class="nav-item">
        //                     <Link className={`nav-link ${location.pathname==="/services"? "active": ""}`} to="/services">Services</Link>
        //                     {/* <a class="nav-link active" href='#services1' >Services</a> */}
        //                 </li>
        //                 <li class="nav-item">
        //                     <Link className={`nav-link ${location.pathname==="/forms"? "active": ""}`} to="/forms">Forms</Link>
        //                     {/* <a class="nav-link active" href='#services1' >Services</a> */}
        //                 </li>
        //                 <li class="nav-item">
        //                     <Link className={`nav-link ${location.pathname==="/best"? "active": ""}`} to="/best">Best</Link>
        //                     {/* <a class="nav-link active" href='#best1' >Best Sellings</a> */}
        //                 </li>
        //                 <li class="nav-item">
        //                     <Link className={`nav-link ${location.pathname==="/makelist"? "active": ""}`} to="/makelist">Make</Link>
        //                     {/* <a class="nav-link active" href='#make1' >Make</a> */}
        //                 </li>
        //                 <li class="nav-item">
        //                     <Link className={`nav-link ${location.pathname==="/vehiclelist"? "active": ""}`} to="/vehiclelist">Vehicle</Link>
        //                     {/* <a class="nav-link active" href='#vehicle1' >Vehichle</a> */}
        //                 </li>
        //                 <li class="nav-item">
        //                     <Link className={`nav-link ${location.pathname==="/contact"? "active": ""}`} to="/contact">Contact</Link>
        //                     {/* <a class="nav-link active" href='#contact1' >Contact</a> */}
        //                 </li>
        //             </ul>           
        //             </div>
        //         </div>
        //     </nav>
        // </div>
        <div>
        <div class="sidenav">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/forms">Forms</a>
            <a href="/best">Best</a>
            <a href="/makelist">Make</a>
            <a href="/vehiclelist">Vehichle</a>
            <a href="/contact">Contact</a>

            <a href="/login">Login</a>

        </div>
        <div class="main">
            {/* <h2>Side Navbar Example</h2>
            <p>This is an example of a side navigation bar.</p> */}
        </div>
        </div>
    )
}

export default Navbar