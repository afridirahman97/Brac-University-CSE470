import { makeStyles } from '@material-ui/core/styles'

export default makeStyles({
  container: {
    padding: '0 5%',
    width: '100%',
    margin: 0,
  },
  card: {
    background: 'url(/img/card_2.jpg)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '65vh',
    padding: '10%',
    borderRadius: 15,
    color: '#FEFEFE',
    boxShadow:'0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
    
  },
  infoCard: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  }
});