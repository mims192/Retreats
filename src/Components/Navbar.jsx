import React from 'react';
import { Link } from 'react-router-dom';
import SuprSendInbox from '@suprsend/react-inbox';
import 'react-toastify/dist/ReactToastify.css';
import './Style.css';




function Navbar({ onSearch }) {
  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="navbar navigation">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">Wellness Retreats</Link>
      </div>

      <SuprSendInbox
      
        themeType="light"
        workspaceKey="ueAwrsnptDPMadtZiYWJ"
        subscriberId="-ye8TtljpDOrIgq-YO7SDo7V29OV6VdbkyQk-K6C0Lk"
        distinctId="456"
        popperPosition= "bottom"
        toastProps={{
          position: 'top-left',
          
        }} 
        theme={{
          
          notification: {actions: [{ container: { backgroundColor: '#402E7A'  } },
            { container: { backgroundColor: '#CAF4FF',
              hoverBackgroundColor: 'skyblue'
             } },
          ],
          actionsMenu: { backgroundColor: 'aliceblue' } ,
          actionsMenu: { borderColor: '#E1F7F5' },                         
          pinnedText: { color: 'green' },
          toast: {
            container: { backgroundColor: 'green' },
            headerText: { color: 'white' },
            bodyText: { color: 'white',
              
             }
          
          },
            container: { readBackgroundColor: 'white',
              hoverBackgroundColor: '#A7E6FF',
              
             },
             
             subtext: { color: '#4C3BCF' },
            headerText: { color: 'blue' },
            bodyText: { color: 'black' },
            unseenDot: { backgroundColor: 'green' }

            
          },
          header: { 
            container: { backgroundColor: 'aliceblue',
                         
                         
             }, 
            headertext: {color: 'black'},
            markAllReadText: {color: 'darkblue'}
          },
          bell: {
            color: '#4793AF',
            
            
            
          },
          badge: { backgroundColor: 'skyblue'},
          
          
        }}
       
      />

      <div className="form-control mr-3">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
          onChange={handleSearch}
        />
      </div>

      <button className="btn bg-blue-400 hover:bg-green-300">Book Now</button>
      
    </div>
  );
}

export default Navbar;





