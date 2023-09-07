---
title: Una breve historia de las pruebas de sistemas de software
description: En este artículo intentaré resumir un poco la historia de las pruebas de software, desde sus inicios hasta la actualidad, pasando por las diferentes etapas que han marcado su evolución. Con el objetivo de que tengamos un poco más de contexto para poder juzgar la importancia de las pruebas en el desarrollo de software, para la próxima vez que nos encontremos en una discusión sobre su implementación.
date: '2023-09-06'
categories:
  - testing
  - history
  - spanish
published: true
---

## Table of Contents

## Introducción

![Testing](/testing.png)
Tomada de [¿Qué son los casos de pruebas?](https://medium.com/grupo-carricay/qu%C3%A9-son-los-casos-de-pruebas-4893799b5b84)

Las pruebas de software nos han acompañado desde siempre en el desarrollo de sistemas de software. Como desarrolladores, existe una gran cantidad que no disfruta del diseño e implementación de pruebas, sin embargo, nadie puede negar que estas son una parte fundamental del proceso de desarrollo y que, en la mayoría de los casos, son una forma de garantizar que el software que se está desarrollando cumple con los requerimientos y expectativas del cliente.

En este artículo intentaré resumir un poco la historia de las pruebas de software, desde sus inicios hasta la actualidad, pasando por las diferentes etapas que han marcado su evolución. Con el objetivo de que tengamos un poco más de contexto para poder juzgar la importancia de las pruebas en el desarrollo de software, para la próxima vez que nos encontremos en una discusión sobre su implementación.

## Sus inicios

Desde épocas antiguas, los seres humanos han tenido la necesidad de probar sus creaciones, para asegurarse de que estas funcionen correctamente, las soluciones siempre van de la mano de las pruebas.

De esta manera nos podríamos preguntar el enigma del huevo y la gallina. ¿Qué fue primero, la pruebas o el software? La respuesta es que ambas. Las pruebas de software han existido desde que el ser humano ha creado software, y el software ha existido desde que el ser humano ha creado pruebas para verificar su funcionamiento. Las pruebas de software son tan antiguas como el software mismo, oficialmente se puede decir que nacieron justo después de la segunda guerra mundial, cuando el informático [Tom Kilburn](https://es.wikipedia.org/wiki/Tom_Kilburn) escribe la primera pieza de software, realizando cálculos matemáticos, para la computadora Manchester Mark I.

Para poder entender los inicios de las pruebas de software, es importante un término bastante popular en la actualidad, el bug. El origen del bug se remonta a 1947, cuando el informático [Grace Hopper](https://es.wikipedia.org/wiki/Grace_Hopper) encuentra un insecto en el relé de la computadora Mark II, el cual estaba causando problemas en el funcionamiento de la computadora. Desde entonces, los errores en el software se conocen como bugs.

Desde esas épocas la depuración era el principal método de prueba, y continúo de esa manera durante las siguientes décadas. La depuración consiste en la ejecución del software, con el objetivo de encontrar errores o bugs en el mismo, y corregirlos. Este método de prueba no es el más eficiente, ya que no se puede garantizar que se encuentren todos los errores, y además, no se puede garantizar que los errores encontrados sean corregidos de manera correcta.

## Evolución

La ingeniería de software como profesión no existía en esos tiempos, antes de la segunda guerra mundial aquellos que programaban eran ingenieros eléctricos, matemáticos o físicos. En 1972, el informático [Glenford Myers](https://en.wikipedia.org/wiki/Glenford_Myers) publica el libro "The Art of Software Testing", en el cual se establecen las bases de la ingeniería de software, y se propone la creación de un proceso de pruebas de software. Este libro fue publicado justo en el momento adecuado, ya que en las décadas de los 60, 70 y 80 se establece un periodo oscuro en la historia de la ingeniería de software, donde se idenficarón problemas tales como: sobrecostos, sobreestimación de tiempo, baja calidad, entre otros. Lo anterior produjo daños de propiedad, catástrofes aéreas o médicas, colapsos de sistemas bancarios, que combinados afectaron de manera significativa la vida de las personas.

Es por eso que, a medida que el tiempo avanzaba, se fue estableciendo la profesión del ingeniero de software y la relevancia de las pruebas fue creciendo a raíz de las catástrofes anteriormente mencionadas y de la importancia que fueron tomando los sistemas de información en la sociedad.

En la década de los 80, los equipos miraban más allá de solamente corregir bugs para probar aplicaciones, se estableció entonces un proceso más sofisticado de control de calidad que formaba parte del ciclo de vida del desarrollo de software.

## Ciclo de vida del desarrollo de software o SDLC

El ciclo de vida del desarrollo de software o SDLC (Systems Development Life Cycle) es mejor definido Amazon como "un proceso rentable y eficiente en términos de tiempo empleado por los equipos de desarrollo para diseñar y crear software de alta calidad". Esta metodología se creó en los 60, pero no se empezó a utilizar hasta los 80, cuando la escala de los proyectos de software empezó a crecer, y se necesitaba una metodología que permitiera gestionar de manera eficiente el desarrollo de software. Este proceso marcó un antes y un después en la historia de las pruebas de software, ya que se estableció un proceso de pruebas más formal, que se integraba al proceso de desarrollo de software.

El SDLC es un proceso que se divide en diferentes etapas, las cuales se pueden resumir en las siguientes: Planificación, Diseño, Implementación y Pruebas. En la siguiente imagen se puede observar un diagrama que representa el SDLC.

![SDLC](/sdlc.jpg)
Tomado de [Software Development Life Cycle (SDLC) phases](https://medium.com/@jilvanpinheiro/software-development-life-cycle-sdlc-phases-40d46afbe384)

Nótese que las pruebas son una etapa entera del ciclo, lo cual demuestra su importancia. En esta etapa el equipo de desarrollo combina pruebas automáticas y manuales para asegurar que el software cumple con los requerimientos y expectativas del cliente. Usualmente los equipos prueban inmediatamente el código luego de su implementación, entonces la fase de pruebas se ejecuta en paralelo a la fase de desarrollo.

Si quieres una descripción un poco más gráfica de esta metodología, puedes revisar el siguiente vídeo [Introduction To Software Development LifeCycle | What Is Software Development? | Simplilearn](https://github.com/Odzen/blog/assets/49286935/5a76e72a-db7d-43e5-b084-bbbfb861e1a2).

## Pruebas en la actualidad

Como se mencionó anteriormente, si seguimos el ciclo de vida del software al pie de la letra, nos encontramos con una problema, ya que la etapa de pruebas posiblemente sucede luego del desarrollo total de la aplicación y esto implica que el equipo encargado en desarrollar las pruebas tiene una ventana de tiempo muy corta para implementarlas, lo que ocasiona que el software finalmente salga a producción con errores. Para evitar esto, actualmente se maneja un sistema de pruebas continuas, un enfoque orientado a [DevOps](https://www.redhat.com/es/topics/devops#:~:text=DevOps%20es%20un%20modo%20de,de%20servicios%20de%20alta%20calidad.). Como se menciona en un artículo de IBM "El objetivo es acelerar la entrega de software mientras se equilibran los costos, la calidad y el riesgo".

Siguiendo el enfoque de DevOps, se establece un nuevo rol en muchas empresas de desarrollo de software llamado QA (Quality Assurance), el cual se encarga de diseñar e implementar pruebas de software, con el objetivo de garantizar la calidad del software. Los QA crean, ejecutan y automatizan las pruebas necesarias para garantizar que el software cumpla con los requerimientos y expectativas del cliente, antes de que el producto final salga a la luz. Este rol es muy importante, ya que permite que los desarrolladores se enfoquen en desarrollar el software, mientras que los QA se encargan de probarlo. Hay que también hacer la salvedad que esto no implica que los desarrolladores no deben saber crear pruebas, por el contrario, esta es una habilidad necesaria ya que usualmente en equipos o empresas pequeñas, el rol de QA también lo desempeñan los desarrolladores.

En la siguiente imagen se puede observar un diagrama que representa el proceso de DevOps:

![devops](/devops.jpeg)
Tomado de [Las 10 herramientas imprescindibles de DevOps utilizadas por las empresas más grandes del mundo](https://es.linkedin.com/pulse/las-10-herramientas-imprescindibles-de-devops-por-m%C3%A1s-juan-manuel)

Otro aspecto a destacar en la imagen, son las tecnologías que se han venido desarrollando a partir de las nuevas necesidades en el desarrollo de software. Específicamente en la fase de pruebas se requiere actualmente una productividad bastante mayor a la de hace algunas décadas, lo que implica que algunas o todas las pruebas deben automatizarse hasta donde sea posible con el fin de que los equipos sean más productivos. Para esto se han desarrollado diferentes herramientas que permiten automatizar las pruebas, como por ejemplo [Selenium](https://www.selenium.dev/), [Cypress](https://www.cypress.io/), [Jest](https://jestjs.io/), [GitHub Actions](https://github.com/features/actions) para correr scripts, entre otras.

Para nadie es un secreto que el dominio de varias de estas herramientas es un requerimiento para los roles que ofrecen varias empresas, sobre todo para desarrollador QA, ingeniero de software o DevOps. Por lo tanto, es importante que los desarrolladores conozcan y dominen estas herramientas, ya que esto les permitirá ser más productivos y competitivos en el mercado laboral.

## Conclusión

La historia de las pruebas de software subraya su esencial relevancia en el desarrollo tecnológico, desde la detección temprana de "bugs" hasta su papel crucial en los sistemas de información actuales. Conocer esta evolución no solo previene desastres, sino que también capacita a los profesionales para destacar en un entorno altamente competitivo, y dominar las herramientas y metodologías modernas de pruebas se ha convertido en un requisito fundamental para el éxito en el campo del desarrollo de software.

## Bibliografía

- [Pruebas de software](https://es.wikipedia.org/wiki/Pruebas_de_software)
- [El nacimiento del testing](https://www.pragma.com.co/academia/lecciones/el-nacimiento-del-testing)
- [Software testing](https://en.wikipedia.org/wiki/Software_testing)
- [Historia de las pruebas de software](<https://medium.com/la-region-vulnerable/historia-de-las-pruebas-de-software-fbd3c2716ce2#:~:text=En%201957%2C%20Charles%20Baker%20expone,funcionalidad%20del%20programa%20(debugging).>)
- [¿Qué es una prueba de software?](https://www.ibm.com/mx-es/topics/software-testing)
- [¿Que es SDLC?](https://aws.amazon.com/es/what-is/sdlc/#:~:text=El%20ciclo%20de%20vida%20del,crear%20software%20de%20alta%20calidad.)
