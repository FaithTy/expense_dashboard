import React from 'react'

import { makeStyles } from '@mui/styles';

import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ListIcon from '@mui/icons-material/List';
import MailIcon from '@mui/icons-material/Mail';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import InsightsIcon from '@mui/icons-material/Insights';
import SettingsIcon from '@mui/icons-material/Settings';


import Typography from '@mui/material/Typography'

const useStyles = makeStyles({
  root: {
    backgroundColor: 'white',
    width: '20%',
    '& .MuiSvgIcon-root': {
      height: '1.5em',
      width: '1.5em'
    }
  },
  navbar : {
    marginLeft: '2em'
  },
  labels: {
    width: '100%',
    display: 'flex',
    gap: '2em',
    alignItems: 'center',
    // backgroundColor: 'red',
    padding: '1em'
  }
});


const Sidebar = () => {
  const classes = useStyles();

  const navs  = [
    {
      name: 'Overview',
      icon: <DashboardIcon />,
      active: true
    }, {
      name: 'Project',
      icon: <AccountTreeIcon />,
      active: false
    }, {
      name: 'Task',
      icon: <ListIcon />,
      active: false
    }, {
      name: 'Inbox',
      icon: <MailIcon />,
      active: false
    }, {
      name: 'Documents',
      icon: <DocumentScannerIcon />,
      active: false
    }, {
      name: 'Analytics',
      icon: <InsightsIcon />,
      active: false
    }, {
      name: 'Settings',
      icon: <SettingsIcon />,
      active: false
    }
  ]

  return (
    <>
      <div className={classes.root}>
        <DashboardIcon />
        <Typography variant='h6'>Logo name</Typography>
        <div className={classes.navbar}>
          {
            navs.map(nav => (
              <div className={classes.labels}>
                <div style={{color: nav.active ? '#343c7f' : '#a5aad0'}}>{nav.icon}</div>
                <Typography variant='subtitle1'>{nav.name}</Typography>
              </ div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Sidebar;