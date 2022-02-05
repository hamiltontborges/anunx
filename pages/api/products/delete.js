import nextConnect from 'next-connect'
import { post, remove } from '../../../src/controllers/products'

const route = nextConnect()

route.delete(remove)

export default route

