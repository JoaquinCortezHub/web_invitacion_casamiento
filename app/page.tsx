import LoadingScreen from "@/components/LoadingScreen";
import ItinerarioSeccion from "@/components/ItinerarioSeccion";
import SeccionAnuncio from "@/components/SeccionAnuncio";

export default function Home() {
	return (
		<>
			<div className="relative min-h-screen w-full">
				<div className="relative h-screen w-full">
					<div
						className="absolute inset-0 bg-cover bg-center"
						style={{ backgroundImage: "url('/Fondo.png')" }} //Imagen de fondo
					/>
					<div
						className="absolute inset-0 opacity-25"
						style={{ backgroundColor: "black" }}
					/>
					{/* Content - with top padding to account for fixed header */}
					<div className="relative z-10 flex flex-col items-center justify-center h-full pt-20">
						{/* Your page content goes here */}
						<div className=" -mt-54"></div>
						<h2 className="text-2xl font-cuerpo text-white tracking-widest">
							SELLAMOS EL INICIO DE NUESTRA VIDA
						</h2>
						<h1 className="text-8xl font-cursiva text-white">gimena y juan</h1>
					</div>
					<SeccionAnuncio />
				<div className="elative h-screen w-full py-10 ">
					<ItinerarioSeccion/>
				</div>
				</div>
			</div>

		</>
	);
}
