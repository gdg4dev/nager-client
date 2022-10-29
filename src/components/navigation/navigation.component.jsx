import './navigation.css'
import  {FaUser, FaWallet} from 'react-icons/fa'

const Navigation = () => {
    return (<section className="Navigation">
            <div className='logo'>
                NAGER
            </div>
            <div className='searchBar'>
                    <input className='searchInput' placeholder='what are you looking for ?'></input>
                    <button className='searchBtn pointerOnHover'>FIND</button>
            </div>
            <div className='profileDiv'>
                <div className='walletIcon icon pointerOnHover'>
                    <FaWallet style={{background: "none"}}  />
                </div>
                <div className='verticalLine'></div>
                <div className='profileIcon icon pointerOnHover'>
                        <FaUser style={{background: "none"}} />
                </div>
            </div>
    </section>)
}

export default Navigation 