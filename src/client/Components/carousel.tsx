import React from 'react';
import {useSpring, animated } from 'react-spring';

function CardInfo(props){

    const style = useSpring({opacity: 1, from: {opacity: 0}});
    return(
   <animated.div className="b-card-info " style={style}>
       <p className="b-card-title">{props.title}</p>
       <p className="b-card-subTitle">{props.subTitle}</p>
       <a href={props.link} target="_blank" rel="noopener noreferrer">View</a>
   </animated.div>
    )
}
export default CardInfo;

// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';

// // import thedock from '../photos/thedock.jpg'
// // import inlinked from '../photos/inlinked.jpg';
// // import code from '../photos/code.jpg';
// // import github from '../public/photos/github.png';
// // import pcpic from '../photos/pcpic.jpg';
// // import linkedin from '../public/photos/linkedin.png';
// import Card from './card'

// class Carousel extends React.Component<IItemsProps> {

//     constructor(props: ICarouselProps){
//         super(props );
//         this.state={
//             items: [
//                     {
//                     id: 0,
//                     title: "GitHub",
//                     subtitle:"My projects and Repostories",
//                     imgsrc: code,
//                     link: "https://github.com/Matthew-Brogan/",
//                     selected: false
//                     },
            
//                     {
//                         id: 1,
//                         title: "My resume!",
//                         subtitle: "Lets build something great together",
//                         imgsrc: pcpic,
//                         link: "../photos/Skills-resume.pdf",
//                         selected: false
//                     },
//                     {
//                         id: 2,
//                         title:"My LinkedIn",
//                         subtitle: "Add me! Lets connect!",
//                         imgsrc: inlinked,
//                         link: "https://www.linkedin.com/in/matt-brogan-aba6271a8/",
//                         selected: false
//                     }
//                 ]

//         }
//     }

//     handleCardClick = (id,card) => {
//         let items = [...this.state.items];

//         items[id].selected = items[id].selected ? false : true;

//         items.forEach(item => {
//             if(item.id !== id) {
//                 items[id].selected = false;
//             }
//         });
        
//         this.setState({
//             items
//         });

//     }
//     makeItems = (items) => {
//         return items.map(item => {
//             return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
//         })
//     }

//     render(){
//         return(
//            <Container  fluid={true}>
//                <Row className="b-display-cards justify-content-around" >
//                    {this.makeItems(this.state.items)}
//                </Row>
//            </Container>
//         );

//     }
// }

// export interface ICarouselProps{
//     items: IItemsProps[];
// }
// export interface IItemsProps{
//     id: number;
//     title: string;
//     subtitle:string;
//     imgsrc: object;
//     link: string;
//     selected: boolean;
// }

// export default Carousel;