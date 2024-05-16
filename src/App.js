import React, { useState } from 'react';
import Title from './title';

import './App.css';
import Header from './header'; 
import List from './list';
import { taskContext } from './taskContext';
function App() {

  const [taskItems , setTaskItems] = useState ([
  ])
  return ( 
    
    <div className="App bg-main w-[100%]  m-2 h-[100vh] flex-col flex justify-center items-center font-yekan-bold">
      <taskContext.Provider value={{
        taskItems , 
        setTaskItems
      }}> 
      <Title/>
      <Header/>
      <List/>
      </taskContext.Provider>
    </div>
    
  );
}

export default App;
