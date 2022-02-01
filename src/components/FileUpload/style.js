import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  mask: {},
  mainImage: {},
  
  thumbsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 15,
  },
  dropzone: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
    margin: '0 15px 15px 0',
    width: 200,
    height: 150,
    backgroundColor: theme.palette.background.default,
    border: '2px dashed black'
  },
  thumb: {
    position: 'relative',
    width: 200,
    height: 150,
    backgroundSize: 'cover',
    margin: '0 15px 15px 0',
    backgroundPosition: 'center center',

    '&:hover $mask': {
      display: 'flex',
    },

    '& $mainImage': {
      backgroundColor: 'blue',
      padding: '6px 10px',
      position: 'absolute',
      borderRadius: '0 3px 0 0',
      bottom: 0,
      left: 0,
    },

    '& $mask': {
      display: 'none',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      width: '100%',
      height: '100%',
    }
  },
}))


export default useStyles