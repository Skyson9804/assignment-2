const Navbar =()=> {

  return (
      <>
    <div className="h-12 bg-[#3ec29c81] shadow-black shadow-2xl w-screen flex justify-between items-center px-34">
        <div className="flex items-center">
            <img className="h-10 w-auto rounded-b-full" src="https://www.adobe.com/creativecloud/design/discover/media_1c66507b68db7c7927c0f978345701fe0b2200583.png?width=750&format=png&optimize=medium" alt="" />
        </div>
        <div>
                <ul className="flex gap-12 ">
                        <li className="hover:text-amber-300">Home</li>
                        <li  className="hover:text-amber-300">About</li>
                        <li  className="hover:text-amber-300">Contact</li>
                        <li  className="hover:text-amber-300">Suport</li>
                </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar
