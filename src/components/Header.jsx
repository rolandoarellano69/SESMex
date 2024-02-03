
import { useState } from 'react'
function Header() {
  const navegation = [
    { title: 'Servicios', id: '#servicios' },
    { title: 'Ubicación', id: '#ubicacion' },
    { title: 'Contacto', id: '#contacto' },
  ]
  
  const [isMenu, setIsMenu] = useState(false);
  const handleLinkClick = () => {
    setIsMenu(false)
  }
  return (
    <nav id="header-nav" className='bg-transparent w-full py-2 md:border-0 fixed top-0 z-50'>
      <div className='items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8'>
        <div className="flex items-center  justify-between py-3 md:py-5 md:block">
          <a href="/" className="text-2xl font-bold text-blue-900/80">SES México</a>
          <div className='md:hidden flex justify-between items-center '>
            <button className="text-gray-100 outline-none p-2 rounded-md focus:border-gray-400 focus:border top-3 left-3"
              onClick={() => setIsMenu(!isMenu)}
            >
              {
                isMenu ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                  </svg>
                )
              }
            </button>
          </div>
        </div>
        <div className={` flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${isMenu ? 'block' : 'hidden'}`} >
          <ul className="justify-end items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {
              navegation.map((item, idx) => {
                return (
                  <li key={idx} className="text-gray-100 hover:text-blue-300  transition-colors">
                    <a href={item.id} onClick={handleLinkClick}>
                      {item.title}
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Header