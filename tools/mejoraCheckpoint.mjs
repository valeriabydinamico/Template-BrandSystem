#!/usr/bin/env node
// Registra la "foto" de una mejora para que el botón "Revertir cambio" pueda
// deshacer solo ese cambio, aunque no esté commiteado.
//
//   node tools/mejoraCheckpoint.mjs <id>        → registra la mejora <id>
//   node tools/mejoraCheckpoint.mjs --baseline  → marca el estado actual como punto de partida
//
// Se corre justo después de agregar la entrada a Informe → Mejoras (ver
// "Anotar en el Informe" en CLAUDE.md). Solo escribe refs locales
// `refs/mejoras/*`; no toca archivos ni historial.

import { registerCheckpoint, setBaseline } from './mejoraSnapshots.mjs'

const root = process.cwd()
const arg = process.argv[2]

try {
  if (arg === '--baseline') {
    const { commit } = await setBaseline(root)
    console.log(`Punto de partida guardado (${commit.slice(0, 7)}).`)
  } else if (arg && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(arg)) {
    const { files } = await registerCheckpoint(root, arg)
    console.log(`Mejora "${arg}" registrada: ${files.length} archivo(s).`)
    for (const f of files.slice(0, 20)) console.log(`  - ${f}`)
    if (files.length > 20) console.log(`  … y ${files.length - 20} más`)
  } else {
    console.error('Uso: node tools/mejoraCheckpoint.mjs <id-de-la-mejora> | --baseline')
    process.exit(1)
  }
} catch (e) {
  console.error(`No se pudo registrar: ${e.message.split('\n')[0]}`)
  process.exit(1)
}
