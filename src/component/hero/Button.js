import React, { useEffect } from 'react';
import './test.css';

const Button = ({ children }) => {
    useEffect(() => {
        const span = document.querySelectorAll('.span-mother');
        const span2 = document.querySelectorAll('.span-mother2');
        span.forEach((span, idx) => {
            const letters = span.textContent.split('');
            span.textContent = '';
            letters.forEach((letter, i) => {
                const spanLetter = document.createElement('span');
                spanLetter.textContent = letter;
                spanLetter.style.transition = 'all 0.2s cubic-bezier(0,.53,.47,1)';
                spanLetter.style.transitionDelay = `${i * 0.03}s`;
                span.appendChild(spanLetter);
            });
        });
        span2.forEach((span, idx) => {
            const letters = span.textContent.split('');
            span.textContent = '';
            letters.forEach((letter, i) => {
                const spanLetter = document.createElement('span');
                spanLetter.textContent = letter;
                spanLetter.style.transition = 'all 0.2s cubic-bezier(0,.53,.47,1)';
                spanLetter.style.transitionDelay = `${i * 0.03}s`;
                span.appendChild(spanLetter);
            });
        });
    }, []);


    return(
    <button>
        <span className="span-mother">
            {children}
        </span>
        <span className="span-mother2">
            {children}
        </span>
    </button>
    )
};

export default Button;
