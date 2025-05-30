# Automax

Este proyecto consiste en el desarrollo de un sitio web para la empresa "Automax". El objetivo es promocionar sus vehiculos de renta a través de una plataforma web que permita mostrar su catálogo, información de contacto y detalles de la empresa. 

## Guía de inicio

Las siguientes instruccinones te permitirán ejecutar el proyecto en tu máquina local mediante Docker.

### Requisitos

Tener instalado lo siguiente:

```
# Docker 
sudo apt update && sudo apt upgrade -y 
sudo apt install -y docker.io

```

### Instalación y ejecución

Para ejecutar el proyecto, sigue los siguientes pasos:

1. **Descargar la imagen desde Docker Hub**
```
docker pull isaacdckr61/appweb-dockerizada
```
2. **Ejecutar el contenedor**
```
docker run -p 8888:8888 isaacdckr61/appweb-dockerizada.
```

Esto levantará automáticamente el servidor y la página estará disponible en  http://localhost:8888

## Uso

Al entrar a http://localhost:8888 este mostrará la página de incio.
En la parte superior se encuentra un menú de navegación con los siguinetes botones: 

* Inicio: Lleva a la página principal donde se presentan los vehículos disponibles.
* Acerca de nosotos: Dirige a la página con la información sobre misión, visión y valores de la empresa.
* Contacto: Muestra los datos para localizar y comuncarse con Automax.
* Ofertas: Presenta las promociones y detalles de los vehículos en renta, incluyendo la página con el detalle de los primeros 3 autos disponibles.

Durante el desplazamiento en la página principal, el usuario encontrará secciones que como acerca de nosotro y ofertas, del mismo modo en las sección de vehículos al darle clic a uno de los tres primeros autos los redireccionará a la página de ofertas.

## Construido con

* [HTML] - Lenguaje de marcado utilizado para estructurar las páginas del sitio web.
* [CSS] - Lenguaje de estilos usado para diseñar visualmente las páginas.
* [JavaScript] - Lenguaje de programación utilizado para crear y configurar el servidor web.
* [Docker](https://www.docker.com/) - Usado para contenerizar y ejecutar la aplicación de forma portable.

## Autores

* **Isaac González Aguilera** - *368048* - [IsaacProg61](https://github.com/IsaacProg61 )
* **Andrés González Alonso** - *367600* - [andresgalonso](https://github.com/andresgalonso)
* **Mauricio Elías Navarrete Flores** - *367785* - [Mau1839](https://github.com/Mau1839)
* **Jazmin  Cruz González** - *367770* - [JazCrz194](https://github.com/JazminCrz194)
