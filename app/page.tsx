
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="font-cursiva text-3xl">Este texto usa Homemade Apple</h1>
      <h2 className="font-cuerpo text-2xl mb-6">Este texto usa Lora</h2>
      <div className="flex items-center justify-between gap-4">
        <div className="h-24 w-24 bg-celeste-500"></div>
        <div className="h-24 w-24 bg-beige-500"></div>
        <div className="h-24 w-24 bg-azul-500"></div>
        <div className="h-24 w-24 bg-gris-500"></div>
      </div>
    </div>
  );
}
