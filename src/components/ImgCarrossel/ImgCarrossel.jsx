import './ImgCarrossel.css'
import Carousel from 'react-bootstrap/Carousel';

function ImgCarrossel() {
    return (
        <div className='ctn-carrossel'>
            <Carousel>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
                        alt="Imagem #1"
                    />
                    <Carousel.Caption>
                        <h3>Legenda para o primeiro slide (opcional)</h3>
                        <p>Texto de exemplo para a primeira imagem (opcional)</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
                        alt="Imagem #2"
                    />
                    <Carousel.Caption>
                        <h3>Legenda para o segundo slide (opcional)</h3>
                        <p>Texto de exemplo para a segunda imagem (opcional)</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default ImgCarrossel;