import './ImgCarrossel.css'
import Carousel from 'react-bootstrap/Carousel';
import Animais1 from '../../assets/animais/animais1.jpg';
import Animais2 from '../../assets/animais/animais2.jpg';
import Animais3 from '../../assets/animais/animais3.jpg';
import Animais4 from '../../assets/animais/animais4.jpg';
import Animais5 from '../../assets/animais/animais5.jpg';

function ImgCarrossel() {
    return (
        <div className='ctn-carrossel'>
            <Carousel>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src={Animais1}
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
                        src={Animais2}
                        alt="Imagem #2"
                    />
                    <Carousel.Caption>
                        <h3>Legenda para o segundo slide (opcional)</h3>
                        <p>Texto de exemplo para a segunda imagem (opcional)</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src={Animais3}
                        alt="Imagem #3"
                    />
                    <Carousel.Caption>
                        <h3>Legenda para o segundo slide (opcional)</h3>
                        <p>Texto de exemplo para a segunda imagem (opcional)</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src={Animais4}
                        alt="Imagem #4"
                    />
                    <Carousel.Caption>
                        <h3>Legenda para o segundo slide (opcional)</h3>
                        <p>Texto de exemplo para a segunda imagem (opcional)</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src={Animais5}
                        alt="Imagem #5"
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