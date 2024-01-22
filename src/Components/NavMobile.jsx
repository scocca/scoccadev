import { RiMenu4Line } from "react-icons/ri";
import { IconContext } from "react-icons";
function NavMobile (){

    return(
        <div className='nav-mobile'>
        <div className='navbar-right-mobile'>
          <ul className='right-list-mobile'>
            <li className='list-name-mobile'><a href="/">Santiago Cocca</a></li>
          </ul>
        </div>
        <div className='nav-mobile-left'>
            <IconContext.Provider value={{ className: "icon-icons", size: 30 }}>
                <RiMenu4Line/>
            </IconContext.Provider>
        </div>
        
      </div>
    )
}

export {NavMobile}