<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Elaboración y estructura de los estados financieros'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5.justify-content-center
      .col-md-8.col-lg-2.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/1.svg", data-aos="zoom-in")
      .col-lg-10.order-lg-1
        p(data-aos="fade-left") La elaboración y estructura de los estados financieros constituyen pilares fundamentales en la contabilidad y gestión empresarial. Estos documentos brindan una representación estructurada de la situación financiera, el rendimiento y los flujos de efectivo de una entidad en un período determinado, lo que posibilita la toma de decisiones informadas por parte de diversos usuarios. Los principales estados financieros y sus funciones se presentan a continuación: 


    .bg-full-width.bg-color-6.mb-5
      .px-4.px-md-5.pb-md-3
        .row.align-items-start.mb-5
          .col-lg-4.order-2
            figure
              img(src="@/assets/curso/tema2/2.png", alt="").mb-4.mb-lg-0
          .col-lg-8.mb-3.mb-lg-0.order-1
        
            AcordionA(tipo="b")
              .div(titulo="Estado de situación financiera (Balance General)")
                p Presenta los activos, pasivos y patrimonio de la empresa en una fecha específica, reflejando su posición financiera. Ejemplo: si una empresa tiene activos de $500,000 y pasivos de $200,000, su patrimonio neto sería de $300,000.
        
              .div(titulo="Estado de resultados")
                p Muestra el desempeño financiero durante un período, detallando ingresos, costos y gastos. Su función es evaluar la rentabilidad operativa. Ejemplo: ingresos de $150,000 y gastos de $120,000 generan una utilidad neta de $30,000.
        
              .div(titulo="Estado de cambios en el patrimonio neto")
                p Refleja las variaciones en el patrimonio de la empresa, incluyendo aportes de propietarios, retiros y utilidades retenidas. Ejemplo: si los propietarios aportan $50,000 adicionales y se retienen utilidades por $20,000, el patrimonio aumenta en $70,000.
              .div(titulo="Estado de flujos de efectivo")
                p Informa sobre los movimientos de efectivo, clasificados en actividades operativas, de inversión y financiamiento. Ejemplo: un flujo positivo de $40,000 en actividades operativas y negativo de $20,000 en inversión da un aumento neto en efectivo de $20,000.

        p.mb-4 El proceso de elaboración de los estados financieros sigue una secuencia lógica para garantizar precisión y confiabilidad:

        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/3.svg" alt="" style="width: 90px")
              h5.text-center Registro de transacciones	
              p.mb-0.text-center Documentación de todas las operaciones financieras en los libros contables para garantizar la precisión y completitud de los datos.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/4.svg" alt="" style="width: 90px")
              h5.text-center Ajustes contables	
              p.mb-0.text-center Aplicación de ajustes para reflejar gastos e ingresos acumulados, depreciaciones y provisiones, asegurando información realista.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/5.svg" alt="" style="width: 90px")
              h5.text-center Elaboración de los estados financieros		
              p.mb-0.text-center Creación de los estados financieros principales siguiendo las normativas contables vigentes.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/6.svg" alt="" style="width: 90px")
              h5.text-center Notas explicativas		
              p.mb-0.text-center Inclusión de detalles adicionales sobre partidas específicas, políticas contables aplicadas y otra información relevante.

    p.mb-4 Estos documentos son esenciales para diversos usuarios:

    .bg-full-width.bg-color-info
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/7.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="7%" y="11.5%" numero="+")
                h5 Inversionistas
                p Evalúan la rentabilidad y estabilidad de la empresa para tomar decisiones de inversión.
    
              .bg-color-white.box-shadow.p-3(x="7%" y="57%" numero="+")
                h5 Acreedores
                p Analizan la capacidad de la empresa para cumplir con sus obligaciones financieras.
    
              .bg-color-white.box-shadow.p-3(x="93%" y="11.5%" numero="+")
                h5 Directivos
                p Utilizan la información para planificar y dirigir operaciones empresariales.
    
              .bg-color-white.box-shadow.p-3(x="93%" y="57%" numero="+")
                h5 Entidades gubernamentales
                p Supervisan el cumplimiento de regulaciones y obligaciones fiscales.
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/8.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Una comprensión profunda de la elaboración y estructura de los estados financieros es vital para garantizar la transparencia, confiabilidad y relevancia de la información presentada.   

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Tipos de estados financieros y su función en la organización

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/9.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/10.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Los estados financieros proporcionan una visión detallada de la situación económica y financiera de una organización en un período específico. Estos informes permiten a los gestores, inversores y otras partes interesadas tomar decisiones informadas sobre la dirección y gestión de la empresa.
        p(data-aos="fade-left") A continuación, se detallan los principales tipos de estados financieros y su función en la organización:
    
    .bg-full-width.bg-color-5.mb-5
      .px-4.px-md-5.pb-md-3
        .row.align-items-start.mb-5
          .col-lg-4.order-2
            figure
              img(src="@/assets/curso/tema2/11.png", alt="").mb-4.mb-lg-0
          .col-lg-8.mb-3.mb-lg-0.order-1
        
            AcordionA(tipo="b")
              .div(titulo="Balance general (estado de situación financiera)")
                p Muestra la posición financiera de la empresa, evidenciando lo que posee (activos), lo que debe (pasivos) y el capital aportado por los propietarios (patrimonio). Ejemplo: activos de $500,000 y pasivos de $200,000 resultan en un patrimonio neto de $300,000.
        
              .div(titulo="Estado de resultados (estado de pérdidas y ganancias)")
                p Evalúa la rentabilidad operativa de la empresa, detallando ingresos, costos y gastos. Ejemplo: ingresos de $150,000 y gastos de $120,000 generan una utilidad neta de $30,000.
        
              .div(titulo="Estado de flujos de efectivo")
                p Proporciona información sobre la liquidez de la empresa al mostrar los movimientos de efectivo en actividades operativas, de inversión y financiamiento. Ejemplo: flujo positivo de $40,000 en operaciones y negativo de $20,000 en inversión indica un aumento neto en efectivo de $20,000.
              .div(titulo="Estado de cambios en el patrimonio neto")
                p Explica las variaciones en el patrimonio de la empresa a lo largo del período contable. Ejemplo: un aporte de $50,000 y utilidades retenidas de $20,000 resultan en un incremento patrimonial de $70,000.
              .div(titulo="estado de cambios en la situación financiera")
                p Analiza modificaciones en la posición financiera entre dos fechas, identificando fuentes y aplicaciones de recursos. Ejemplo: un aumento en cuentas por cobrar indica ventas a crédito, mientras que una disminución en efectivo refleja pagos de deudas.
    
        p.mb-4 La correcta elaboración y análisis de estos estados financieros permiten tomar decisiones estratégicas y garantizar la sostenibilidad de la empresa.
        
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/12.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Toma de decisiones informadas	
                p.mb-0 Proporcionan datos clave para planificar estrategias, evaluar inversiones y optimizar recursos.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/13.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Transparencia y confianza	
                p.mb-0 Facilitan la comunicación clara con inversores, acreedores y otras partes interesadas.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/14.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Cumplimiento normativo	
                p.mb-0 Aseguran que la empresa cumpla con las regulaciones contables y fiscales vigentes.
    
    p.mb-4 Estos estados financieros permiten un control eficiente de los recursos y fortalecen la posición de la empresa en el mercado.

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Normativas contables y financieras aplicadas a la elaboración de estados
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/15.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        .bg-color-2.p-4.mb-3(data-aos="fade-left")
          p.mb-0 Las normativas contables y financieras establecen los lineamientos y principios que garantizan la coherencia, transparencia y comparabilidad de la información financiera presentada por las organizaciones. Su aplicación asegura que los estados financieros reflejen de manera fidedigna la situación económica de la entidad, facilitando la toma de decisiones informadas por parte de los usuarios interesados.
        p(data-aos="fade-left") A continuación, se presentan las principales normativas contables aplicadas en la elaboración de estados financieros:
    
    .bg-full-width.bg-color-6.mb-5
      .px-4.px-md-5.pb-md-3
        TabsC.color-acento-contenido.mb-5
          .tabs-content.border.px-4.p-md-5.py-3(titulo="Normas Internacionales de Información Financiera (NIIF)" :icon="require('@/assets/bullets/2.svg')")
            .row.justify-content-center.align-items-center
              .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
                h4 Normas Internacionales de Información Financiera (NIIF)
                p.mb-0 Emitidas por el <em>International Accounting Standards Board</em> (IASB), unifican criterios contables a nivel global, permitiendo la comparabilidad entre empresas de diferentes países. Abarcan desde el reconocimiento y medición de activos y pasivos hasta la presentación de ingresos y gastos. Ejemplo: la NIIF 15 establece criterios para el reconocimiento de ingresos en función de la transferencia de control de bienes o servicios.
        
              .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/tema2/16.png', alt='')
        
          .tabs-content.border.px-4.p-md-5.py-3(titulo="Normas Internacionales de Contabilidad (NIC)" :icon="require('@/assets/bullets/2.svg')")
            .row.justify-content-center.align-items-center
              .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
                h4 Normas Internacionales de Contabilidad (NIC)
                p.mb-0 Emitidas antes de la adopción de las NIIF, siguen vigentes y complementan el marco normativo actual. La NIC 1 regula la presentación de los estados financieros, garantizando que la información sea comparable, relevante y comprensible para los usuarios. Ejemplo: enfatiza la importancia de la base de acumulación (devengo) y la consistencia en la presentación.
        
              .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/tema2/17.png', alt='')

        h2(data-aos="fade-left") Aplicación práctica de las normativas
        p.mb-5 Para ilustrar cómo estas normativas se aplican en la práctica, se presenta el siguiente caso:

        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/18.svg" alt="" style="width: 90px")
              h5.text-center Compra de un activo fijo (maquinaria) por $100,000	
              p.mb-0.text-center Se registra al costo de adquisición y se reconoce una depreciación acorde con su vida útil estimada.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/19.svg" alt="" style="width: 90px")
              h5.text-center Vida útil estimada de 10 años	
              p.mb-0.text-center Se reconoce un gasto de depreciación anual de $10,000.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/20.svg" alt="" style="width: 90px")
              h5.text-center Impacto en los estados financieros	
              p.mb-0.text-center Refleja la disminución progresiva del valor del activo y su correspondiente impacto en los resultados financieros.
    
    h2(data-aos="fade-left") Importancia de las normativas en la elaboración de estados financieros
    p.mb-5 El cumplimiento de estas normativas ofrece múltiples beneficios para las organizaciones y sus grupos de interés:

    .row.align-items-start.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/21.png", alt="").mb-4.mb-lg-0
      .col-lg-8.mb-3.mb-lg-0.order-1
    
        AcordionA(tipo="b")
          .div(titulo="Transparencia")
            p Proporcionan una representación clara y veraz de la situación financiera de la entidad.
    
          .div(titulo="Comparabilidad")
            p Facilitan la comparación de información financiera entre diferentes períodos y entidades.
    
          .div(titulo="Confianza")
            p Generan credibilidad entre inversores, acreedores y otros <em>stakeholders</em> al asegurar que la información sigue estándares reconocidos internacionalmente.
    
    .bg-full-width.bg-color-2
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/8.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 El uso adecuado de estas normativas garantiza que los estados financieros sean útiles para la toma de decisiones estratégicas y cumplan con las regulaciones establecidas en el ámbito contable y financiero.

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://repositorio.usmp.edu.pe/bitstream/handle/20.500.12727/1112/ribbeck_gcg.pdf" target="_blank" rel="noopener noreferrer") Universidad de San Martín de Porres. (2014). Análisis e Interpretación de Estados Financieros: Herramienta Clave para la Toma de Decisiones en las Empresas de la Industria Metalmecánica del Distrito de Ate Vitarte, 2013. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.bling.mx/blog/control-financeiro/metodos-de-analisis-financieros/" target="_blank" rel="noopener noreferrer") Bling. (2022). ¿Cuáles son los métodos de análisis financieros? [7 TIPOS].   
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.docusign.com/es-mx/blog/como-aumentar-la-rentabilidad" target="_blank" rel="noopener noreferrer") Docusign. (2023). Cómo aumentar la rentabilidad en las empresas. Recuperado de  

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=UO8xi_GfW6c" target="_blank" rel="noopener noreferrer") Facultad de estudios a distancia. (2021, agosto 13). ¿Cuáles son los elementos de los estados financieros? Universidad Militar Nueva Granada. [Archivo de video] YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
