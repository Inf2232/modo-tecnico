import { useState, type FormEvent } from "react";

interface Props {
  whatsappNumber: string | null;
  services: string[];
}

type Campos = {
  nombre: string;
  equipo: string;
  modelo: string;
  problema: string;
  desde: string;
  telefono: string;
  servicio: string;
};

const vacio: Campos = {
  nombre: "",
  equipo: "",
  modelo: "",
  problema: "",
  desde: "",
  telefono: "",
  servicio: "No estoy seguro",
};

const equipos = ["PC de escritorio", "Notebook", "Otro"];

// Colapsa saltos de línea y espacios repetidos, y recorta.
const limpiar = (valor: string) => valor.replace(/\s+/g, " ").trim();

function validar(c: Campos): Partial<Record<keyof Campos, string>> {
  const errores: Partial<Record<keyof Campos, string>> = {};
  if (!c.nombre) errores.nombre = "Escribe tu nombre.";
  else if (c.nombre.length > 60) errores.nombre = "Máximo 60 caracteres.";
  if (!c.equipo) errores.equipo = "Elige el tipo de equipo.";
  if (c.modelo.length > 80) errores.modelo = "Máximo 80 caracteres.";
  if (c.problema.length < 10) errores.problema = "Cuéntanos un poco más (mínimo 10 caracteres).";
  else if (c.problema.length > 500) errores.problema = "Máximo 500 caracteres.";
  if (c.desde.length > 80) errores.desde = "Máximo 80 caracteres.";
  if (!/^\+?[\d\s-]{7,20}$/.test(c.telefono)) errores.telefono = "Escribe un teléfono válido.";
  return errores;
}

function armarMensaje(c: Campos): string {
  return [
    "Hola, quiero solicitar un diagnóstico.",
    "",
    `Nombre: ${c.nombre}`,
    `Equipo: ${c.equipo}`,
    `Modelo: ${c.modelo || "No indicado"}`,
    `Problema: ${c.problema}`,
    `Desde cuándo: ${c.desde || "No indicado"}`,
    `Teléfono: ${c.telefono}`,
    `Servicio solicitado: ${c.servicio}`,
  ].join("\n");
}

const estiloCampo =
  "mt-1 w-full rounded-lg border border-borde bg-superficie px-3 py-2 text-texto placeholder:text-texto-suave focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acento aria-[invalid=true]:border-red-400";

export default function ContactForm({ whatsappNumber, services }: Props) {
  const [campos, setCampos] = useState<Campos>(vacio);
  const [errores, setErrores] = useState<Partial<Record<keyof Campos, string>>>({});
  const [mensajeSinNumero, setMensajeSinNumero] = useState<string | null>(null);

  function cambiar(campo: keyof Campos, valor: string) {
    setCampos((anterior) => ({ ...anterior, [campo]: valor }));
  }

  function enviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const limpios = Object.fromEntries(
      Object.entries(campos).map(([k, v]) => [k, limpiar(v)]),
    ) as Campos;

    const nuevosErrores = validar(limpios);
    setErrores(nuevosErrores);
    if (Object.keys(nuevosErrores).length > 0) return;

    const mensaje = armarMensaje(limpios);

    if (whatsappNumber) {
      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensaje)}`;
      window.open(url, "_blank", "noopener,noreferrer");
      setMensajeSinNumero(null);
    } else {
      setMensajeSinNumero(mensaje);
    }
  }

  return (
    <form onSubmit={enviar} noValidate className="space-y-5">
      <div>
        <label htmlFor="nombre" className="font-semibold">Nombre</label>
        <input
          id="nombre"
          type="text"
          autoComplete="name"
          value={campos.nombre}
          onChange={(e) => cambiar("nombre", e.target.value)}
          aria-invalid={!!errores.nombre}
          aria-describedby={errores.nombre ? "error-nombre" : undefined}
          className={estiloCampo}
        />
        {errores.nombre && <p id="error-nombre" role="alert" className="mt-1 text-sm text-red-400">{errores.nombre}</p>}
      </div>

      <div>
        <label htmlFor="equipo" className="font-semibold">Tipo de equipo</label>
        <select
          id="equipo"
          value={campos.equipo}
          onChange={(e) => cambiar("equipo", e.target.value)}
          aria-invalid={!!errores.equipo}
          aria-describedby={errores.equipo ? "error-equipo" : undefined}
          className={estiloCampo}
        >
          <option value="">Selecciona una opción</option>
          {equipos.map((e) => <option key={e} value={e}>{e}</option>)}
        </select>
        {errores.equipo && <p id="error-equipo" role="alert" className="mt-1 text-sm text-red-400">{errores.equipo}</p>}
      </div>

      <div>
        <label htmlFor="modelo" className="font-semibold">Marca y modelo <span className="font-normal text-texto-suave">(opcional)</span></label>
        <input
          id="modelo"
          type="text"
          value={campos.modelo}
          onChange={(e) => cambiar("modelo", e.target.value)}
          aria-invalid={!!errores.modelo}
          aria-describedby={errores.modelo ? "error-modelo" : undefined}
          className={estiloCampo}
        />
        {errores.modelo && <p id="error-modelo" role="alert" className="mt-1 text-sm text-red-400">{errores.modelo}</p>}
      </div>

      <div>
        <label htmlFor="problema" className="font-semibold">¿Qué problema tiene?</label>
        <textarea
          id="problema"
          rows={4}
          value={campos.problema}
          onChange={(e) => cambiar("problema", e.target.value)}
          aria-invalid={!!errores.problema}
          aria-describedby={errores.problema ? "error-problema" : undefined}
          className={estiloCampo}
        />
        {errores.problema && <p id="error-problema" role="alert" className="mt-1 text-sm text-red-400">{errores.problema}</p>}
      </div>

      <div>
        <label htmlFor="desde" className="font-semibold">¿Desde cuándo ocurre? <span className="font-normal text-texto-suave">(opcional)</span></label>
        <input
          id="desde"
          type="text"
          value={campos.desde}
          onChange={(e) => cambiar("desde", e.target.value)}
          aria-invalid={!!errores.desde}
          aria-describedby={errores.desde ? "error-desde" : undefined}
          className={estiloCampo}
        />
        {errores.desde && <p id="error-desde" role="alert" className="mt-1 text-sm text-red-400">{errores.desde}</p>}
      </div>

      <div>
        <label htmlFor="telefono" className="font-semibold">Teléfono o WhatsApp</label>
        <input
          id="telefono"
          type="tel"
          autoComplete="tel"
          value={campos.telefono}
          onChange={(e) => cambiar("telefono", e.target.value)}
          aria-invalid={!!errores.telefono}
          aria-describedby={errores.telefono ? "error-telefono" : undefined}
          className={estiloCampo}
        />
        {errores.telefono && <p id="error-telefono" role="alert" className="mt-1 text-sm text-red-400">{errores.telefono}</p>}
      </div>

      <div>
        <label htmlFor="servicio" className="font-semibold">Servicio solicitado</label>
        <select
          id="servicio"
          value={campos.servicio}
          onChange={(e) => cambiar("servicio", e.target.value)}
          className={estiloCampo}
        >
          <option value="No estoy seguro">No estoy seguro</option>
          {services.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <button
        type="submit"
        className="rounded-lg bg-primario px-6 py-3 font-semibold text-white transition-colors hover:bg-acento hover:text-fondo focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acento"
      >
        Enviar por WhatsApp
      </button>

      {mensajeSinNumero && (
        <div role="status" className="rounded-lg border border-borde bg-superficie p-4 text-sm">
          <p className="font-semibold">
            El envío por WhatsApp aún no está configurado. Este es el mensaje que se enviaría:
          </p>
          <pre className="mt-2 whitespace-pre-wrap text-texto-suave">{mensajeSinNumero}</pre>
        </div>
      )}
    </form>
  );
}