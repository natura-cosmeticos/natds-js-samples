import React from 'react'
import { Provider, Button, Icon, Breadcrumbs, Link, Typography } from "@naturacosmeticos/natds-web";

export const App = () => (
    <Provider cssPrefix="react-sample-app">
        <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="#">
                <Typography>natds-web</Typography>
            </Link>
            <Link color="inherit" href="#">
                <Typography>example</Typography>
            </Link>
            <Typography color="textPrimary">typescript</Typography>
        </Breadcrumbs>
        <Button
            color={"primary"}
            variant={"contained"}
            startIcon={<Icon name={"filled-action-add"} size={"tiny"} />}
        >
            Button
        </Button>
    </Provider>
)

