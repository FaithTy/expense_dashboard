import React from 'react'

import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import LinearProgress from '@mui/material/LinearProgress';

import SearchIcon from '@mui/icons-material/Search';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



const useStyles = makeStyles({
  root: {
    // width: '350px',
    backgroundColor: '#f5f6fa',
    width: '80%',
    color: 'white',
    '& .MuiLinearProgress-root': {
      width: '100%',
      borderRadius: '2em',
    }
  }, 
  title: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  overview_graph: {
    // width: '250px',
    display: 'flex',
    justifyContent: 'space-between',
    gap: '2em',
    '& div': {
      width: '200px',
      padding: '1em',
      borderRadius: '1em'
    }
  },
  graph: {
    display: 'flex',
    gap: '2em'
  },
  chart: {
    width: '70%',
    borderRadius: '1em !important'
  },
  milestone: {
    width: '30%',
    borderRadius: '1em !important'
  },
  radio: {
    height: '15px',
    width: '15px',
    borderRadius: '50%'
  },
  percentageLabel: {
    width: '100px',
    display: 'flex',
    alignItems: 'center',
    gap: '.5em'
  },
  details: {
    display: 'flex',
    alignItems: 'center',
    gap: '1em'
  }
  
});


const Home = () => {
  const classes = useStyles();
  const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
        },
        title: {
          display: true,
          text: 'Chart.js Bar Chart',
        },
      },
    };
    
  const labels = ['Budg. 1', 'Budg. 2', 'Budg. 3', 'Budg. 4', 'Budg. 5', 'Budg. 6', 'Budg. 7', 'Budg. 8'];
  
  const data = {
    labels,
    datasets: [
      {
        id: 1,
        label: 'Planned Expenses',
        data: [10, 100, 500, 160, 400, 300, 0, 100],
        backgroundColor: 'rgb(243,148,164)',
        borderRadius: '1em'
      },
      {
        label: 'Actual Expenses',
        id: 2,
        data: [90, 300, 200, 500, 150, 130, 50, 100 ],
        backgroundColor: 'rgb(149,150,202)',
        borderRadius: '1em'
      },
    ],
  };

  const graph_1 = [
    {
      label: 'Revenue this Month',
      value: 3.8,
      color: '#f492a0'
    },
    {
      label: 'Projects Income',
      value: 118.7,
      color: '#3e479b'
    },
    {
      label: 'Qouted this Month',
      value: 56.3,
      color: '#feb161'
    },
    {
      label: 'Outstanding voices',
      value: 2114,
      color: '#9194ce'
    }
  ]

  const MONTHLY_M = [
    {
      name: '1200 Resolved Tasks',
      desc: 'Total number of task resolved',
      percentage: 71,
      color: '#9596ca'
    },
    {
      name: '1200 Resolved Tasks',
      desc: 'Total number of task resolved',
      percentage: 65,
      color: '#f394a4'
    },
    {
      name: '1200 Resolved Tasks',
      desc: 'Total number of task resolved',
      percentage: 100,
      color: '#9596ca'

    },
    {
      name: '1200 Resolved Tasks',
      desc: 'Total number of task resolved',
      percentage: 87,
      color: '#f394a4'
    },
    {
      name: '1200 Resolved Tasks',
      desc: 'Total number of task resolved',
      percentage: 53,
      color: '#9596ca'
    }
  ]

  return (
    <>
      <div className={classes.root}>
        <div className={classes.title}>
          <Typography variant='h6'>Overview</Typography>
          <div>
            <Typography variant='subtitle1'>Friday, March 31, 2023</Typography>
            <SearchIcon />
          </div>
        </div>
        <div className={classes.overview_graph}>
          {
            graph_1.map(data => (
              <div style={{backgroundColor: data.color}}>
                <Typography variant='subtitle2'>{data.value}</Typography>
                <Typography variant='caption'>{data.label}</Typography>
              </div>
            ))
          }
        </div>
        <div className={classes.graph}>
          <Paper elevation={0} className={classes.chart}>
            <Bar options={options} data={data} />
          </Paper>
          <Paper elevation={0} className={classes.milestone}>
            <Typography variant='subtitle1'>Montly Milestone</Typography>
              {
                MONTHLY_M.map(m => (
                  <div className={classes.details}>
                    <div className={classes.radio} style={{backgroundColor: m.color}}></div>
                    <div>
                      <Typography variant='subtitle2'>{m.name}</Typography>
                      <Typography variant='caption'>{m.desc}</Typography>
                    </div>
                    <div className={classes.percentageLabel}>
                      <LinearProgress  variant="determinate" value={m.percentage} />
                      <Typography variant='caption' style={{ color: m.color }}>{m.percentage}%</Typography>
                    </div>
                  </div>
                ))
              }
          
          </Paper>
        </div>
        <div>
          <Paper elevation={0}>

          </Paper>
          <Paper elevation={0}>

          </Paper>
        </div>
       
      </div>
    </>
  )
}

export default Home;