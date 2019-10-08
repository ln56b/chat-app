import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
    <Contact 
    image = "https://randomuser.me/api/portraits/men/72.jpg"
    name = "George King"
    online 
    />
   <Contact
   image = "https://randomuser.me/api/portraits/women/16.jpg"
   name = "Marcia Young"
   offline
   />
   <Contact
   image = "https://randomuser.me/api/portraits/women/44.jpg"
   name = "Ellen Nelson"
   />
      
    </div>
  );
}

export default App;
