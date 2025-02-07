import { h } from 'preact';

const Footer = () => (
    <footer class="bg-white py-6">
        <div class="container mx-auto px-4 text-center">
            <p class="text-gray-600">© 2025 ExpoJS. All rights reserved.</p>
            <div class="flex justify-center space-x-4 mt-4">
                <a class="text-gray-600 hover:text-gray-800" href="#"><i class="fab fa-facebook-f"></i></a>
                <a class="text-gray-600 hover:text-gray-800" href="#"><i class="fab fa-twitter"></i></a>
                <a class="text-gray-600 hover:text-gray-800" href="https://www.instagram.com/expojs/"><i class="fab fa-instagram"></i></a>
                <a class="text-gray-600 hover:text-gray-800" href="#"><i class="fab fa-linkedin-in"></i></a>
            </div>
        </div>
    </footer>
);

export default Footer;
