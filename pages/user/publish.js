import {
    Box,
    Button,
    Container,
    Select,
    TextField,
    Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import TemplateDefault from '../../src/templates/Default'

const useStyles = makeStyles(theme => ({
    container: {
        padding: theme.spacing(8, 0, 6),
    },
    box: {
        backgroundColor: theme.palette.background.white,
        padding: theme.spacing(3),
    },
    boxContainer: {
        paddingBottom: theme.spacing(3),
    }
}))

const Publish = () => {
    const classes = useStyles()

    return (
        <TemplateDefault>
            <Container maxWidth="sm" className={classes.container}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary">
                    Publicar Anúncio
                </Typography>
                <Typography component="h5" variant="h5" align="center" color="textPrimary">
                    Quanto mais detalhado, melhor!
                </Typography>
            </Container>

            <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                    <Typography component="h6" variant="h6" color="textPrimary">
                        Título do Anúncio
                    </Typography>
                    <TextField label="ex.: Bicicleta Aro 18 com garantia" size="small" fullWidth />
                    <br /> <br />

                    <Typography component="h6" variant="h6" color="textPrimary">
                        Categoria
                    </Typography>
                    <Select
                        native
                        value=''
                        fullWidth
                        onChange={() => { }}
                        inputProps={{
                            name: 'age',
                        }}
                    >
                        <option value="">Selecione</option>
                        <option value={1}>Bebê e Criança</option>
                        <option value={2}>Moda</option>
                        <option value={3}>Carros, Motos e Barcos</option>
                        <option value={4}>Serviços</option>
                        <option value={5}>Lazer</option>
                        <option value={6}>Animais</option>
                        <option value={7}>Móveis, Casa e Jardim</option>
                        <option value={8}>Imóveis</option>
                        <option value={9}>Equipamentos e Ferramentas</option>
                        <option value={10}>Celulares e Tablets</option>
                        <option value={11}>Esporte</option>
                        <option value={12}>Tecnologia</option>
                    </Select>
                </Box>
            </Container>

            <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                    <Typography component="h6" variant="h6" color="textPrimary">
                        Imagens
                    </Typography>
                    <Typography component="div" variant="body2" color="textPrimary">
                        A primeira imagem é a foto principal do seu anúncio.
                    </Typography>
                </Box>
            </Container>

            <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                    <Typography component="h6" variant="h6" color="textPrimary">
                        Descrição
                    </Typography>
                    <Typography component="div" variant="body2" color="textPrimary">
                        Escreva os detalhes do que está vendendo
                    </Typography>
                    <TextField
                        multiline
                        rows={6}
                        variant="outlined"
                        fullWidth
                    />
                </Box>
            </Container>

            <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                    <Typography component="h6" variant="h6" color="textPrimary" gutterBottom>
                        Dados de Contato
                    </Typography>
                    <TextField
                        label="Nome"
                        variant="outlined"
                        size="small"
                        fullWidth
                    />
                    <br /><br />

                    <TextField
                        label="E-mail"
                        variant="outlined"
                        size="small"
                        fullWidth
                    />
                    <br /><br />

                    <TextField
                        label="Telefone"
                        variant="outlined"
                        size="small"
                        fullWidth
                    />
                    <br /><br />
                </Box>
            </Container>

            <Container maxWidth="md" className={classes.boxContainer}>
                <Box textAlign="right">
                    <Button variant="contained" color="primary">Publicar Anúncio</Button>
                </Box>
            </Container>

        </TemplateDefault>
    )
}

export default Publish