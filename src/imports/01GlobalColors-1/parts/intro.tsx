import { PageHeader } from "@/app/components/PageHeader";

/**
 * Encabezado de "01 Global Colors".
 *
 * Antes era código generado por Figma Make; ahora delega en el componente
 * compartido <PageHeader> (misma estructura y medidas que "02 Brand Colors").
 */
export function Intro() {
  return (
    <PageHeader
      module="Color System"
      title="01 Global Colors"
      paragraphs={[
        "Escalas primitivas de color que forman la base del sistema.",
        "Funcionan como fuente para construir los roles de Brand Colors y Semantic Colors sin asignar todavía una intención de uso específica.",
        null,
        "HEX es la fuente de verdad; RGB y HSL se mantienen como referencia técnica para implementación.",
      ]}
    />
  );
}
