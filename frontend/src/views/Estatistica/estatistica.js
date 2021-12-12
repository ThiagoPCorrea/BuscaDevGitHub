import React from "react";
import { Paper, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';
import { GrayButton } from '../../components/buttons/ContainedButtons'
import {
    ArgumentAxis,
    ValueAxis,
    Chart,
    BarSeries,
} from '@devexpress/dx-react-chart-material-ui';

const data = [
    { argument: 'Monday', value: 30 },
    { argument: 'Tuesday', value: 20 },
    { argument: 'Wednesday', value: 10 },
    { argument: 'Thursday', value: 50 },
    { argument: 'Friday', value: 60 },
];

export const Estatistica = () => {
    const navigate  = useNavigate();

    function btnBackClick(){
        navigate('/Busca');
    }
    return (
        <Grid container direction='column' spacing={2} justifyContent="center" alignItems="stretch">
            <Grid item>
                <Paper>
                    <Chart
                        data={data}
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