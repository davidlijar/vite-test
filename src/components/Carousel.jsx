import data from './data.json'

const images = [
  'images/slide (4).jpg',
  'images/slide (8).jpg',
  'images/slide (6).jpg',
  'images/slide (9).jpg',
  'images/slide (3).jpg',
]

const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div
          className="carousel-inner"
          style={{ width: '60em', marginTop: '5rem' }}
        >
          <div className="carousel-item active">
            <img
              src={data.carousel.firstSlide}
              style={{ width: '45%', height: '16rem' }}
              alt="..."
            />
          </div>
          {data.carousel.restSlides.map((img) => (
            <div key={img} className="carousel-item">
              <img
                src={img}
                className="d-block"
                style={{ width: '45%', height: '16rem' }}
                alt="..."
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default Carousel
