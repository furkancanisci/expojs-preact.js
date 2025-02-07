import { h } from 'preact';

const HomeSection = () => (
    <section id="home" class="bg-gradient-to-r from-purple-500 to-blue-500 py-40 text-white">
        <div class="container mx-auto px-4 text-center">
            <h1 class="text-5xl font-bold mb-4">Welcome to ExpoJS</h1>
            <p class="mb-8">We create immersive and engaging games for all platforms.</p>
            <a class="bg-white text-blue-500 px-6 py-3 rounded-full hover:bg-gray-200" href="#games">Explore Our Games</a>
        </div>
    </section>
);

export default HomeSection;
