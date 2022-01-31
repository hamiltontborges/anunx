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
import { makeStyles } from '@material-ui/core/styles'
import TemplateDeafult from '../src/templates/Default'
import Card from '../src/components/Card'


const useStyles = makeStyles((theme) => ({

  searchBox: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(0, 2),
    marginTop: 20,
  },
  cardGrid: {
    marginTop: 50
  },
}))


const Home = () => {

  const classes = useStyles()

  return (
    <TemplateDeafult>
      <Container maxWidth="md">
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

      <Container maxWidth="lg" className={classes.cardGrid}>
        <Typography component="h2" variant="h4" align='center' color="textPrimary">
          Destaques
        </Typography>
        <br />
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              image={'https://source.unsplash.com/random'}
              title={'Produto X'}
              subtitle={'R$ 60,00'}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              image={'https://source.unsplash.com/random'}
              title={'Produto X'}
              subtitle={'R$ 60,00'}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              image={'https://source.unsplash.com/random'}
              title={'Produto X'}
              subtitle={'R$ 60,00'}
            />
          </Grid>

        </Grid>
      </Container>
    </TemplateDeafult>
  )
}

export default Home