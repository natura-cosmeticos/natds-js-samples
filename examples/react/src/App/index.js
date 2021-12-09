import React, { useState } from 'react'
import { Button, Card, TextField, Checkbox, useTheme, ThemeProvider, buildTheme } from "@naturacosmeticos/natds-react";
import styles from './index.styles'

export const App = () => {
  const { title, footer, card } = styles()
  const [checked, setChecked] = useState(false)

  return (
    <ThemeProvider theme={buildTheme('avon', 'light')}>
      <Card>
        <div className={card}>
          <h2 className={title}>Já possuo uma conta</h2>
          <TextField size="medium" label="Email ou CPF" />
          <TextField size="medium" label="Senha" />
          <Checkbox label="Memorizar senha" onChange={() => setChecked(!checked)} value="memorize-password" checked={checked} />
          <div className={footer}>
            <Button onClick={() => ''} fullWidth type="submit">login</Button>
            <a href="#">esqueceu sua senha?</a>
          </div>
        </div>
      </Card>
    </ThemeProvider>
  )
}