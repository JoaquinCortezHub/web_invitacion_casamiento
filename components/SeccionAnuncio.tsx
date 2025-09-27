"use client";

import React from "react";
import CountdownTimer from "@/components/CountdownTimer";

const SeccionAnuncio = () => {
	const handleAddToCalendar = () => {
		const eventDetails = {
			title: "Boda de Gimena y Juan",
			dates: "20250320T180000/20250320T230000",
			details: "¡Celebremos juntos este día especial!",
			location: "Lugar de la ceremonia"
		};

		const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventDetails.title)}&dates=${eventDetails.dates}&details=${encodeURIComponent(eventDetails.details)}&location=${encodeURIComponent(eventDetails.location)}`;

		window.open(googleCalendarUrl, '_blank');
	};

	return (
		<div className="relative w-full min-h-screen">
			<div
				className="absolute inset-0 bg-cover bg-center"
				style={{ backgroundImage: "url('/fondo papel.png')" }}
			/>

			<div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
				<div className="bg-celeste-500 text-center p-8 mb-12 shadow-lg px-32 py-12">
					<h3 className="font-cursiva text-[55px] text-white ">¡Nos casamos!</h3>
                    <p className="font-cuerpo text-3xl text-white">
                        Ya dimos el sí, y ahora queremos celebrar este día {<br />}
                        tan especial junto a las personas que más queremos. 
                    </p>
				</div>

				<div className="max-w-6xl w-full">
					{/* Photo Grid */}
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
						{[...Array(8)].map((_, index) => (
							<div
								key={index}
								className="aspect-square bg-gris-500 rounded-lg flex items-center justify-center"
							>
								<span className="text-white font-cuerpo opacity-50">Foto {index + 1}</span>
							</div>
						))}
					</div>

					{/* Countdown Timer */}
					<CountdownTimer
						targetDate="2025-03-20T18:00:00"
						className="mb-8"
					/>

					{/* Google Calendar Button */}
					<div className="text-center">
						<button
							onClick={handleAddToCalendar}
							className="bg-celeste-500 hover:bg-azul-500 text-white font-cuerpo text-lg px-8 py-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
						>
							¡Agenda la fecha!
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SeccionAnuncio;
