export const Contact = () => {
    return(
        <>
        <div className="bg-gradient-to-r from-blue-800 via-blue-500 to-blue-200 p-4 flex space-x-4">
            <h1 className="text-sm text-gray-100 ">Contactame en</h1>
            <ul className="text-sm text-gray-100 ">
              <li className='relative pl-5 before:content-["•"] before:absolute before:left-0'>juan.gomez49@eia.edu.co</li>    
              <li className='relative pl-5 before:content-["•"] before:absolute before:left-0'> 3148324667</li>
              <a className="text-sm text-gray-400 relative pl-5 before:content-['•'] before:absolute before:left-0" href="https://github.com/Masiori" target="_blank" rel="noopener noreferrer ">Github</a>
            </ul>


        </div>
        </>
    )
}