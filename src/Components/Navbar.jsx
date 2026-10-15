
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-10 bg-black ">
      <h1 className="text-2xl font-bold text-white  ">Logo</h1>
      <ul className="flex gap-8 text-white   ">
        <li><a href="home">Home</a></li>
        <li><a href="about">About</a></li>
        <li><a href="work">Work</a></li>
        <li><a href="Contact">Contact</a></li>
      </ul>
      <button className="rounded-lg text-white py-2 px-6  bg-gradient-to-l from-pink-300 via-purple-500 to-blue-500">Get Start</button>
    </nav>
  )
}

export default Navbar
