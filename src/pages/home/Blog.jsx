import React from 'react';
import {Card,CardGroup} from 'react-bootstrap';
import Carousel from '../../components/Carousel';

import "../../css/Archivo.css"

const Blog = () => {
  return (
    <>
    <div>
    <Carousel/>
    </div>
    <div className="card-body text-white divtituloblog"   >
                         
                <p className="fs-3 fw-bold">El WikiBlog de tus Artistas </p>                
                </div>
            {/* <br/> */}
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="/nahuelpennisi.png" />
        <Card.Body>
          <Card.Title>Nahuel Pennisi</Card.Title>
          <Card.Text>
          Nahuel Pennisi (nacido el 19 de octubre de 1990) es un músico y compositor argentino .
          Ha lanzado tres álbumes de estudio,ganó tres premios Gardel y recibió tres nominaciones a los premios Grammy Latino.
          Pennisi nació el 19 de octubre de 1990 en Buenos Aires , Argentina . 
          Es ciego de nacimiento y mostró interés por la música desde temprana edad, 
          comenzó a experimentar con un teclado a los cuatro años, luego aprendió a tocar el bajo y la guitarra por sí mismo, 
          formando una profunda conexión con la guitarra siendo el instrumento que usa habitualmente. 
          juega en su música. A los 16 años, cuando aún estaba en la escuela secundaria, 
          comenzó a tocar en las calles de Buenos Aires convirtiéndose en músico de tiempo completo después de terminar la escuela secundaria.

          </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
      <Card>
        <Card.Img variant="top" src="/divididos.jpg" />
        <Card.Body>
          <Card.Title>Divididos</Card.Title>
          <Card.Text>
          Divididos es un grupo musical de Argentina, fundado en el año 1988 por Ricardo Mollo y Diego Arnedo,
        exintegrantes de MAM junto a Omar Mollo y de Sumo, cuando esta se disolvió por la muerte de su líder, 
        Luca Prodan. En sus trabajos, han incursionado en estilos musicales locales como el folklore.
         Ha sido galardonada en múltiples ocasiones tanto de forma grupal como individual. 
         En el 2011 fue ganadora del Premio Gardel de Oro (la distinción más destacada de la música nacional) en reconocimiento a su exitosa trayectoria,
        premio que ha sido entregado solo diecinueve veces a distintos artistas tales como Luis Alberto Spinetta, 
        Charly García, León Gieco, Mercedes Sosa y Gustavo Cerati, entre otros. 
        Tras la disolución de Sumo debido a la muerte de su cantante Luca Prodan el 22 de diciembre de 1987, el resto de sus integrantes Ricardo Mollo, 
        Diego Arnedo, Roberto Pettinato, Alberto "Superman" Troglio y Germán Daffunchio deciden reflexionar acerca del futuro de la banda.
        Daffunchio y Timmy Mackern (productor de Sumo y amigo de Luca) vuelven a las sierras cordobesas y el resto de la banda se queda ensayando en una sala de El Palomar. El 5 de marzo de 1988,
        ya sin Luca Prodan en escena, Sumo se presenta en el Chateau Rock, con Daffunchio, Mollo, Pettinato, Arnedo y Troglio.
          Todos los integrantes vuelven a Buenos Aires, menos Germán Daffunchio, quien se queda junto con Timmy en Córdoba. 
        Al poco tiempo Pettinato se va a España y forma una banda llamada Pachuco Cadáver, 
        Troglio decide no seguir ensayando en Palomar.Ricardo Mollo (guitarra) y Diego Arnedo (bajo), 
        junto al baterista Gustavo Collado (ex La Sobrecarga) forman «La División» que luego cambiaría de nombre para pasar a ser «Divididos». 
        Ellos se juntan por primera vez en la casa de Poppy Manzanedo, donde vivía Gustavo Collado, 
        Manzanedo fue el primer mánager que tuvo Divididos, firmó el contrato con CBS para grabar su primer disco 40 dibujos ahí en el piso.
        El viernes 10 de junio de 1988 comienzan a tocar su repertorio en vivo en su primer recital,
        dado en el Rouge Pub de Flores incluyendo algunos temas de Sumo como "Divididos por la felicidad", 
        "Mañana en el abasto" y "Mejor no hablar de ciertas cosas". Divididos movía gran parte del público que seguía a Sumo. 
        El audio del concierto completo se puede encontrar en Internet. 
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
      <Card>
        <Card.Img variant="top" src="/ciro.jpg" />
        <Card.Body>
          <Card.Title>Ciro y Los Persas</Card.Title>
          <Card.Text>
          Ciro y los Persas es un grupo musical de Argentina, formado en 2009 y liderado por el cantante y compositor
          Andrés Ciro Martínez, quien fue el líder del grupo musical Los Piojos. 
           Es considerado como uno de los mejores grupos de rock de Argentina de la actualidad.
           El grupo ha ganado varios premios durante su carrera, entre ellos dos Premios Carlos Gardel.
           La banda fue formada a mediados de 2009, dos meses después de la despedida de Los Piojos en el Estadio de River Plate ante más de 65000 personas. 
           Según Ciro, él no quería caer en un estado de «depresión» por la ruptura de Los Piojos,
          es por eso que junto con el guitarrista Juan Manuel Gigena Ábalos, 
          (guitarrista que también se fue a probar a Los Piojos después de la salida de Piti Fernández) 
          decidieron armar el grupo «Los Persas». Luego se sumaría «Broder» Bastos, ex guitarrista de Bossa n' Stones, Bossa n' Marley y Bossa n' Roses, Julián «Lulo» Isod, 
          ex baterista de un trío llamado Tres Buen Ensamble y de la antigua banda de pop rock Virus, Miguel «Chucky» de Ípola, 
          tecladista que estuvo en Los Piojos un buen tiempo y después de la ruptura se unió a la banda de Ciro, años después seguiría su carrera de solista, y Juan José Gaspari,
          que se alejaría de la banda para seguir su carrera en Jóvenes Pordioseros y darle lugar a Rodrigo Pérez.
            La banda tuvo sus primeros recitales en diciembre de 2009 en Rosario y Córdoba. 
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
    </CardGroup>

    </>
  )
}

export default Blog