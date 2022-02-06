import Link from 'next/link'
import slugify from 'slugify'

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
import ProductsModel from '../../src/models/products'
import { formatCurrency } from '../../src/utils/currency'


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
  productLink: {
    textDecoration: 'none !important'
  }

}))


const List = ({ products, query }) => {
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

        <Grid item xs={12} sm={12} md={12}>
          <Box className={classes.box}>
            <Typography component="h6" variant="h6">
              Anúncios
            </Typography>
            <Typography component="span" variant="subtitle2">
              ENCONTRADOS {products.length} ANÚNCIOS PARA O TERMO &quot;{query.toUpperCase()}&quot;
            </Typography>

          </Box>
        </Grid>

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
    </TemplateDefault>
  )
}

export async function getServerSideProps({ query }) {
  const { q } = query

  const products = await ProductsModel.find({
    $or: [
      {
        title: {
          $regex: q,
          $options: 'i'
        }
      },
      {
        description: {
          $regex: q,
          $options: 'i'
        }
      },
    ]
  })

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      query: JSON.parse(JSON.stringify(q))
    }
  }
}

export default List