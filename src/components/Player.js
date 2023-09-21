import React from 'react'
import Card from 'react-bootstrap/Card';

const Player = ({ propName }) => {
  let { name, team, nationality, jerseyNumber, age, imageUrl } = propName
  let imageStyle = { height: '18rem', objectFit: "cover" }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img style={imageStyle} variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Team: {team}
        </Card.Text>
        <Card.Text>
          Nationality: {nationality}
        </Card.Text>
        <Card.Text>
          Jersey Number: {jerseyNumber}
        </Card.Text><Card.Text>
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
Player.defaultProps = {
  propName: {
    name: "Unknown",
    team: "Unknown",
    nationality: "Unknownn",
    jerseyNumber: "Unknown",
    age: "Unknown",
    imageUrl: "https://us.123rf.com/450wm/salamatik/salamatik1712/salamatik171200045/92143748-ic%C3%B4ne-de-visage-de-profil-anonyme-silhouette-grise-avatar-par-d%C3%A9faut-masculin-photo-placeholder.jpg"
  }
};

export default Player