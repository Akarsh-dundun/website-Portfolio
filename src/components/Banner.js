import { useState,useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Banner = () => {
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNumber, setLoopNumber] = useState(0);
    const toRotate = ["ML Engineer","Web Designer","EE Engineer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNumber % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }

        if (!isDeleting && updatedText ===fullText){
            setIsDeleting(true);
            setDelta(period);            
        }else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNumber(loopNumber + 1);
            setDelta(500);
        }
    }

    return (
        
            <section className="banner" id="home">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} xl={7}>
                            <span className="tagline">Welcome to my Portfolio</span>
                            <h1>{`Hi I'm Akarsh Gupta `}<span className="wrap">{text}</span></h1>
                            <p>{"A passionate and creative web designer with a keen eye for detail and a love for crafting beautiful and functional digital experiences.I have honed my skills in web design, back-end development and machine learning. I strive to create visually stunning websites that not only captivate users but also provide seamless navigation and an intuitive user interface."}</p>
                            <button href='contact' onClick={() => console.log('connected')}>Let's Connect<ArrowRightCircle size={25} /></button>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <img src={headerImg} alt="Header Img" />
                        </Col>  
                    </Row>
                </Container>
            </section>  
    )
}