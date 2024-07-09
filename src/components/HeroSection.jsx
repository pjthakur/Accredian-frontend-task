import React, {useState} from 'react';
import { Container, Typography, Button, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';
import ReferFormModal from './ReferFormModal';
import image from '/hero.png'

const HeroSection = () => {
  const [state, setState] = useState({
    showModal: false,
  });

  const handleOpenModal = () => {
    setState({ ...state, showModal: true });
  };

  const handleCloseModal = () => {
    setState({ ...state, showModal: false });
  };

  
  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: '#333'
              }}
            >
              Refer a friend, earn rewards!
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{
                fontSize: '1.25rem',
                color: '#666'
              }}
            >
              Spread the word about our company and earn valuable rewards.
            </Typography>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={image}
              alt="Referral illustration"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '10px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
              }}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={handleOpenModal}
                sx={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  padding: '12px 24px',
                  borderRadius: '10px',
                  marginTop: '20px'
                }}
              >
                Refer Now
              </Button>
            </motion.div>
          </motion.div>
        </Grid>
      </Grid>

      <ReferFormModal
        open={state.showModal}
        onClose={handleCloseModal}
        state={state}
      />
    </Container>
  );
};

export default HeroSection;