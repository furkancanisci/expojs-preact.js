import { h } from 'preact';

const AboutSection = () => (
    <section id="about" class="py-20 bg-white hidden">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/2">
                    <img alt="Team of developers working together in a modern office" class="w-full h-64 object-cover rounded-lg shadow-md" height="400" src="https://storage.googleapis.com/a1aa/image/wTZJw6DjniLqhpUEKCbvp9FMo429w1lNMUmmhQGE3PA.jpg" width="600"/>
                </div>
                <div class="md:w-1/2 md:pl-12 mt-8 md:mt-0">
                    <h2 class="text-3xl font-bold text-gray-800">About Us</h2>
                    <p class="text-gray-600 mt-4">ExpoJS is a leading game development company dedicated to creating immersive and engaging games for all platforms. Our team of talented developers, designers, and artists work together to bring innovative ideas to life.</p>
                    <p class="text-gray-600 mt-4">Founded in 2010, we have released numerous successful titles that have captivated players around the world. Our mission is to push the boundaries of gaming and deliver unforgettable experiences.</p>
                </div>
            </div>
        </div>
    </section>
);

export default AboutSection;
