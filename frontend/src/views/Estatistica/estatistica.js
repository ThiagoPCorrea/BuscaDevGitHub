import React, { useEffect, useState } from "react";
import { Paper, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';
import { BackEndRoute } from '../../utils/Consts'
import { GrayButton } from '../../components/buttons/ContainedButtons'
import {
    ArgumentAxis,
    ValueAxis,
    Chart,
    BarSeries,
} from '@devexpress/dx-react-chart-material-ui';

export const Estatistica = () => {
    const navigate = useNavigate();
    const token = sessionStorage.getItem('token');
    const [dataChart, setDataChart] = useState([]);

    useEffect(() => {
        if (token === 'null') {
            navigate('/')
        }
        request();
        // eslint-disable-next-line
    }, []);

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    function request() {
        fetch('http://' + BackEndRoute + '/statistic/' + token, requestOptions)
            .then((response) => {
                if (response.ok) {
                    return response.json().then((data) => {
                        setDataChart(data);
                    }).catch((err) => {
                        console.log(err);
                    })
                }
            })
            .catch(function (error) {
                console.log('Erro ao logar: ' + error.message);
            });
    }
    function btnBackClick() {
        navigate('/Busca');
    }
    return (
        <Grid container direction='column' spacing={2} justifyContent="center" alignItems="stretch">
            <Grid item>
                <Paper>
                    <Chart
                        data={dataChart}
                    >
                        <ArgumentAxis />
                        <ValueAxis />

                        <BarSeries valueField="value" argumentField="argument" />
                    </Chart>
                </Paper>
            </Grid>
            <Grid item>
                <GrayButton id="btn_search" icon={<ArrowBack />} onClick={btnBackClick}>Voltar</GrayButton>
            </Grid>
        </Grid>

    );
}