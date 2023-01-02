import { Nav, Container, Carousel} from 'react-bootstrap';

function carousel () {

  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="image/pexels-jiawei-cui-2310899.jpg"
          alt="First slide"
          style={{ height:300 }}
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="image/pexels-asad-photo-maldives-1024970.jpg"
          alt="Second slide"
          style={{ height:300 }}
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="image/pexels-afta-putta-gunawan-1250346.jpg"
          alt="Third slide"
          style={{ height:300 }}
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )

}

export default carousel