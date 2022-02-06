import Link from 'next/link'
import slugify from 'slugify'
import { useRouter } from 'next/router'

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

import { makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import TemplateDeafult from '../src/templates/Default'
import Card from '../src/components/Card'
import dbConnect from '../src/utils/dbConnect'
import ProductsModel from '../src/models/products'
import { formatCurrency } from '../src/utils/currency'
import { useState } from 'react'


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
  productLink: {
    textDecoration: 'none !important'
  }
}))


const Home = ({ products }) => {
  const classes = useStyles()
  const router = useRouter()

  const [search, setSearch] = useState()

  const handleSubmitSearch = () => {
    router.push({
      pathname: `/search/${search}`,
    })
  }

  return (
    <TemplateDeafult>
      <Container maxWidth="md">
        <Typography component="h1" variant="h3" align='center' color="textPrimary">
          O que deseja encontrar?
        </Typography>
        <Paper className={classes.searchBox}>
          <InputBase
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Ex.: iPhone 12 com garantia'
            fullWidth />
          <IconButton onClick={handleSubmitSearch}>
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
          {
            products.map(product => {

              const category = slugify(product.category).toLowerCase()
              const title = slugify(product.title).toLowerCase()

              return (

                <Grid item key={product._id} xs={12} sm={6} md={4}>
                  <Link href={`/${category}/${title}/${product._id}`}>
                    <a className={classes.productLink}>
                      <Card
                        image={`/uploads/${product.files[0].name}`}
                        title={product.title}
                        subtitle={formatCurrency(product.price)}
                      />
                    </a>
                  </Link>
                </Grid>
              )
            })
          }

        </Grid>
      </Container>
    </TemplateDeafult>
  )
}

export async function getServerSideProps() {
  await dbConnect()

  const products = await ProductsModel.aggregate([{
    $sample: { size: 6 }
  }])

  return {
    props: {
      products: JSON.parse(JSON.stringify(products))
    }
  }
}

export default Home