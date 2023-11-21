// CenteredContentPage.js

import React from 'react';
import './A.css'; 
import { Button } from '@mui/material';
import { Link } from 'react-router-dom/cjs/react-router-dom';
const CenteredContentPage = () => {
  return (
    <div className="centered-content">
      <h1>Welcome to Our OrderRo!</h1>
      <h2>Eating together makes the food taste better.<br></br>
      <br></br> It also makes you closer friends</h2>
      <Button component = { Link } to ='/login' variant="contained"  id="testbutton4">&nbsp;Order Now</Button>
    </div>
  );
};

export default CenteredContentPage;
