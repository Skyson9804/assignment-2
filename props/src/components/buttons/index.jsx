
const Buttons = ({title="Submit", className, type, onClick}) => {
        // props driling on buttons 

  return (
   <button className={`w-full bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-lg shadow-lg transition transform hover:scale-105 ${className}`} type={type} onClick={onClick}>
        {title}
   </button>
  )
}

export default Buttons