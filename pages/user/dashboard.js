import React, { useState } from 'react'
import axios from 'axios'

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Container,
  Grid,
  Typography,
  Box
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
import { getSession } from 'next-auth/client'

import dbConnect from '../../src/utils/dbConnect'
import ProductsModel from '../../src/models/products'
import TemplateDefault from '../../src/templates/Default'
import Card from '../../src/components/Card'
import { formatCurrency } from '../../src/utils/currency'
import useToasty from '../../src/contexts/Toasty'
import Link from 'next/link'


const useStyles = makeStyles(() => ({

  buttonAdd: {
    margin: '10px auto 50px auto',
    display: 'inline-block',
  },
  cardGrid: {
    marginTop: 50
  },
}))

const Home = ({ products }) => {
  const classes = useStyles()
  const { setToasty } = useToasty()
  const [productId, setProductId] = useState()
  const [removedProducts, setRemovedProducts] = useState([])
  const [openConfirmModal, setOpenConfirmModal] = useState(false)


  const handleCloseModal = () => setOpenConfirmModal(false)

  const handleClickRemove = (productId) => {
    setProductId(productId)
    setOpenConfirmModal(true)
  }

  const handleConfirmRemove = () => {
    axios.delete('/api/products/delete', {
      data: {
        id: productId
      }
    })
      .then(handleSuccess)
      .catch(handleError)
  }

  const handleSuccess = () => {
    setOpenConfirmModal(false)
    setRemovedProducts([...removedProducts, productId])
    setToasty({
      open: true,
      severity: 'success',
      text: 'Anúncio removido com sucesso!'
    })
  }

  const handleError = () => {
    setToasty({
      open: true,
      severity: 'error',
      text: 'Ops, ocorreu um erro!'
    })
  }

  return (
    <TemplateDefault>

      <Dialog
        open={openConfirmModal}
        onClose={handleCloseModal}
      >
        <DialogTitle>Deseja realmente excluir este anúncio?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Ao confirmar a operação, não poderá voltar atrás.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary" autoFocus>
            Cancelar
          </Button>
          <Button onClick={handleConfirmRemove} color="warning">
            Remover
          </Button>
        </DialogActions>
      </Dialog>

      <Box maxWidth="sm" textAlign="center">
        <Typography component="h1" variant="h2">
          Meus Anúncios
        </Typography>
        <Link href={'/user/publish'} passHref>
          <Button variant="contained" color="primary" className={classes.buttonAdd}>
            Publicar novo anúncio
          </Button>
        </Link>
      </Box>

      <Container maxWidth="md">
        {
          products.length === 0 &&
          <Typography component="div" variant="body1" align='center' color='textPrimary' gutterBottom>
            Nenhum anúncio publicado
          </Typography>
        }
      </Container>

      <Container maxWidth="lg" className={classes.cardGrid}>
        <Grid container spacing={4}>
          {
            products.map(product => {
              if (removedProducts.includes(product._id)) return null

              return (
                <Grid item key={product._id} xs={12} sm={6} md={4}>
                  <Card
                    image={`/uploads/${product.files[0].name}`}
                    title={product.title}
                    subtitle={formatCurrency(product.price)}
                    actions={
                      <>
                        <Button size="small" color="primary">
                          Editar
                        </Button>
                        <Button size="small" color="primary" onClick={() => handleClickRemove(product._id)}>
                          Remover
                        </Button>
                      </>
                    }
                  />
                </Grid>
              )
            })
          }

        </Grid>
      </Container>
    </TemplateDefault>
  )
}

Home.requireAuth = true

export async function getServerSideProps({ req }) {

  const session = await getSession({ req })
  await dbConnect()

  const products = await ProductsModel.find({ 'user.id': session.userId })

  return {
    props: {
      products: JSON.parse(JSON.stringify(products))
    }
  }
}


export default Home
