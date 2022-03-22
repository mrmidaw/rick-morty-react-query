import React, { FC } from 'react';
import { ICharacter } from '../pages/Characters';
import { Card, CardContent, CardMedia, Container, Typography } from '@mui/material';

interface IProps {
    character: ICharacter
}

export const Character: FC<IProps> = ({ character }) => {
    return (
        <Container>
            <Card sx={{ maxWidth: 250 }}>
                <CardMedia
                    component="img"
                    height="250"
                    image={character.image}
                    alt="person image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {character.name}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        Species: {character.species} - Gender: {character.gender}
                    </Typography>

                    <Typography variant="overline" color="text.secondary">
                        Last seen on:
                        <Typography variant='body2'>{character.location.name}</Typography>
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
};