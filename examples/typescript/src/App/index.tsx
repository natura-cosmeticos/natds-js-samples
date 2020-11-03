import React from 'react';
import { Button, Paper, TextField } from "@naturacosmeticos/natds-web";


export const App = () => (
    <Paper component="form">
        <TextField
            helpText={"Informe um e-mail válido da Natura"}
            label={"E-mail"}
            required={true}
            type={"email"} />
        <TextField
            helpText={"Informe uma senha válida"}
            label={"Senha"}
            required={true}
            type={"password"} />
        <Button color={"primary"} type={"submit"} variant={"contained"}>Entrar</Button>
        <Button color={"primary"}>Criar uma conta</Button>
        <Button color={"primary"}>Esqueci a minha senha</Button>
    </Paper>
)
