import React, { useEffect, useState, useCallback } from 'react';
import html from '../../assets/skills-img/html5.png' 
import vue from '../../assets/skills-img/vue.jpg'
import react from '../../assets/skills-img/react.png'
import css from '../../assets/skills-img/css3.png'
import bootstrap from '../../assets/skills-img/bootstrap.jpg'
import materialize from '../../assets/skills-img/materialize.png'
import node from '../../assets/skills-img/nodejs.png'
import mysql from '../../assets/skills-img/mysql.svg'
import mongo from '../../assets/skills-img/mongodb.png'
import git from '../../assets/skills-img/git.png'
import figma from '../../assets/skills-img/figma.png'
import styled from '../../assets/skills-img/styled.png'
import laravel from '../../assets/skills-img/laravel.jpg'
import { CircleWrapper } from './styles';
import Circle from '../Circle/Circle'

export default function EcoSystem() {
    const [items, setItems] = useState([])

    const handleItems = useCallback(() => {
        const circle3 = document.querySelectorAll('.circle3')
        const circle2 = document.querySelectorAll('.circle2')
        const circle1 = document.querySelectorAll('.circle1')
        setItems([...circle1, ...circle2, ...circle3])
    }, [])

    const handleAnimation = () => {
        items.map((item, index) => {
            item.classList.add('FoiPorra')
            console.log(item)
        })
    }

    useEffect(()=>{
        handleItems()
    },[handleItems])
    
    useEffect(() => {
        handleAnimation()
    })
   
  return (
    <CircleWrapper>
    <Circle scale={400}/>
    <Circle scale={250}/>
    <Circle scale={100}/>
    <div className="icons">
        <span>
        <a className="circle3" href="/"><img src={vue} alt=""/></a>
        <a className="circle3" href="/"><img src={react} alt=""/></a>
        <a className="circle3" href="/"><img src={bootstrap} alt=""/></a>
        <a className="circle3" href="/"><img src={materialize} alt=""/></a>
        <a className="circle3" href="/"><img src={html} alt=""/></a>
        <a className="circle3" href="/"><img src={css} alt=""/></a>
        <a className="circle3" href="/"><img src={styled} alt=""/></a>
        </span>
        <span>
        <a className="circle2" href="/"><img src={laravel} alt=""/></a>
        <a className="circle2" href="/"><img src={node} alt=""/></a>
        <a className="circle2" href="/"><img src={mongo} alt=""/></a>
        <a className="circle2" href="/"><img src={mysql} alt=""/></a>
        </span>
        <span>
        <a className="circle1" href="/"><img src={git} alt=""/></a>
        <a className="circle1" href="/"><img src={figma} alt=""/></a>
        </span>
    </div>
    </CircleWrapper>
  );
}
