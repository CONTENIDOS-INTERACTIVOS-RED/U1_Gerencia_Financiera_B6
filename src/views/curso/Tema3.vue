<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Análisis e interpretación de los Estados Financieros'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-4.p-4.mb-3(data-aos="fade-left")
          p.mb-0 El análisis e interpretación de los estados financieros es una herramienta esencial en la gestión empresarial, ya que permite evaluar la salud financiera de una organización y facilita la toma de decisiones informadas. Examina detalladamente los estados financieros para obtener información clave sobre rentabilidad, liquidez, solvencia y eficiencia operativa.
        p(data-aos="fade-left") Para llevar a cabo un análisis efectivo, se utilizan técnicas como el análisis vertical y horizontal, así como el cálculo de ratios financieros. A continuación, se resume estos métodos de análisis financiero y su aplicación:
    
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/2.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Análisis horizontal")
            p Compara los estados financieros de la empresa a lo largo de diferentes períodos para identificar tendencias y variaciones en partidas específicas. Ejemplo: el crecimiento de las ventas en cinco años permite evaluar la estabilidad de ingresos.
    
          .div(titulo="Análisis vertical")
            p Examina la proporción de cada partida dentro de un estado financiero en un único período. Ejemplo: en un estado de resultados, se puede evaluar qué porcentaje de las ventas netas representa el costo de ventas.
    
          .div(titulo="Indicadores financieros")
            p Relacionan diferentes partidas de los estados financieros para evaluar liquidez, solvencia, rentabilidad y eficiencia. Ejemplo: la razón corriente mide la capacidad de la empresa para cubrir sus obligaciones a corto plazo.
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/3.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Una correcta interpretación de estos análisis proporciona a los gestores información para tomar decisiones estratégicas, fortalecer la comunicación con inversores y demostrar transparencia en la gestión financiera.

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Métodos de análisis financiero: interpretación de datos clave
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/4.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-4.p-4.mb-3(data-aos="fade-left")
          p.mb-0 El análisis financiero permite evaluar la situación económica de una empresa mediante la interpretación de datos clave. A continuación, se presentan los principales métodos de análisis y su aplicación en una empresa ficticia, "Industrias Alfa S.A.".
        p(data-aos="fade-left") El análisis horizontal permite evaluar el crecimiento de ventas y costos en distintos períodos, facilitando la identificación de tendencias y variaciones que puedan afectar la rentabilidad. En la siguiente tabla se presentan los datos correspondientes a dos años consecutivos:
      
    .titulo-figura.mb-4
      h5 Tabla 1.
      span Análisis horizontal de crecimiento de ventas y costos
    .tabla-a.color-acento-botones.mb-5
      table.text-center
        thead
          tr
            th.bg-color-3.text-center Concepto
            th.bg-color-3.text-center Año 1 ($) 
            th.bg-color-3.text-center Año 2 ($)
            th.bg-color-3.text-center Variación Absoluta ($)
            th.bg-color-3.text-center Variación (%) 
        tbody
          tr
            td.text-bold Ventas netas
            td 500,000
            td 600,000
            td 100,000
            td +20%
          tr
            td.text-bold Costo de ventas
            td 250,000
            td 310,000
            td 60,000
            td +24%

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/5.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          p.mb-0 <b>Interpretación:</b> aunque las ventas aumentaron un 20 %, el costo de ventas creció un 24 %, lo que podría afectar la rentabilidad. Se recomienda analizar los gastos operativos para optimizar los márgenes de ganancia.
        p(data-aos="fade-left") El análisis vertical permite examinar la estructura del estado de resultados expresando cada cuenta como porcentaje de las ventas. Esto ayuda a identificar cómo se distribuyen los costos y la rentabilidad de la empresa. A continuación, se presentan los datos del año 2:

    .titulo-figura.mb-4
      h5 Tabla 2.
      span Análisis vertical del estado de resultados
    .tabla-a.color-acento-botones.mb-5
      table.text-center
        thead
          tr
            th.bg-color-3.text-center Concepto
            th.bg-color-3.text-center Monto ($) 
            th.bg-color-3.text-center % sobre Ventas
        tbody
          tr
            td.text-bold Ventas netas
            td 600,000
            td 100%
          tr
            td.text-bold Costo de ventas
            td 310,000
            td 51.7%
          tr
            td.text-bold Utilidad bruta
            td 290,000
            td 48.3%
          tr
            td.text-bold Gastos operativos
            td 150,000
            td 25%
          tr
            td.text-bold Utilidad neta
            td 140,000
            td 23.3%


    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/6.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-4.p-4.mb-3(data-aos="fade-left")
          p.mb-0 <b>Interpretación:</b> la empresa mantiene una utilidad neta del 23.3 %, lo que indica rentabilidad saludable. Sin embargo, los gastos operativos representan el 25 %, por lo que se sugiere optimizar costos innecesarios.
        p(data-aos="fade-left") Para evaluar de manera cuantitativa la liquidez, rentabilidad y eficiencia de la empresa, se utilizan indicadores financieros clave. La siguiente tabla presenta algunos de los más utilizados junto con su cálculo e interpretación:

    .titulo-figura.mb-4
      h5 Tabla 3.
      span Indicadores financieros clave
    .tabla-a.color-acento-botones.mb-5
      table.text-center
        thead
          tr
            th.bg-color-3.text-center Indicador
            th.bg-color-3.text-center Fórmula 
            th.bg-color-3.text-center Cálculo
            th.bg-color-3.text-center Resultado
            th.bg-color-3.text-center Interpretación 
        tbody
          tr
            td.text-bold Razón corriente
            td Activos corrientes / Pasivos corrientes
            td 120,000 / 80,000
            td 1.5
            td La empresa tiene 1.5 veces más activos corrientes que pasivos, lo que indica buena liquidez.
          tr
            td.text-bold Margen de utilidad neta
            td Utilidad neta / Ventas netas
            td 140,000 / 600,000
            td 23.3%
            td La empresa obtiene $0.23 de ganancia por cada dólar vendido.
          tr
            td.text-bold Rotación de inventarios
            td Costo de ventas / Promedio de inventarios
            td 310,000 / 62,000
            td 5
            td El inventario se renueva 5 veces al año, indicando eficiencia en la gestión.
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/3.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 <b>Interpretación:</b> Industrias Alfa S.A. muestra crecimiento en ventas, buena liquidez y rentabilidad. Sin embargo, debe controlar el incremento en costos y optimizar gastos operativos para mantener su margen de ganancia.

    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Estrategias para la optimización de costos y mejora de la rentabilidad

    p.mb-4 La optimización de costos y la mejora de la rentabilidad permiten fortalecer la posición competitiva de una organización sin comprometer la calidad o el crecimiento. Se pueden aplicar diversas estrategias para reducir costos y mejorar la eficiencia operativa. A continuación, se presentan algunas de las más efectivas:

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/7.png")
            .col-lg-7
              h5 Análisis y control de costos
              p Identificar costos innecesarios y optimizar recursos mediante presupuestos detallados y renegociación de contratos. Ejemplo: Una empresa que gasta $10,000 mensuales en software revisa sus suscripciones y las consolida en una sola plataforma, reduciendo costos en un 30%.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/8.png")
            .col-lg-7
              h5 Automatización y digitalización
              p Implementar tecnología para mejorar procesos y reducir costos administrativos. Ejemplo: La facturación electrónica disminuye el uso de papel y mensajería en un 50%.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/9.png")
            .col-lg-7
              h5 Gestión estratégica del capital de trabajo
              p Optimizar inventarios y negociar mejores plazos con proveedores para mejorar la  liquidez. Ejemplo: Un minorista reduce su stock en productos de baja rotación, disminuyendo el capital inmovilizado en inventario en un 20%.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/10.png")
            .col-lg-7
              h5 Reducción de costos operativos
              p Aplicar medidas de eficiencia en energía, teletrabajo y logística para minimizar gastos. Ejemplo: Una empresa implementa teletrabajo parcial y ahorra $5,000 mensuales en alquiler de oficinas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/11.png")
            .col-lg-7
              h5 Estrategias de precios y valor agregado
              p Ajustar precios según la demanda y enfocar ventas en productos de mayor margen. Ejemplo: Un restaurante deja de ofrecer productos con bajo margen y reorienta su oferta a platillos premium, aumentando su rentabilidad en un 15%.

    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/3.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Optimizar costos no implica solo reducir gastos, sino administrar eficientemente los recursos para mejorar la rentabilidad. Estas estrategias deben adaptarse a cada organización para garantizar un equilibrio entre ahorro y crecimiento sostenible.

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://mexico.unir.net/noticias/economia/analisis-financiero-empresa/" target="_blank" rel="noopener noreferrer") UNIR México. (2021). El análisis financiero de una empresa: métodos y ratios.  

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://ayesa365.com/seis-analisis-de-datos-financieros-clave/" target="_blank" rel="noopener noreferrer") Ayesa 365. (2021). Seis análisis de datos financieros clave para tu empresa.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://consolide.com/blog/reducir-costos/" target="_blank" rel="noopener noreferrer") Consolide. (2022). Cómo reducir costos y mejorar la rentabilidad de una empresa

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=6KOXHc-q67E" target="_blank" rel="noopener noreferrer") Facultad de estudios a distancia. (2021, agosto 13). Conceptos para informes financieros. Universidad Militar Nueva Granada. [Archivo de video] YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto: '¿Qué significa la solvencia de una empresa?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'La capacidad de pagar sus deudas a largo plazo ',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'La cantidad de dinero en efectivo disponible',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'La cantidad de impuestos pagados en el año',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'La rapidez con la que se venden sus productos',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál es el principal objetivo del estado de flujos de efectivo?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Analizar el nivel de endeudamiento de la empresa',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Determinar la rentabilidad neta de la organización',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Mostrar la liquidez disponible y los movimientos de efectivo ',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto:
                  'Calcular la variación de activos y pasivos en un período',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál de las siguientes estrategias contribuye a la optimización de costos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Automatizar procesos operativos para reducir gastos innecesarios ',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Eliminar departamentos clave para reducir costos',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Aumentar el inventario sin planificación',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Reducir la inversión en capacitación del personal',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: '¿Cómo se calcula el endeudamiento de una empresa?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Dividiendo los pasivos totales entre los activos totales ',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Restando los activos de los pasivos',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Multiplicando la rentabilidad neta por los ingresos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Sumando los pasivos y el capital social',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              'Por qué es importante el análisis financiero en la toma de decisiones empresariales?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Permite evaluar la estabilidad financiera y detectar riesgos ',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Solo se usa para cumplir con regulaciones fiscales',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'No es necesario si la empresa genera ganancias',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Se usa únicamente para calcular los costos de producción',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
