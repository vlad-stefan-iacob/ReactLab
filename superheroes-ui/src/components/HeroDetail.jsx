import React from 'react'
import images from '../index'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const[counter, setCounter] = useState(0);

const incrementCounter =()=>{
      setCounter(counter+1);
      props.parentCount(props.info.alias);
}

const HeroDetail = (props) => {
    return (
      <Card >
        <div className="imgContainer">
          <Card.Img variant="top" src={images[props.info.alias.replaceAll(/\s/g, '')]} width="150px" />
        </div>
      <Card.Body >
        <Card.Title >Alias: {props.info.alias}</Card.Title>
        <Card.Text >Name: {props.info.name}</Card.Text>
        <Row>
          <Col><Button variant="primary" onClick={incrementCounter}>Like</Button></Col>
          <Col>{counter > 0  && <Card.Text >Likes: {counter}</Card.Text > }</Col>
        </Row>
        
        <Card.Text>Likes: {counter}</Card.Text>
      </Card.Body>
    </Card>
    )
}
  

export default HeroDetail