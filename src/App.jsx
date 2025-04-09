import React from 'react';
import Sidebar from './sections/Sidebar';
import Main from './sections/Main';

const App = () => {
  return (
    <main className='w-full bg-slate-200 h-screen flex'>
      <Sidebar />
      <div className="flex-1 h-full overflow-hidden">
        <Main />
      </div>
    </main>
  );
};

export default App;
