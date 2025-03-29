<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Fundamentos de la Gerencia Financiera'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-4.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-2
          figure
            img(src='@/assets/curso/tema1/1.png', alt='')
        .col-lg.order-1.mb-3.mb-lg-0
          .p-4
            p.mb-0(data-aos="fade-up") La gerencia financiera es una disciplina clave en la administración de empresas, encargada de la gestión eficiente de los recursos financieros para maximizar el valor de la organización. Abarca la planificación, organización, dirección y control de las actividades financieras, asegurando una adecuada asignación de recursos y una toma de decisiones informada.

    h5.mb-5 A continuación, se presentan los pilares fundamentales de la gerencia financiera:

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/2.png")
            .col-lg-7
              h5 Planificación financiera
              p Proyección de ingresos y gastos futuros para garantizar solvencia y liquidez, permitiendo anticipar necesidades de financiamiento y optimizar el uso del capital.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/3.png")
            .col-lg-7
              h5 Estructura de capital
              p Combinación de deuda y capital propio para financiar las operaciones de la empresa, minimizando el costo de capital y maximizando el valor para los accionistas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/4.png")
            .col-lg-7
              h5 Gestión del capital de trabajo
              p Administración de activos y pasivos a corto plazo para mantener un flujo de caja saludable y asegurar la continuidad operativa. Incluye la gestión de inventarios, cuentas por cobrar y cuentas por pagar.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/5.png")
            .col-lg-7
              h5 Evaluación de proyectos de inversión
              p Análisis de viabilidad y rentabilidad de inversiones mediante herramientas como el Valor Presente Neto (VPN) y la Tasa Interna de Retorno (TIR) para facilitar decisiones estratégicas.

    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/6.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 En la actualidad, la gerencia financiera también integra criterios de sostenibilidad y responsabilidad social. Las decisiones financieras deben alinearse con prácticas éticas y sostenibles, reconociendo que la creación de valor a largo plazo depende del impacto social y ambiental de la empresa. Este enfoque no solo fortalece la reputación corporativa, sino que también contribuye a la estabilidad económica en un entorno dinámico y competitivo.


    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Concepto y objetivos de la gerencia financiera

    p.mb-4 La gerencia financiera se encarga de la planificación, organización, dirección y control de los recursos financieros de una organización. Su objetivo principal es maximizar el valor de la empresa para sus accionistas, garantizando una gestión eficiente del capital y decisiones financieras acertadas.

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-8.mb-3.mb-lg-0.order-1.order-lg-2
    
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/8.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Maximización de las ganancias
                p.text-center Asegurar el mayor rendimiento posible de las inversiones, manteniendo una rentabilidad sostenible.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/9.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Maximización de la riqueza
                p.text-center Aumentar el valor de la empresa en el mercado, beneficiando el patrimonio de los accionistas.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/10.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Identificación de necesidades financieras
                p.text-center Determinar los requerimientos de capital para operaciones y proyectos, asegurando la disponibilidad de recursos en el momento oportuno.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/11.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Obtención eficiente de recursos
                p.text-center Adquirir financiamiento a través de las fuentes más adecuadas, minimizando costos y riesgos asociados.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/12.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Gestión del capital de trabajo
                p.text-center Administrar activos y pasivos corrientes para equilibrar liquidez y rentabilidad.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/13.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Asegurar la liquidez
                p.text-center Garantizar la disponibilidad de efectivo para cumplir con las obligaciones a corto plazo.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/14.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Mejora de la eficiencia operativa
                p.text-center Optimizar el uso de los recursos financieros para reducir costos y aumentar la productividad.
    
          .col-lg-4.order-2.order-lg-1
            figure
              img(src='@/assets/curso/tema1/7.png', alt='')
    
    p.mb-5 <b>Ejemplo práctico:</b> Una empresa evalúa la compra de maquinaria para aumentar su producción. La gerencia financiera debe analizar si la inversión generará un retorno superior al costo de financiamiento y evaluar su impacto en el flujo de caja y la estructura de capital. Este análisis garantiza que la decisión contribuya a la maximización del valor de la empresa y al cumplimiento de sus objetivos financieros.

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Principios de sostenibilidad y responsabilidad social en la gestión financiera
    
    p.mb-4 La gestión financiera moderna no solo se enfoca en la rentabilidad económica, sino que también integra principios de sostenibilidad y responsabilidad social. Este enfoque busca equilibrar los objetivos financieros con el bienestar social y la preservación del medio ambiente, reconociendo que las decisiones financieras tienen un impacto en múltiples dimensiones.

    .row.align-items-start.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/15.png", alt="").mb-4.mb-lg-0
      .col-lg-8.mb-3.mb-lg-0.order-1
    
        AcordionA(tipo="b")
          .div(titulo="Integración de Factores Ambientales, Sociales y de Gobernanza (ESG)")
            p Considera riesgos y oportunidades más allá de los indicadores económicos tradicionales. Analiza aspectos como impacto ambiental, relaciones laborales y transparencia en la gobernanza corporativa.
    
          .div(titulo="Inversión responsable")
            p Destina recursos a proyectos que generan beneficios financieros y, al mismo tiempo, contribuyen positivamente al entorno social y ambiental. Ejemplo: emisión de bonos verdes para financiar iniciativas ecológicas.
    
          .div(titulo="Gestión de riesgos ambientales y sociales")
            p Identifica y minimiza obstáculos relacionados con el entorno natural y la sociedad para garantizar la estabilidad financiera a largo plazo. Ejemplo: evaluación de riesgos de escasez de agua en industr.mb-0ias dependientes de este recurso.

    h2(data-aos="fade-left") Principios de responsabilidad social en la gestión financiera y su impacto
    p.mb-5 Además de los principios de sostenibilidad, la responsabilidad social en la gestión financiera juega un papel clave en la transparencia corporativa y la ética empresarial. A continuación, se detallan los principales aspectos de la responsabilidad social en este ámbito:

    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Transparencia y rendición de cuentas" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Transparencia y rendición de cuentas
            p.mb-0 Mantiene una comunicación abierta sobre las medidas financieras y su impacto social y ambiental. La elaboración de informes de sostenibilidad es clave en este proceso.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/16.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Participación activa en la comunidad" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Participación activa en la comunidad
            p.mb-0 Las empresas pueden aportar al desarrollo social a través de iniciativas que beneficien a comunidades locales. Ejemplo: programas de educación financiera en zonas vulnerables.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/17.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Ética en las decisiones financieras" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Ética en las decisiones financieras
            p Implementa estrategias que respetan los derechos humanos y laborales, evitando inversiones en actividades que generen problemas sociales o ambientales. Ejemplo: no financiar proyectos con deforestación masiva o explotación laboral.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/18.png', alt='', style="width: 100%;")


    .bg-full-width.bg-color-5
      .px-4.px-md-5.pb-md-3    
        h2(data-aos="fade-left") Ejemplo práctico: aplicación de la sostenibilidad y la responsabilidad social
        p.mb-5 Una empresa manufacturera decide expandir su planta de producción aplicando principios de sostenibilidad y responsabilidad social. Para ello, implementa las siguientes estrategias:

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/19.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Eficiencia energética
                p.mb-0 Inversión en maquinaria de bajo consumo energético y uso de energías renovables para reducir la huella de carbono.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/20.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Condiciones laborales justas
                p.mb-0 Implementación de programas de capacitación y aseguramiento de condiciones laborales seguras y equitativas.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/21.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Relación con la comunidad
                p.mb-0 Colaboración con proveedores locales y apoyo a proyectos comunitarios para fortalecer la economía local.

    p.mb-4 Al integrar estos principios en su gestión financiera, la empresa mejora su desempeño económico mientras contribuye al desarrollo sostenible y al bienestar social.

    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Impacto de la gerencia financiera en la toma de decisiones empresariales
    
    .bg-color-4.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/22.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Para la gestión de proyectos, la elaboración de una propuesta completa es un elemento esencial que transforma una idea inicial en un plan estructurado y viable. Este proceso permite definir objetivos, establecer estrategias y garantizar que los recursos y esfuerzos estén alineados hacia el logro de metas específicas. Una propuesta bien diseñada actúa como un mapa detallado que guía al equipo de trabajo desde la concepción hasta la implementación y evaluación del proyecto.
    
    h2(data-aos="fade-left") Áreas clave en la toma de decisiones financieras y su impacto
    p.mb-5 Una gestión financiera eficiente abarca distintos ámbitos que influyen en el desarrollo y crecimiento de una organización. A continuación, se presentan las principales áreas y su importancia:

    .row.align-items-start.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/23.png", alt="").mb-4.mb-lg-0
      .col-lg-8.mb-3.mb-lg-0.order-1
    
        AcordionA(tipo="b")
          .div(titulo="Decisiones de Inversión")
            p Se enfocan en asignar recursos a proyectos con rendimientos superiores al costo de capital. Ejemplo: evaluar la adquisición de maquinaria y su impacto en la rentabilidad.
    
          .div(titulo="Decisiones de Financiamiento")
            p Determinan las fuentes más adecuadas de financiamiento, equilibrando entre deuda y capital propio. Se consideran factores como tasas de interés y plazos.
    
          .div(titulo="Decisiones Operativas")
            p Administran el capital de trabajo para mantener un nivel óptimo de liquidez. Incluyen la gestión de cuentas por cobrar, inventarios y cuentas por pagar.
    
    .bg-full-width.bg-color-6
      .px-4.px-md-5.pb-md-3
        h2(data-aos="fade-left") Ejemplo práctico: toma de decisiones basada en la gerencia financiera
        p.mb-5 Una empresa evalúa la expansión de su línea de productos y debe tomar decisiones basadas en un análisis financiero sólido. Para ello, la gerencia financiera considera los siguientes factores:

        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/24.svg" alt="" style="width: 90px")
              h5.text-center Inversión inicial	
              p.mb-0.text-center Considera costos de producción, marketing y distribución.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/25.svg" alt="" style="width: 90px")
              h5.text-center Flujos de caja proyectados		
              p.mb-0.text-center Estima ingresos adicionales y gastos operativos.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/26.svg" alt="" style="width: 90px")
              h5.text-center Retorno de la inversión (ROI)		
              p.mb-0.text-center Determina si la expansión generará beneficios superiores al costo de capital.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/27.svg" alt="" style="width: 90px")
              h5.text-center Fuentes de financiamiento		
              p.mb-0.text-center Decide si utilizar recursos propios, financiamiento externo o una combinación de ambos.

    .bg-full-width.bg-color-2
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/28.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Este enfoque estructurado permite minimizar riesgos y optimizar los recursos financieros, asegurando que la decisión de expansión esté respaldada por un análisis sólido.

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.researchgate.net/publication/368387584_LA_GERENCIA_FINANCIERA_UNA_VISION_PRACTICA_PARA_LA_CREACION_DE_VALOR" target="_blank" rel="noopener noreferrer") García, J. (2019). La gerencia financiera: una visión práctica para la creación de valor. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.unilibre.edu.co/bogota/pdfs/2016/presentaciones/7.pdf" target="_blank" rel="noopener noreferrer") Universidad Libre. (2016). Enfoque de la gerencia financiera, desde la teoría general contable.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.bling.mx/blog/control-financeiro/metodos-de-analisis-financieros/" target="_blank" rel="noopener noreferrer") Bling. (2022). ¿Cuáles son los métodos de análisis financieros? [7 TIPOS].    

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=tXxl9lgpahw" target="_blank" rel="noopener noreferrer") Roni Q.Z.. (2020, 23 de agosto). Fundamentos de finanzas. [archivo de vídeo] YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
