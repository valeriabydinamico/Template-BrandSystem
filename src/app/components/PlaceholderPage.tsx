import { PageHeader } from './PageHeader'

/**
 * PlaceholderPage — página genérica para módulos del catálogo que todavía no
 * tienen contenido real (ver `BRAND-SYSTEM-ARQUITECTURA.md` y
 * `src/app/lib/moduleConfig.ts`). Se togglea desde Ajustes como cualquier
 * otro módulo; cuando llegue su contenido definitivo, se reemplaza por una
 * página propia (mismo patrón que Brand Colors, Visual Styles, etc.).
 */
export function PlaceholderPage({ module, title }: { module: string; title: string }) {
  return (
    <div className="flex w-full flex-col items-start bg-white">
      <PageHeader module={module} title={title} paragraphs={['[agregar descripción]']} />
    </div>
  )
}
