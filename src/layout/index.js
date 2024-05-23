import React from 'react';

const AuthLayouts = ({children}) => {
  return (
    <>
        <header className='flex justify-center items-center py-3 h-20 shadow-md bg-gray-800'>
            <div className='flex items-center'>
                <img 
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt='logo'
                  width={80}
                  height={60}
                />
                <span className='ml-3 text-3xl font-semibold text-white '>TalkBox</span>
            </div>
        </header>

        {children}
    </>
  );
}

export default AuthLayouts;


