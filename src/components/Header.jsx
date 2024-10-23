import logo from '../assest-img/Frame.jpg'
const Header = () => {
    return (
    <div className='w-11/12 mx-auto'>
        <div className="navbar bg-base-100 flex flex-col md:flex-row justify-between items-center">
        <div className="navbar-start w-auto">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                />
                </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] shadow"
            >
                <li>
                <a>Home</a>
                </li>
                <li>
                <a>Recipes</a>
                </li>
                <li>
                <a>About</a>
                </li>
                <li>
                <a>Search</a>
                </li>
            </ul>
            </div>
            <a className="btn btn-ghost text-xl mx-auto">Recipe Calories</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            <li>
                <a>Home</a>
            </li>
            <li>
                <a>Recipes</a>
            </li>
            <li>
                <a>About</a>
            </li>
            <li>
                <a>Search</a>
            </li>
            </ul>
        </div>
        <div className="navbar-end flex flex-col md:flex-row w-auto">
            <input className='bg-gray-200 rounded-2xl px-3 py-1' placeholder='Search' type="text" name="" id="" />
            <button><img src={logo} alt="" /></button>
        </div>
        </div>
    </div>
    );
};

export default Header;
