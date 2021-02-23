import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {

    return (
        <div>
            <ul>
                <li>
                    <Link to='/' className='nav-links'>
                        Pending
                    </Link>
                </li>
                <li>
                    <Link to='new' className='nav-links'>
                        Confrimed
                    </Link>
                </li>
                <li>
                    <Link to='completed' className='nav-links'>
                        Completed
                    </Link>
                </li>
                <li>
                    <Link to='cancelled' className='nav-links'>
                        Cancelled
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar
