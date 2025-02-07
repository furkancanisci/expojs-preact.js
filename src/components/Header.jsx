import { useLocation } from 'preact-iso';

export function Header() {
	const { url } = useLocation();

	return (

			<nav class="bg-white shadow-md">
				<div class="container mx-auto px-4 py-2 flex justify-between items-center">
					<a class="text-2xl font-bold text-gray-800" href="#">
						ExpoJS
					</a>
					<ul class="flex space-x-4">
						<li>
							<a href="/" class={url == '/' && 'active'}>Home</a>
						</li>
						<li>
							<a href="#games">Games</a>
						</li>
						<li>
							<a href="#about">About</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</div>
			</nav>
		
	);
}
