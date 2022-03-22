import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Character } from '../components/Character';
import { Button, CircularProgress, Container, Grid } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


interface Origin {
    name: string;
    url: string;
}

interface Location {
    name: string;
    url: string;
}

export interface ICharacter {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Origin;
    location: Location;
    image: string;
    episode: string[];
    url: string;
    created: Date;
}


export const Characters = () => {
    const [page, setPage] = useState<number>(1);

    const fetchCharacters = async ({ queryKey }: any) => {
        const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${queryKey[1]}`);
        const data = response.data;
        return data.results;
    };

    const { isLoading, isError, data } = useQuery(
        ['characters', page],
        fetchCharacters,
        { keepPreviousData: true, }
    );

    if (isLoading) {
        return <CircularProgress color="inherit" />;
    }

    if (isError) {
        return <h2>An error has occurred</h2>;
    }

    return (
        <Container sx={{ marginTop: 4 }}>
            <Grid container spacing={2}>
                {data.map((character: ICharacter) => (
                    <Grid item xs={12} sm={6} md={4} key={character.id} >
                        <Container >
                            <Character character={character} />
                        </Container>
                    </Grid>
                ))}
            </Grid>

            <Container sx={{ marginTop: 2, marginBottom: 2 }} >
                <Button
                    size="large"
                    sx={{ marginRight: 4 }}
                    variant="contained"
                    endIcon={<ArrowBackIcon />}
                    disabled={page === 1 ? true : false}
                    onClick={() => setPage(page - 1)}
                >
                    Previous
                </Button>

                <Button
                    size="large"
                    variant="contained"
                    endIcon={<NavigateNextIcon />}
                    disabled={page === 42 ? true : false}
                    onClick={() => setPage(page + 1)}
                >
                    Next Page
                </Button>
            </Container>
        </Container >
    );
};

