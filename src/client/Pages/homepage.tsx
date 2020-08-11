import React from 'react';

import Hero from '../components/hero';
import Carousel from '../Components/carousel';
import { createPropertySignature } from 'typescript';


function HomePage(props: any){

    return(
        <div>
            <Hero title = {props.title} subTitle = {props.subTitle} text = {props.text} />
        
        <Carousel />
        </div>
        
    
    );
}


export default HomePage;