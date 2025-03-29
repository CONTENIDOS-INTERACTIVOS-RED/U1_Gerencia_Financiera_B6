export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Fundamentos de Gerencia Financiera y Estados Financieros',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fundamentos de la Gerencia Financiera',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Concepto y objetivos de la gerencia financiera',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Principios de sostenibilidad y responsabilidad social en la gestión financiera',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Impacto de la gerencia financiera en la toma de decisiones empresariales',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Elaboración y estructura de los estados financieros',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Tipos de estados financieros y su función en la organización',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Normativas contables y financieras aplicadas a la elaboración de estados',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Análisis e interpretación de los Estados Financieros',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Métodos de análisis financiero: interpretación de datos clave',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Estrategias para la optimización de costos y mejora de la rentabilidad',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'González, M. Guzmán Vásquez, A. & Trujillo Dávila, M. A. (2020). Gerencia financiera basada en valor: hacia un proceso sistemático para la toma de decisiones financieras: (1 ed.). Colegio de Estudios Superiores de Administración - CESA. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/222487 ',
    },
    {
      referencia:
        'Encalada Encarnación, V. R. (2023). La gerencia y la empresa: desafíos y oportunidades: con enfoque de las Normas Internacionales de Información Financiera: (1 ed.). Editorial Universidad del Rosario. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/248674 ',
    },
    {
      referencia:
        'Muñoz Cabanes, E. & Ruíz Pelayo, P. (2020). Gestión financiera: (1 ed.). Macmillan Iberia, S.A. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/267817 ',
    },
    {
      referencia:
        'Tapia Iturriaga, C. K. & Jiménez Sierra, J. A. (2020). Cómo construir tu libertad financiera: ( ed.). Instituto Mexicano de Contadores Públicos. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/130925 ',
    },
    {
      referencia:
        'Sánchez Morales, F. (2024). Fundamentos de contabilidad financiera: (1 ed.). Editorial Universitaria de Chile.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/271541 ',
    },
  ],
  glosario: [
    {
      termino: 'Activo',
      significado:
        'bienes y derechos que posee una empresa y que pueden generar beneficios económicos futuros.',
    },
    {
      termino: 'Amortización',
      significado:
        'proceso contable que distribuye el costo de un activo a lo largo de su vida útil.',
    },
    {
      termino: 'Balance general',
      significado:
        'estado financiero que muestra la situación económica de una empresa en un momento determinado.',
    },
    {
      termino: 'Capital de trabajo',
      significado:
        'diferencia entre los activos corrientes y los pasivos corrientes, reflejando la liquidez operativa de la empresa.',
    },
    {
      termino: 'Costos fijos',
      significado:
        'gastos que no varían con el nivel de producción o ventas de una empresa.',
    },
    {
      termino: 'Costos variables',
      significado:
        'gastos que cambian en proporción directa al volumen de producción o ventas.',
    },
    {
      termino: 'Depreciación',
      significado:
        'reducción del valor de un activo debido al uso, el tiempo o la obsolescencia.',
    },
    {
      termino: 'Endeudamiento',
      significado:
        'relación entre los pasivos y el patrimonio de una empresa, indicando su nivel de financiamiento externo.',
    },
    {
      termino: 'Estado de resultados',
      significado:
        'informe financiero que muestra los ingresos, costos y gastos en un periodo determinado, reflejando la utilidad o pérdida neta.',
    },
    {
      termino: 'Estructura de costos:',
      significado:
        'distribución de los costos fijos y variables dentro de una organización.',
    },
    {
      termino: 'Flujo de caja:',
      significado:
        'movimiento de efectivo dentro y fuera de una empresa, reflejando su liquidez en un periodo específico.',
    },
    {
      termino: 'Ingresos',
      significado:
        'dinero que recibe una empresa por sus ventas, servicios prestados u otras actividades económicas.',
    },
    {
      termino: 'Inversión ',
      significado:
        'destinación de recursos financieros en activos o proyectos con la expectativa de obtener beneficios futuros.',
    },
    {
      termino: 'Liquidez',
      significado:
        'capacidad de una empresa para cumplir con sus obligaciones de pago en el corto plazo.',
    },
    {
      termino: 'Margen de utilidad:',
      significado:
        'porcentaje de ganancia obtenido sobre las ventas totales de una empresa.',
    },
    {
      termino: 'Pasivo',
      significado:
        'obligaciones y deudas que una empresa debe pagar en el futuro.',
    },
    {
      termino: 'Patrimonio',
      significado:
        'diferencia entre los activos y los pasivos de una empresa, representando la inversión de los propietarios.',
    },
    {
      termino: 'Rentabilidad',
      significado:
        'capacidad de una empresa para generar beneficios en relación con sus costos e inversiones.',
    },
    {
      termino: 'Rotación de inventarios',
      significado:
        'número de veces que los productos en stock se venden y reponen en un periodo determinado.',
    },
    {
      termino: 'Solvencia',
      significado:
        'capacidad de una empresa para cumplir con sus obligaciones financieras a largo plazo.',
    },
  ],
}
