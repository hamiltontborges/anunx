import { object, string, number, array, date, InferType } from 'yup'

const initialValues = {
  title: '',
  category: '',
  description: '',
  price: '',
  name: '',
  email: '',
  phone: '',
  files: [],
}

const validationSchema = object({
  title: string()
    .min(6, 'Escreva um título maior')
    .max(100, 'Título muito grande')
    .required('Campo obrigatório'),
  category: string().required('Campo obrigatório'),
  description: string()
    .min(50, 'Escreva uma descrição com pelo menos 50 caracteres')
    .max(500, 'Descrição muito grande')
    .required('Campo obrigatório'),
  price: number().required('Campo obrigatório'),
  name: string().required('Campo obrigatório'),
  email: string().email('Digite um email válido').required('Campo obrigatório'),
  phone: number().required('Campo obrigatório'),
  files: array().min(1, 'Envie pelo menos uma foto.').required('Campo obrigatório')
})

export { 
  initialValues,
  validationSchema,
}
