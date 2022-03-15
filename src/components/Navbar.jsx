function Navbar({ src, alt }) {
  return (
    <nav className="py-3 bg-white shadow-md dark:bg-gray-800 ">
      <div className="container px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center ">
            <a className="" href="/">
              <img
                className="flex justify-center max-w-xs w-28"
                src={src}
                alt={alt}
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
