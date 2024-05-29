import Btn from "../btn"
import styles from "./index.module.css"
import styled, { keyframes } from 'styled-components';
import { useState, useEffect } from 'react';

function MainHome() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [previousIndex, setPreviousIndex] = useState(-1);  // State to keep track of the previous index for fade-out

    const frases = [
        "Experiencie o conforto e a elegância <br/> de viver em um espaço feito <br/> especialmente para você",
        "Design personalizado para cada cômodo <br/> da sua casa, criando ambientes <br/> únicos e funcionais",
        "Crie o lar dos seus sonhos com móveis <br/> que se adaptam perfeitamente <br/>ao seu estilo de vida",
        "Do conceito à realidade: <br/> transforme suas ideias em móveis <br/> personalizados e de alta qualidade",
        "Torne cada canto da sua casa especial <br/> com nossos móveis planejados <br/>feitos sob medida para você"
    ];

    const backgrounds = [
        "/img/bg_1.avif",
        "/img/bg_2.avif",
        "/img/bg_3.avif",
        "/img/bg_1.avif",
        "/img/bg_2.avif"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setPreviousIndex(currentIndex); // Set the current index as the previous before changing it
            setCurrentIndex((prevIndex) => (prevIndex + 1) % frases.length);
        }, 10000); // 10000ms = 10s

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, [currentIndex, frases.length]);

    const fadeIn = keyframes`
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    `;

    const fadeOut = keyframes`
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    `;

    const StyledBgContent = styled.div`
        width: 100%;
        height: 100%;
        position: relative; /* Ensure the gradient overlay stays within the background */
        
        & .background {
            width: 100%;
            height: 100%;
            background-color: #cccccc; 
            background-position: center; 
            background-repeat: no-repeat; 
            background-size: cover; 
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0; /* Initial state for all backgrounds */
            transition: opacity 1s ease-in-out; /* Smooth transition */
        }

        & .fade-in {
            animation: ${fadeIn} 2s ease-in-out forwards;
        }

        & .fade-out {
            animation: ${fadeOut} 2s ease-in-out forwards;
        }

        & .gradient {
            position: absolute; /* Overlay on top of the background */
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgb(0,0,0);
            background: linear-gradient(180deg, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.64) 38%, rgba(0,0, 0,0.10) 100%);
            z-index: 2; 
        }
    `;


    return (
        <main className={styles.main}>
           <StyledBgContent>
                {backgrounds.map((background, index) => (
                    <div
                        key={index}
                        className={`background ${index === currentIndex ? 'fade-in' : index === (currentIndex + backgrounds.length - 1) % backgrounds.length ? 'fade-out' : ''}`}
                        style={{
                            backgroundImage: `url(${background})`,
                        }}
                    />
                ))}
                <div className="gradient" />
            </StyledBgContent>
            <div className={styles.content_txt}>
                <h1>Sete Ambientes Planejados</h1>
                <ul className={styles.content_frase}>
                    {frases.map((frase, index) => (
                        <li
                            key={index}
                            className={
                                index === currentIndex
                                    ? styles.frase_on
                                    : index === (currentIndex + frases.length - 1) % frases.length
                                        ? styles.frase_of
                                        : styles.frase
                            }
                        >
                            <p dangerouslySetInnerHTML={{ __html: frase }}></p>
                        </li>
                    ))}
                </ul>
                <Btn text="Contato" size={20} bg="var(--special-txt)" />
            </div>
        </main>
    )
}

export default MainHome