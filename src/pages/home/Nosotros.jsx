import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Nosotros = () => {
  return (
<div><br /><h1 className='titunosotros'>NOSOTROS SOMOS RSHOW</h1>
  <CardGroup className='divnosotros'>
      <Card className='cardnosotros'>
        <Card.Img variant="top" src="/oscar.jpg" />
        <Card.Body>
          <Card.Title>Oscar Guerrero</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className='cardnosotros'>
        <Card.Img variant="top" src="/ber.webp" />
        <Card.Body>
          <Card.Title>Bernardita Zarate</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className='cardnosotros'>
        <Card.Img variant="top" src="/estefi.webp" />
        <Card.Body>
          <Card.Title>Estefania Avila</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
   </div>
  )
}

export default Nosotros