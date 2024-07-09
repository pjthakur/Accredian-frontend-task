import React, { useState } from 'react';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'react-modal';
import axios from 'axios';
import '../styles/ReferEarn.css';

const ReferEarn = () => {
  const [state, setState] = useState({
    isOpen: false,
    referrerName: '',
    referrerEmail: '',
    refereeName: '',
    refereeEmail: '',
    course: '',
    error: null,
  });

  const handleOpenModal = () => {
    setState({...state, isOpen: true });
  };

  const handleCloseModal = () => {
    setState({...state, isOpen: false });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({...state, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!state.referrerName || !state.referrerEmail || !state.refereeName || !state.refereeEmail || !state.course) {
      setState({...state, error: 'Please fill in all the required fields' });
    } else {
      axios.post('/api/send-referral-email', {
        referrerName: state.referrerName,
        referrerEmail: state.referrerEmail,
        refereeName: state.refereeName,
        refereeEmail: state.refereeEmail,
        course: state.course,
      })
      .then((response) => {
        if (response.data.success) {
          setState({...state, isOpen: false });
          alert('Referral email sent successfully!');
        } else {
          setState({...state, error: 'Error sending referral email' });
        }
      })
      .catch((error) => {
        setState({...state, error: 'Error sending referral email' });
      });
    }
  };

  return (
    <Container maxWidth="md" className="refer-earn-container">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h2" align="center" className="hero-header">
            Refer & Earn
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleOpenModal}
            className="refer-now-button"
          >
            Refer Now
          </Button>
        </Grid>
      </Grid>

      <Modal isOpen={state.isOpen} onRequestClose={handleCloseModal}>
        <ModalHeader>Refer a Friend</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h6">Referrer Details</Typography>
              </Grid>
              <Grid item xs={12}>
                <input
                  type="text"
                  name="referrerName"
                  placeholder="Referrer Name"
                  value={state.referrerName}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <input
                  type="email"
                  name="referrerEmail"
                  placeholder="Referrer Email"
                  value={state.referrerEmail}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">Referee Details</Typography>
              </Grid>
              <Grid item xs={12}>
                <input
                  type="text"
                  name="refereeName"
                  placeholder="Referee Name"
                  value={state.refereeName}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <input
                  type="email"
                  name="refereeEmail"
                  placeholder="Referee Email"
                  value={state.refereeEmail}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">Course Details</Typography>
              </Grid>
              <Grid item xs={12}>
                <input
                  type="text"
                  name="course"
                  placeholder="Course"
                  value={state.course}
                  onChange={handleChange}
                  required
                />
              </Grid>
              {state.error && (
                <Grid item xs={12}>
                  <Typography variant="body1" color="error">
                    {state.error}
                  </Typography>
                </Grid>
              )}
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
            >
              Refer Now
            </Button>
          </form>
        </ModalBody>
      </Modal>
    </Container>
  );
};

export default ReferEarn;