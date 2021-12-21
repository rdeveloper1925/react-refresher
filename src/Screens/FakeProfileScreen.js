import React, {useEffect, useState} from 'react';
import {Col, Card, Container} from 'react-bootstrap';
import axios from 'axios';

const FakeProfileScreen=()=>{
    return <Profile/>
}

const Profile = props =>{
    //will use fake api to fetch data
    const [display, setDisplay]=useState("Loading your fake profile... please wait");

    useEffect(()=>{
        window.navigator.geolocation.getCurrentPosition(
            position=>console.log(position),
            error=>console.log(error)
        );

        axios.get("https://randomuser.me/api/")
            .then(response=>{
                console.log(response.data.results);
                let fetchedProfile=response.data.results;
                setDisplay(fetchedProfile.map(profile=>{
                    return (
                        <ProfileCard
                            key={new Date().getTime()}
                            picture={profile.picture.large}
                            name={profile.name.title+" "+profile.name.first+" "+profile.name.last}
                            email={profile.email}
                            gender={profile.gender}
                            phone={profile.phone}
                            location={profile.location.city+", "+profile.location.state+", "+profile.location.country}
                        />
                    )
                }));
            })
            .catch(error=>console.log(error));
    },[]);

    return (
        <Container >
            {display}
        </Container>
    );

}

const ProfileCard=props=>{
    return (
        <Col md='5' xs='8'>
            <Card>
                <Card.Img variant="bottom"  src={props.picture} />
                <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    <p>Email: {props.email}</p>
                    <p>Gender: {props.gender}</p>
                    <p>Cell: {props.phone}</p>
                    <p>Location: {props.location}</p>
                    <p>Cell: {props.phone}</p>
                </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default FakeProfileScreen;