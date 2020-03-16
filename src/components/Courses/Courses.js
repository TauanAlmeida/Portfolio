import React, { useEffect } from 'react';
import { Container, Button, Percentage } from './styles';
import CountUp from 'react-countup';

const io = new IntersectionObserver(entries => {
  entries.forEach((entry) => {
  let { progress } = entry.target.dataset
  if (entry.intersectionRatio !== 0){
      entry.target.classList.add(`${progress}`)
  }
})
})

export default function Courses(props) {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-progress]')
    elements.forEach((element) =>{
      io.observe(element)
    })
  }, [])

  return (
    <Container Image={props.Image}>
        <p>{props.title}</p>
        <h5>{props.desc}</h5>
        <div className="progress">
            <div style={{width: `${props.percent}%`}} data-progress="progress-bar" className="bg-prime" aria-valuenow={props.percent} aria-valuemin="0" aria-valuemax="100">
            <Percentage>
              <CountUp
                start={0} 
                end={props.percent}
                duration={5}
              />
              %
              </Percentage>
            </div>
        </div>
        <Button>
            <a target="_blank" rel="noopener noreferrer"  href={props.link}>Saiba mais</a>
        </Button>
    </Container>
  );
}
