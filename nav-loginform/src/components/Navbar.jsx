const Navbar =()=> {

  return (
      <>
    <div className="h-12 bg-green-400 w-screen flex justify-between items-center px-34">
        <div>Logo</div>
        <div>
                <ul className="flex gap-12">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Suport</li>
                </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar
