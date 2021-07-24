import React from 'react';

import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { FaBeer } from 'react-icons/fa';
import { AiOutlineDashboard } from 'react-icons/ai';
import { FaGrav } from 'react-icons/fa';
function App() {
    return (
      <>
        <Navigation
            
            activeItemId="/management/members"
            onSelect={({itemId}) => {
              
            }}
            items={[
              {
                title: 'Dashboard',
                itemId: '/dashboard',
                
                elemBefore: () => <FaBeer/>,
              },
              {
                title: 'Management',
                itemId: '/management',
                elemBefore: () => <FaGrav/>,
                subNav: [
                  {
                    title: 'Projects',
                    itemId: '/management/projects',
                  },
                  {
                    title: 'Members',
                    itemId: '/management/members',
                  },
                ],
              },
              {
                title: 'Another Item',
                itemId: '/another',
                subNav: [
                  {
                    title: 'Teams',
                    itemId: '/management/teams',
                  },
                ],
              },
            ]}
          />
      </>
    );
}
export default App;