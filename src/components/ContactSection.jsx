import { h } from 'preact';

const ContactSection = () => (
    <section id="contact" class="py-20 bg-gray-100 hidden">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-gray-800 text-center mb-12">Contact Us</h2>
            <div class="max-w-lg mx-auto bg-white shadow-md rounded-lg p-8">
                <form action="#">
                    <div class="mb-4">
                        <label class="block text-gray-700" for="name">Name</label>
                        <input class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" id="name" type="text" />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700" for="email">Email</label>
                        <input class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" id="email" type="email" />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700" for="message">Message</label>
                        <textarea class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" id="message" rows="4"></textarea>
                    </div>
                    <button class="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600" type="submit">Send Message</button>
                </form>
            </div>
        </div>
    </section>
);

export default ContactSection;
