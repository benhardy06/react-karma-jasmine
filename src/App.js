import React from 'react';
import MenuBar from './components/menuBar';
import SideNavBar from './components/sideNavBar'
function App() {
  return (
    <div className="App">
      <MenuBar />
      <SideNavBar links={['Link 1','Link 2','Link 3','Link 4','Link 5']} />
    </div>
  );
}

export default App;
