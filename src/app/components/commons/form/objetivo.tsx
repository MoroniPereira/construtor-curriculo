export function Objetivo({dataObjetivo, toogleDados}: {
  dataObjetivo: {
    objetivoProfissional: string,
  }, 
  toogleDados: any
}) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md sm:p-6">
      <h2 className="text-xl font-bold mb-4">Objetivo Profissional</h2>
      <textarea
        name="objetivoProfissional"
        placeholder="Busco uma oportunidade onde possa aplicar meus conhecimentos em desenvolvimento de software e aprender novas tecnologias."
        value={dataObjetivo.objetivoProfissional}
        onChange={(e) => {toogleDados(e.target.value)}}
        className="p-2 border rounded w-full h-24"
      />
    </div>
  )
}
