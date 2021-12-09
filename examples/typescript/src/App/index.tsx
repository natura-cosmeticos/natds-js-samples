import React, { useState } from 'react';
import { Button, Card, Checkbox, TextField } from "@naturacosmeticos/natds-react";
import styles from './index.styles'

export const App = () => {
  const { title, footer, card } = styles()
  const [showPassword, setShowPassword] = useState(false)
  const [checked, setChecked] = useState(false)

  const passowordIcon = showPassword ? 'outlined-action-visibility' : 'outlined-action-visibilityoff'
  const textFieldType = showPassword ? 'text' : 'password'

  return (
    <Card>
      <div className={card}>
        <h2 className={title}>Já possuo uma conta</h2>
        <TextField
          size="medium"
          id="email"
          label="Email ou CPF"
          required
          onBlur={() => ''}
          onChange={() => ''}
          onFocus={() => ''}
        />
        <TextField
          size="medium"
          ariaLabel=""
          id="password"
          label="Senha"
          required
          type={textFieldType}
          action="icon"
          iconName={passowordIcon}
          onClick={() => setShowPassword(!showPassword)}
          onBlur={() => ''}
          onChange={() => ''}
          onFocus={() => ''}
        />
        <Checkbox label="Memorizar senha" onChange={() => setChecked(!checked)} value="memorize-password" checked={checked} />
        <div className={footer}>
          <Button onClick={() => ''} fullWidth type="submit">login</Button>
          <a href="#">esqueceu sua senha?</a>
        </div>
      </div>
    </Card>
  )
}
