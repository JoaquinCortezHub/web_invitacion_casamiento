import React from "react";

const navLinks = [
	{ name: "HOME", href: "#" },
	{ name: "NUESTRA HISTORIA", href: "#" },
	{ name: "CONFIRMÁ TU ASISTENCIA", href: "#" },
	{ name: "¡DEJÁ TU SELLO!", href: "#" },
];

const Header = () => {
	return (
		<header className="fixed top-0 left-0 w-full z-50">
			{/* Navbar */}
			<nav className="flex justify-center space-x-8 pt-20 md:space-x-12 py-6 px-4">
				{navLinks.map((link) => (
					<a
						key={link.name}
						href={link.href}
						className="text-azul-500 tracking-widest font-light text-xs md:text-sm hover:text-white font-cuerpo transition-colors duration-200"
					>
						{link.name}
					</a>
				))}
			</nav>
		</header>
	);
};

export default Header;

