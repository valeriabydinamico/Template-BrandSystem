import type { RequiredField } from '../lib/completeness'

/* ────────────────────────────────────────────────────────────────────────────
 * Datos — Grid Application (Figma · 02 Grid Application, nodo 2162:33595).
 *
 * Una fila por formato de referencia (canal + formato). Los wireframes de
 * `GridApplicationPage` se derivan de estas mismas filas (no son datos
 * aparte) para no duplicar canal/medida/grid entre dos listas.
 * ────────────────────────────────────────────────────────────────────────── */

export interface FormatRow {
  channel?: string
  format?: string
  size?: string
  cols?: number
  margin?: number
  gutter?: number
  safe?: string
  token?: string
  goal?: string
}

export const FORMAT_ROW_FIELDS: RequiredField<FormatRow>[] = [
  { key: 'channel', label: 'Canal' },
  { key: 'format', label: 'Formato' },
  { key: 'size', label: 'Medida' },
  { key: 'cols', label: 'Columnas' },
  { key: 'margin', label: 'Margin' },
  { key: 'gutter', label: 'Gutter' },
  { key: 'safe', label: 'Safe Zone' },
  { key: 'token', label: 'Dónde encontrarlo' },
  { key: 'goal', label: 'Objetivo' },
]

export const FORMATS: FormatRow[] = [
  { channel: 'WEB', format: 'Desktop', size: '1440×1024', cols: 12, margin: 80, gutter: 24, safe: 'H:80 / V:80', token: 'Layout Grid / Reference / Web / Desktop', goal: 'Sitio web · layouts amplios' },
  { channel: 'WEB', format: 'Tablet', size: '768×1024', cols: 8, margin: 32, gutter: 24, safe: 'H:32 / V:32', token: 'Layout Grid / Reference / Web / Tablet', goal: 'Web responsive · tablet' },
  { channel: 'WEB', format: 'Mobile', size: '390×844', cols: 4, margin: 16, gutter: 16, safe: 'H:16 / V:16', token: 'Layout Grid / Reference / Web / Mobile', goal: 'Web responsive · mobile' },
  { channel: 'SOCIAL', format: 'Feed Portrait', size: '1080×1350', cols: 6, margin: 64, gutter: 24, safe: 'H:64 / V:64', token: 'Layout Grid / Reference / Social / Feed Portrait', goal: 'Publicación vertical de feed' },
  { channel: 'SOCIAL', format: 'Square', size: '1080×1080', cols: 6, margin: 64, gutter: 24, safe: 'H:64 / V:64', token: 'Layout Grid / Reference / Social / Square', goal: 'Publicación cuadrada' },
  { channel: 'SOCIAL', format: 'Story', size: '1080×1920', cols: 6, margin: 64, gutter: 24, safe: 'H:64 / V:104', token: 'Layout Grid / Reference / Social / Story', goal: 'Story vertical full-screen' },
  { channel: 'SOCIAL', format: 'Reels + TikTok', size: '1080×1920', cols: 6, margin: 64, gutter: 24, safe: 'H:64 / V:104', token: 'Layout Grid / Reference / Social / Reels + TikTok', goal: 'Video corto vertical' },
  { channel: 'SOCIAL', format: 'LinkedIn Landscape', size: '1200×627', cols: 12, margin: 64, gutter: 24, safe: 'H:64 / V:64', token: 'Layout Grid / Reference / Social / LinkedIn Landscape', goal: 'Publicación horizontal profesional' },
  { channel: 'VIDEO', format: 'YouTube Thumbnail', size: '1280×720', cols: 12, margin: 64, gutter: 24, safe: 'H:64 / V:64', token: 'Layout Grid / Reference / Video / YouTube Thumbnail', goal: 'Thumbnail / portada 16:9' },
  { channel: 'EMAIL', format: 'Desktop', size: '600×variable', cols: 4, margin: 24, gutter: 16, safe: 'H:24 / V:24', token: 'Layout Grid / Reference / Email / Desktop', goal: 'Contenido de email base' },
  { channel: 'DISPLAY', format: 'Landscape', size: '1920×1080', cols: 12, margin: 96, gutter: 24, safe: 'H:96 / V:96', token: 'Layout Grid / Reference / Display / Landscape', goal: 'Pantalla / display 16:9' },
  { channel: 'DISPLAY', format: 'Portrait', size: '1080×1920', cols: 6, margin: 80, gutter: 24, safe: 'H:80 / V:96', token: 'Layout Grid / Reference / Display / Portrait', goal: 'Pantalla / display vertical' },
]

/** Formatos elegidos como referencia de wireframe (subset representativo,
 *  no todos los canales necesitan wireframe). Se resuelven contra `FORMATS`
 *  ya filtrado por completitud — si el formato referenciado está oculto, el
 *  wireframe correspondiente también lo está (consecuencia natural). */
export const WIREFRAME_REFS: { channel: string; format: string }[] = [
  { channel: 'WEB', format: 'Desktop' },
  { channel: 'SOCIAL', format: 'Feed Portrait' },
  { channel: 'VIDEO', format: 'YouTube Thumbnail' },
  { channel: 'DISPLAY', format: 'Portrait' },
]
