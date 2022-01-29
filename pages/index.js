import {
    Box,
    Button,
    Container,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    IconButton,
    InputBase,
    Paper,
    Typography,
} from '@material-ui/core'

import SearchIcon from '@material-ui/icons/Search'
import { makeStyles } from '@material-ui/core/styles'
import TemplateDeafult from '../src/templates/Default'


const useStyles = makeStyles((theme) => ({
    searchContainer: {
        padding: theme.spacing(8, 10, 6)
    },
    searchBox: {
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing(0, 2),
        marginTop: 20,
    },
    cardMedia: {
        paddingTop: "56%"
    }
}))


const Home = () => {

    const classes = useStyles()

    return (
        <TemplateDeafult>
            <Container maxWidth="md" className={classes.searchContainer}>
                <Typography component="h1" variant="h3" align='center' color="textPrimary">
                    O que deseja encontrar?
                </Typography>
                <Paper className={classes.searchBox}>
                    <InputBase placeholder='Ex.: iPhone 12 com garantia' fullWidth />
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </Container>

            <Container maxWidth="md" className={classes.cardGrid}>
                <Typography component="h2" variant="h4" align='center' color="textPrimary">
                    Destaques
                </Typography>
                <br />
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia
                                className={classes.cardMedia}
                                image="https://source.unsplash.com/random"
                                title="Título da imagem"
                            />
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Produto X
                                </Typography>
                                <Typography>
                                    R$ 60,00
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia
                                className={classes.cardMedia}
                                image="https://source.unsplash.com/random"
                                title="Título da imagem"
                            />
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Produto X
                                </Typography>
                                <Typography>
                                    R$ 60,00
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia
                                className={classes.cardMedia}
                                image="https://source.unsplash.com/random"
                                title="Título da imagem"
                            />
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Produto X
                                </Typography>
                                <Typography>
                                    R$ 60,00
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </TemplateDeafult>
    )
}

export default Home