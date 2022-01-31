import {
    Box,
    Button,
    Container,
    Grid,
    IconButton,
    InputBase,
    Paper,
    Typography,
} from '@material-ui/core'

import SearchIcon from '@material-ui/icons/Search'
import { makeStyles } from '@material-ui/core'

import TemplateDefault from '../../src/templates/Default'
import Card from '../../src/components/Card'

const useStyles = makeStyles((theme) => ({
    box: {
        backgroundColor: theme.palette.background.white,
        padding: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    searchBox: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: theme.spacing(0, 2),
        marginTop: 20,
    },

}))


const List = () => {
    const classes = useStyles()

    return (
        <TemplateDefault>

            <Container maxWidth="lg">

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Paper className={classes.searchBox}>
                            <InputBase placeholder='Ex.: iPhone 12 com garantia' fullWidth />
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12} spacing={3}>
                        <Box className={classes.box} textAlign='left'>
                            <Typography component="h6" variant="h6">
                                Anúncios
                            </Typography>
                            <Typography component="span" variant="subtitle2">
                                ENCONTRADOS 200 ANÚNCIOS
                            </Typography>
                            <br /><br />
                            <Grid container spacing={4}>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Card
                                        image={'https://source.unsplash.com/random'}
                                        title={'Produto X'}
                                        subtitle={'R$ 60,00'}
                                        actions={null}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Card
                                        image={'https://source.unsplash.com/random'}
                                        title={'Produto X'}
                                        subtitle={'R$ 60,00'}
                                        actions={null}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Card
                                        image={'https://source.unsplash.com/random'}
                                        title={'Produto X'}
                                        subtitle={'R$ 60,00'}
                                        actions={null}
                                    />
                                </Grid>
                            </Grid>

                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </TemplateDefault>
    )
}

export default List