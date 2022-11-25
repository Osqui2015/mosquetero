import React from 'react'
import Carousel from '../../components/Carousel'


const BlogTwo = () => {
  return (
    <>
    <div>
    <Carousel/>
    </div>
    <div className="card-body text-white divtituloblog"   >
        <p className="fs-3 fw-bold">El WikiBlog de tus Artistas </p>                
    </div>
<div class="container">
<div class="row">
    <div class="col sm-12 md-6">
    <div class="card mb-3">
    <div class="row g-0">
    <div class="col-md-4">
      <img src="/nahuelpennisi.png" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Nahuel Pennisi</h5>
        <p class="card-text">Nahuel Pennisi, talentoso guitarrista, cantante y compositor que se ha transformado en uno de los intérpretes más importantes de Argentina, secundado por su sólida banda, nos llevará en un recorrido por todas aquellas melodías que todos queremos volver a escuchar. El Sábado 17 de Diciembre en el horario de las 20:00 hs., sobre el prestigioso escenario del Teatro Ópera tenemos entonces una cita imperdible con su particular voz.</p>
        <p class="card-text"><small class="text-muted"></small></p>
      </div>
    </div>
    </div>
    </div>
    
    <div class="card mb-3">
    <div class="row g-0">
    <div class="col-md-4">
      <img src="/ciro.jpg" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Ciro y Los Persas</h5>
        <p class="card-text">¡Ciro y Los Persas comienzan el año en Mar del Plata! Como es costumbre cada verano, Ciro vuelve a Mar del Plata. La cita será el sábado 28 de enero nuevamente en el Polideportivo Islas Malvinas.</p>
        <p class="card-text"><small class="text-muted"></small></p>
      </div>
    </div>
    </div>
    </div>
    </div>
    
    <div class="col sm-12 md-6">
    <div class="clearfix">
  <img src="/ciro.jpg" class="col-md-6 float-md-end mb-3 ms-md-3" alt="..."/>

  <p>
    A paragraph of placeholder text. We're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.
  </p>

  <p>
    As you can see the paragraphs gracefully wrap around the floated image. Now imagine how this would look with some actual content in here, rather than just this boring placeholder text that goes on and on, but actually conveys no tangible information at. It simply takes up space and should not really be read.
  </p>

  <p>
    And yet, here you are, still persevering in reading this placeholder text, hoping for some more insights, or some hidden easter egg of content. A joke, perhaps. Unfortunately, there's none of that here.
  </p>
</div>
    </div>
    </div>
  </div>

</>             
  )
}

export default BlogTwo