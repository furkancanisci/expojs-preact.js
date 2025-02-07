import { h } from 'preact';

const Navbar = () => (
    <nav class="bg-gradient-to-r from-blue-800 to-purple-800 shadow-md">

        <div class="container mx-auto px-4 py-2 flex justify-between items-center">
            <a class="text-2xl font-bold text-white" href="#home">ExpoJS</a>            
            <ul class="flex space-x-4">
                <li>
                    <a class="text-white hover:text-gray-300" href="#home">Home</a>
                </li>
                <li>
                    <a class="text-white hover:text-gray-300" href="#games">Games</a>
                </li>
                <li>
                    <a class="text-white hover:text-gray-300" href="#about">About</a>
                </li>
                <li>
                    <a class="text-white hover:text-gray-300" href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
);

export default Navbar;
