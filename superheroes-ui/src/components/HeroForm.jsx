import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveHero } from '../services/hero-service'

const HeroForm = () => {
    const [alias, setAlias] = useState('');
    const [name, setName] = useState('');
    const [ability, setAbility] = useState('');
    const [teamID, setTeamID] = useState(0);

    const navigate = useNavigate();

    const handleAliasChange = (event)=> {
        setAlias(event.target.value);
    }

    const handleNameChange = (event)=>{
        setName(event.target.value);
    }

    const handleAbilityChange = (event)=>{
        setAbility(event.target.value)
    }

    const handleTeamChange = (event)=>{
        setTeamID(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let hero = {};
        hero.alias = alias;
        hero.name = name;
        hero.superpower = ability;
        hero.teamID = teamID;
        console.log(hero);
    
        saveHero(hero)
       .then(res => {
          setAbility('');
          setAlias('');
          setName('');
          setTeamID(0);
          navigate("/");
          })
        .catch(err=>{
           console.log(err);
          })
      }

  return (
    <Row className='heroForm'>
        <Form>
            <Form.Group className="mb-3" controlId="alias">
                <Form.Label>Hero Alias: </Form.Label>
                <Form.Control type="text" placeholder="Hero alias" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Hero Name: </Form.Label>
                <Form.Control type="text" placeholder="Hero name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ability">
                <Form.Label>Hero Ability: </Form.Label>
                <Form.Control type="text" placeholder="Hero ability" />
            </Form.Group>
            <Form.Select aria-label="Team ID">
                <option>Team ID</option>    
                <option value="1">One</option>    
                <option value="2">Two</option>    
                <option value="3">Three</option>  
            </Form.Select>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
            </Button>
        </Form>
    </Row>
  )
}

export default HeroForm