import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Paper, TextField, Button, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { AutoAwesome } from '@mui/icons-material';
import toast from 'react-hot-toast';
import { register } from '../service/api';

function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(formData);
            toast.success('Registration successful! Please login.');
            navigate('/login');
        } catch (error) {
            toast.error(error.response?.data?.message || 'Registration failed');
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Box sx={{ 
                    mt: 8, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center'
                }}>
                    <Paper 
                        elevation={6} 
                        sx={{ 
                            p: 4, 
                            width: '100%',
                            background: 'linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%)',
                            border: '1px solid rgba(37, 99, 235, 0.1)',
                            borderRadius: 2
                        }}
                    >
                        <Box sx={{ 
                            mb: 4, 
                            textAlign: 'center',
                            background: 'linear-gradient(45deg, #2563eb 30%, #60a5fa 90%)',
                            borderRadius: 2,
                            p: 3,
                            color: 'white'
                        }}>
                            <AutoAwesome sx={{ fontSize: 40, mb: 1 }} />
                            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                                Create Account
                            </Typography>
                            <Typography variant="subtitle1">
                                Real-time Task Management System
                            </Typography>
                        </Box>

                        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                label="Full Name"
                                name="name"
                                autoComplete="name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '&:hover fieldset': {
                                            borderColor: '#60a5fa',
                                        },
                                    },
                                }}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '&:hover fieldset': {
                                            borderColor: '#60a5fa',
                                        },
                                    },
                                }}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '&:hover fieldset': {
                                            borderColor: '#60a5fa',
                                        },
                                    },
                                }}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ 
                                    mt: 3, 
                                    mb: 2,
                                    background: 'linear-gradient(45deg, #2563eb 30%, #60a5fa 90%)',
                                    color: 'white',
                                    '&:hover': {
                                        background: 'linear-gradient(45deg, #1d4ed8 30%, #3b82f6 90%)',
                                    }
                                }}
                            >
                                Sign Up
                            </Button>
                            <Button
                                fullWidth
                                variant="text"
                                onClick={() => navigate('/login')}
                                sx={{
                                    color: '#2563eb',
                                    '&:hover': {
                                        background: 'rgba(37, 99, 235, 0.1)',
                                    }
                                }}
                            >
                                Already have an account? Sign In
                            </Button>
                        </Box>
                    </Paper>
                </Box>
            </motion.div>
        </Container>
    );
}

export default Register;