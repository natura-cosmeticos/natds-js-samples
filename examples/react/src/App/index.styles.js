import { createUseStyles } from 'react-jss'

const styles = createUseStyles({
  card: { padding: 16 },
  title: {
    textTransform: 'uppercase',
    fontFamily: 'Montserrat',
  },
  footer: {
    marginTop: 16,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    '& > a': {
      textAlign: 'center',
      fontFamily: 'Montserrat',
    }
  }
})

export default styles
