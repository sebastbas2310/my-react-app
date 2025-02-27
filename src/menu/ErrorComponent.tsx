export const ErrorComponent = () => {
    return (
      <>
         <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-purple-600">Error 404</h1>
        <p className="mt-4 text-xl text-purple-400">Página no encontrada</p>
        <a href="/" className="mt-6 inline-block px-6 py-3 bg-purple-700 text-white rounded-lg shadow-lg hover:bg-purple-500 transition">
          Volver al inicio
        </a>
      </div>
    </div>
      </>
    )
  }