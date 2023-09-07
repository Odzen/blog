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

Desde épocas antiguas, los seres humanos han tenido la necesidad de probar sus creaciones, para asegurarse de que estas funcionen correctamente, las soluciones siempre van de la manos de las pruebas.

De esta manera nos podríamos preguntar el enigma del huevo y la gallina. ¿Qué fue primero, la pruebas o el software? La respuesta es que ambas. Las pruebas de software han existido desde que el ser humano ha creado software, y el software ha existido desde que el ser humano ha creado pruebas para verificar su funcionamiento. Las pruebas de software son tan antiguas como el software mismo, oficialmente se puede nacieron just después de la segunda guerra mundial, cuando el informático [Tom Kilburn](https://es.wikipedia.org/wiki/Tom_Kilburn) escribe la primera pieza de software, ralizando cálculos matemáticos, para la computadora Manchester Mark I.

Para poder entender los inicios de las pruebas de software, es importante un término bastante popular en la actualidad, el bug. El origen del bug se remonta a 1947, cuando el informático [Grace Hopper](https://es.wikipedia.org/wiki/Grace_Hopper) encuentra un insecto en el relé de la computadora Mark II, el cual estaba causando problemas en el funcionamiento de la computadora. Desde entonces, los errores en el software se conocen como bugs.

Desde esas épocas la depuración era el principal método de prueba, y continúo de esa manera durante las siguientes décadas. La depuración consiste en la ejecución del software, con el objetivo de encontrar errores o bugs en el mismo, y corregirlos. Este método de prueba no es el más eficiente, ya que no se puede garantizar que se encuentren todos los errores, y además, no se puede garantizar que los errores encontrados sean corregidos de manera correcta.

## Evolución

La ingeniería de software como profesión no existía en esos tiempos, antes de la segunda guerra mundial aquellos que programaban era ingenieros eléctricos, matemáticos o físicos. En 1972, el informático [Glenford Myers](https://en.wikipedia.org/wiki/Glenford_Myers) publica el libro "The Art of Software Testing", en el cual se establecen las bases de la ingeniería de software, y se propone la creación de un proceso de pruebas de software. Este libro fue publicado justo en el momento adecuado, ya que en las decadas de los 60, 70 y 80 se establece un periodo oscuro en la historia de la ingeniería de software, donde se idenficaron problemas tales como: sobrecostos, sobreestimación de tiempo, baja calidad, entre otros. Lo anterior produjo daños de propiedad, catastrofes aéreas o médicas, colapsos de sistemas bancarios, que combinandos afectaron de manera significativa la vida de las personas.

Es por eso que, a medida que el tiempo avanzaba, se fue estableciendo la profesión del ingeniero de software y la relevancia de las pruebas fue creciendo a raíz las las catastrofes anteriormente mencionadas y de la importancia que fueron tomando los sistemas de información en la sociedad.

En las decada de los 80, los equipos miraban más allá de solamente corregir bugs para probar aplicaciones, se estableció entonces un proceso más sofisticado de control de calidad que formaba parte del ciclo de vida del desarrollo de software.

## Ciclo de vida del desarrollo de software o SDLC

El ciclo de vida del desarrollo de software o SDLC (Systems Development Life Cycle) es mejor definido Amazon como "un proceso rentable y eficiente en términos de tiempo empleado por los equipos de desarrollo para diseñar y crear software de alta calidad". Esta metodología se creó en los 60, pero no se empezó a utilizar hasta los 80, cuando se la escala de los proyectos de software empezó a crecer, y se necesitaba una metodología que permitiera gestionar de manera eficiente el desarrollo de software. Este proceso marco un antes y un después en la historia de las pruebas de software, ya que se estableció un proceso de pruebas más formal, que se integraba al proceso de desarrollo de software.

El SDLC es un proceso que se divide en diferentes etapas, las cuales se pueden resumir en las siguientes: Planificación, Diseño, Implementación y Pruebas. En la siguiente imagen se puede observar un diagrama que representa el SDLC.

![SDLC](/sdlc.jpg)

Notese que las pruebas son una etapa entera del ciclo, lo cual demuestra su importancia. En esta etapa el equipo de desarrollo combina pruebas automáticas y manuales para asegurar que el software cumple con los requerimientos y expectativas del cliente. Usualmente los equipos prueban inmediatamente el código luego de su implementación, entonces la fase de pruebas se ejecuta en paralelo a la fase de desarrollo.

Si quieres una descripción un poco más gráfica de esta metodología, puedes revisar el siguiente vídeo [Introduction To Software Development LifeCycle | What Is Software Development? | Simplilearn](https://github.com/Odzen/blog/assets/49286935/5a76e72a-db7d-43e5-b084-bbbfb861e1a2).

## Pruebas en la actualidad

TODO:

- Role of QA
- Types of testing
- Test automation

## Bibliografía

- [Pruebas de software](https://es.wikipedia.org/wiki/Pruebas_de_software)
- [El nacimiento del testing](https://www.pragma.com.co/academia/lecciones/el-nacimiento-del-testing)
- [Software testing](https://en.wikipedia.org/wiki/Software_testing)
- [Historia de las pruebas de software](<https://medium.com/la-region-vulnerable/historia-de-las-pruebas-de-software-fbd3c2716ce2#:~:text=En%201957%2C%20Charles%20Baker%20expone,funcionalidad%20del%20programa%20(debugging).>)
- [¿Qué es una prueba de software?](https://www.ibm.com/mx-es/topics/software-testing)
- [¿Que es SDLC?](https://aws.amazon.com/es/what-is/sdlc/#:~:text=El%20ciclo%20de%20vida%20del,crear%20software%20de%20alta%20calidad.)
