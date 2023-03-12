import React from 'react';

import './App.css';

import { createTheme, colors, ThemeProvider } from '@mui/material';

import { MuiAccordion } from './components/accordion';
import { MuiAlert } from './components/alert';
import { MuiAutoComplete } from './components/autocomplete';
import { MuiAvatar } from './components/avatar';
import { MuiBadge } from './components/badge';
import { MuiBottomNavigation } from './components/bottomnavigation';
import {  MuiBoxAndStack } from './components/boxandstack';
import { MuiBreadCrumb } from './components/breadcrumb';
import { MuuiButton } from './components/button';
import { ButtonGrp } from './components/button-group';
import { MuiCard } from './components/card';
import { MuiCheckBox } from './components/check-box';
import { MuiChip } from './components/chip';
import { MuiDialog } from './components/dialog';
import { MuiDrawer } from './components/drawer';
import { MuiGrid } from './components/grid';
import { MuiImageList } from './components/imagelist';
import { MuiLink } from './components/link';
import { MuiList } from './components/list';
import { MuiMenuItem } from './components/menu';
import { MuiNavBar } from './components/navbar';
import { MuiPaper } from './components/paper';
import { MuiProgress } from './components/progress';
import { MuiRadioButton } from './components/radio-button';
import { MuiRating } from './components/rating';
import { MuiSelect } from './components/select';
import { MuiSkeleton } from './components/skeleton';
import { MuiSpeedDial } from './components/speeddial';
import { MuiSwitch } from './components/switch';
import { MuiTable } from './components/table';
import { MuiTextField } from './components/text-field';
import { MuiToggleButton } from './components/toggle-button';
import { MuiToolTip } from './components/tooltip';
import { MuiTypography } from './components/typography';
import { MuiResponsivness } from './components/responsiveness';

const theme = createTheme({
  status:{
    danger:'#e53e3e'
  },
  palette:{
    error:{
      main:colors.deepOrange['A200']
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
        <div className="App">

          {"muiTypograght test"}
          <MuiTypography/>

          {"Button test"}
          <MuuiButton/>

          {"Button Group test"}
          <ButtonGrp/>

          {"Toggle Button test"}
          <MuiToggleButton/>

          {"Text field test"}
          <MuiTextField/>

          {"Select test"}
          <MuiSelect/>

          {"Radio Button test"}
          <MuiRadioButton/>

          {"Check-Box test"}
          <MuiCheckBox/>

          {"Switch test"}
          <MuiSwitch/>

          {"Rating test"}
          <MuiRating/>

          {"AutoComplete test"}
          <MuiAutoComplete/>

          {"Box and Stack layout test"}
          <MuiBoxAndStack/>

          {"Grid layout test"}
          <MuiGrid/>

          {"Paper layout test"}
          <MuiPaper/>

          {"Card layout test"}
          <MuiCard/>

          {"Accordion layout test"}
          <MuiAccordion/>

          {"Image list layout test"}   
          <MuiImageList/>  

          {"NavBar for branding n navigation test look up"}   
          <MuiNavBar/>   

          <div style={{marginBottom:10}}/>
          {"Menu test"}   
          <MuiMenuItem/>

          <div style={{marginBottom:10}}/>
          {'link test'}
          <MuiLink/>

          {'Breadcrumbs test'}
          <MuiBreadCrumb/>

          {'Drawer test'}
          <MuiDrawer/>
          
          <div style={{marginBottom:10}}/>
          {'Speed Dial test its commented out'}
          {/* <MuiSpeedDial/> */}
          
          <div style={{marginBottom:10}}/>
          {'Bottom navigation test its commented out'}
          {/* <MuiBottomNavigation/> */}

          <div style={{marginBottom:10}}/>
          {'Avatar test'}
          <MuiAvatar/>

          <div style={{marginBottom:10}}/>
          {'Badge test'}
          <MuiBadge/>

          <div style={{marginBottom:10}}/>
          {'List test'}
          <MuiList/>

          <div style={{marginBottom:10}}/>
          {'Chip test'}
          <MuiChip/>

          <div style={{marginBottom:10}}/>
          {'ToolTip test'}
          <MuiToolTip/>

          <div style={{marginBottom:10}}/>
          {'Table test'}
          <MuiTable/>

          <div style={{marginBottom:10}}/>
          {'Alert test'}
          <MuiAlert/>

          <div style={{marginBottom:10}}/>
          {'Dialog test'}
          <MuiDialog/>

          <div style={{marginBottom:10}}/>
          {'Progress test'}
          <MuiProgress/>


          <div style={{marginBottom:10}}/>
          {'Skeleton test refresh d page to see effect'}
          <MuiSkeleton/>

          <div style={{marginBottom:10}}/>
          {'Responsiveness Test'}
          <MuiResponsivness/>
        </div>
      </ThemeProvider>
  );
}

export default App;
