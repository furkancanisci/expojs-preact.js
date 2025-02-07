import { h } from 'preact';

const GameCard = ({ image, title, description }) => (
    <div class="bg-white shadow-md rounded-lg overflow-hidden">
        <img alt={title} class="w-full h-48 object-cover" src={image} />
        <div class="p-4">
            <h3 class="text-xl font-bold text-gray-800">{title}</h3>
            <p class="text-gray-600 mt-2">{description}</p>
        </div>
    </div>
);

const GamesSection = () => (
    <section id="games" class="py-20 bg-gray-100 hidden">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-gray-800 text-center mb-12">Our Games</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <img alt="Screenshot of Game 1 showing an action-packed scene with vibrant colors" class="w-full h-48 object-cover" height="400" src="https://storage.googleapis.com/a1aa/image/M5L81zjQNBanES1qqwP3yF8XfXmDQlR-81TragrxFc4.jpg" width="600"/>
                    <div class="p-4">
                        <h3 class="text-xl font-bold text-gray-800">Coming Soon</h3>
                        <p class="text-gray-600 mt-2">An exciting adventure game that takes you on a journey through mystical lands.</p>
                    </div>
                </div>
                <div class="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <img alt="Screenshot of Game 2 showing a strategic battle scene with detailed characters" class="w-full h-48 object-cover" height="400" src="https://storage.googleapis.com/a1aa/image/Szul9lT5-koJiNLT1qfwavz2s3iSHsIGbQ5vI9-9smg.jpg" width="600"/>
                    <div class="p-4">
                        <h3 class="text-xl font-bold text-gray-800">Coming Soon</h3>
                        <p class="text-gray-600 mt-2">A strategic game that challenges your tactical skills in epic battles.</p>
                    </div>
                </div>
                <div class="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <img alt="Screenshot of Game 3 showing a peaceful village with beautiful scenery" class="w-full h-48 object-cover" height="400" src="https://storage.googleapis.com/a1aa/image/cAtWqaylXi49f403arfxozoDQLeYDCo-P_agrEkVRIY.jpg" width="600"/>
                    <div class="p-4">
                        <h3 class="text-xl font-bold text-gray-800">Coming Soon</h3>
                        <p class="text-gray-600 mt-2">A simulation game where you build and manage your own village.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default GamesSection;
