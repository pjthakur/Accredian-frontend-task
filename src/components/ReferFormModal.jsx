import React, { useState } from 'react';
import axios from 'axios';
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  TextField, 
  Button, 
  Grid, 
  Typography,
  Alert,
 } from '@mui/material';

function ReferFormModal({ open, onClose }) {
  const [state, setState] = useState({
    referrerName: '',
    referrerEmail: '',
    referrerPhone: '',
    referrerID: '',
    refereeName: '',
    refereeEmail: '',
    refereePhone: '',
    
    
  });

  const [isSubmitted, setIsSubmitted] = useState(false)
  const clearAll = () =>{
    setState({
    referrerName: '',
    referrerEmail: '',
    referrerPhone: '',
    referrerID: '',
    refereeName: '',
    refereeEmail: '',
    refereePhone: '',
    
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/referrals', {
        referrerName: state.referrerName,
        referrerEmail: state.referrerEmail,
        referrerPhone: state.referrerPhone,
        referrerID: state.referrerID,
        refereeName: state.refereeName,
        refereeEmail: state.refereeEmail,
        refereePhone: state.refereePhone
      })
      .then(function (response) {
        console.log(response);
        clearAll();
        console.log('Referral submitted:', state);
        // onClose();
        setIsSubmitted(!isSubmitted)
      })
      .catch(function (error) {
        console.log(error);
      });
      
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Refer a Friend</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} sx={{pt:1}}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Your Name"
                variant="outlined"
                fullWidth
                name="referrerName"
                value={state.referrerName}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Your Email"
                variant="outlined"
                fullWidth
                type="email"
                name="referrerEmail"
                value={state.referrerEmail}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Phone Number"
                type='tel'
                variant="outlined"
                fullWidth
                name="referrerPhone"
                value={state.referrerPhone}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Your ID"
                variant="outlined"
                fullWidth
                name="referrerID"
                value={state.referrerID}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Friend's Name"
                variant="outlined"
                fullWidth
                name="refereeName"
                value={state.refereeName}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Friend's Email"
                variant="outlined"
                fullWidth
                type='email'
                name="refereeEmail"
                value={state.refereeEmail}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Friend's Number"
                variant="outlined"
                fullWidth
                type='tel'
                name="refereePhone"
                value={state.refereePhone}
                onChange={handleChange}
                required
              />
            </Grid>
            
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                By submitting this form, you agree to our Terms of Service and Privacy Policy.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Refer Now
              </Button>
            </Grid>
          </Grid>
        </form>
        {isSubmitted && <Alert sx={{pt:2}} severity="success">Your Referral is Successful.</Alert>}

      </DialogContent>
    </Dialog>
  );
}

export default ReferFormModal;