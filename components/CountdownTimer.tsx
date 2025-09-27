"use client";

import React, { useState, useEffect } from "react";

interface TimeLeft {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

interface CountdownTimerProps {
	targetDate: string;
	className?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, className = "" }) => {
	const [timeLeft, setTimeLeft] = useState<TimeLeft>({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	});

	useEffect(() => {
		const weddingDate = new Date(targetDate).getTime();

		const timer = setInterval(() => {
			const now = new Date().getTime();
			const difference = weddingDate - now;

			if (difference > 0) {
				setTimeLeft({
					days: Math.floor(difference / (1000 * 60 * 60 * 24)),
					hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
					minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
					seconds: Math.floor((difference % (1000 * 60)) / 1000)
				});
			} else {
				setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
			}
		}, 1000);

		return () => clearInterval(timer);
	}, [targetDate]);

	return (
		<div className={`bg-white/90 rounded-lg p-8 shadow-lg ${className}`}>
			<h4 className="font-cursiva text-3xl text-azul-500 text-center mb-6">
				Tiempo restante
			</h4>
			<div className="flex justify-center space-x-8">
				<div className="text-center">
					<div className="text-4xl font-bold text-azul-500 font-cuerpo">
						{timeLeft.days}
					</div>
					<div className="text-sm text-gray-600 font-cuerpo">Días</div>
				</div>
				<div className="text-center">
					<div className="text-4xl font-bold text-azul-500 font-cuerpo">
						{timeLeft.hours}
					</div>
					<div className="text-sm text-gray-600 font-cuerpo">Horas</div>
				</div>
				<div className="text-center">
					<div className="text-4xl font-bold text-azul-500 font-cuerpo">
						{timeLeft.minutes}
					</div>
					<div className="text-sm text-gray-600 font-cuerpo">Minutos</div>
				</div>
				<div className="text-center">
					<div className="text-4xl font-bold text-azul-500 font-cuerpo">
						{timeLeft.seconds}
					</div>
					<div className="text-sm text-gray-600 font-cuerpo">Segundos</div>
				</div>
			</div>
		</div>
	);
};

export default CountdownTimer;