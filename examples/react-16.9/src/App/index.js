import React from 'react'
import {Button, Provider, themes} from '@naturacosmeticos/natds-web'

const { natura } = themes

export const App = () => (
    <Provider theme={natura.light}>
        <Button color={"primary"} variant={"contained"}>Button</Button>
    </Provider>
)
