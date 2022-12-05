import React from "react";

import { Row, Container, Col, Card } from "react-bootstrap";
import { Carousels } from "../../components/Carousels";

const BlogTwo = () => {
  return (
    <>
      <div>
        <Carousels />
      </div>
      <div className="card-body text-white divtitleblog">
        <p className="fs-3 fw-bold">El WikiBlog de tus Artistas </p>
      </div>
      <Container>
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <Row>
          <Col xs={12} md={8}>
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="https://noticiasargentinas.com/images/NA/Contenidos/1080x1080_px.jpg"
                    className="img-fluid rounded"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">David Guetta</h5>
                    <p className="card-text">
                      Pierre David Guetta(París, 7 de noviembre de 1967) es un
                      DJ, compositor y productor francés. Actualmente, ocupa el
                      puesto #2 según la encuesta realizada por DJ Magazine.Se
                      inició como tal en varias discotecas durante las décadas
                      de 1980 y de 1990, antes de fundar Gum Productions y
                      lanzar su primer álbum: Just a Little More Love (2002) Se
                      inició como tal en varias discotecas durante las décadas
                      de 1980 y de 1990, antes de fundar Gum Productions y
                      lanzar su primer álbum: Just a Little More Love (2002)
                    </p>

                    <details>
                      <summary>Ver fecha de concierto...</summary>
                      <p>
                        El Sábado 17 de Diciembre en el horario de las 20:00 hs.
                        sobre el prestigioso escenario del Teatro Ópera tenemos
                        entonces una cita imperdible con su particular voz.
                      </p>
                    </details>
                    <p className="card-text">
                      <small className="text-muted"></small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="https://fmlike.com.ar/wp-content/uploads/2020/11/123852513_171621364604153_3230785696513528073_n-1024x1024.jpg"
                    class="img-fluid rounded"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Dua Lipa</h5>
                    <p className="card-text">
                      Pierre David Guetta(París, 7 de noviembre de 1967) es un
                      DJ, compositor y productor francés. Actualmente, ocupa el
                      puesto #2 según la encuesta realizada por DJ Magazine.Se
                      inició como tal en varias discotecas durante las décadas
                      de 1980 y de 1990, antes de fundar Gum Productions y
                      lanzar su primer álbum: Just a Little More Love (2002) Se
                      inició como tal en varias discotecas durante las décadas
                      de 1980 y de 1990, antes de fundar Gum Productions y
                      lanzar su primer álbum: Just a Little More Love (2002)
                    </p>

                    <details>
                      <summary>Ver fecha de concierto...</summary>
                      <p>
                        El Sábado 17 de Diciembre en el horario de las 20:00 hs.
                        sobre el prestigioso escenario del Teatro Ópera tenemos
                        entonces una cita imperdible con su particular voz.
                      </p>
                    </details>
                    <p className="card-text">
                      <small className="text-muted"></small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col className="d-none d-md-block">
            <Card>
              <Card.Img
                className="img-fluid rounded div-publi p-2"
                variant="top"
                src="rock.jpg"
              />
              <Card.Img
                className="img-fluid rounded div-publi p-2"
                variant="top"
                src="40.jpg"
              />
            </Card>
          </Col>
        </Row>
      </Container>
      ;
    </>
  );
};

export default BlogTwo;
