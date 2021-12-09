import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'

const styles = createUseStyles((theme: Theme) => ({
  card: {
    padding: theme.spacing.small
  },
  title: {
    textTransform: 'uppercase',
    fontFamily: theme.typography.headline.fontFamily,
    fontWeight: theme.typography.headline.fontWeight,
  },
  footer: {
    marginTop: theme.spacing.small,
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.small,
    '& > a': {
      textAlign: 'center',
      fontFamily: theme.typography.body.regular.fontFamily,
      fontWeight: theme.typography.body.regular.fontWeight,
    }
  }
}))

export default styles
