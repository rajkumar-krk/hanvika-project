export const testLogin = (req, res) => {
  // Mock response for testing frontend connection
  console.log('Sending login request');
  
  const { email, password } = req.body;
  
  // Mock validation
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password required' });
  }
  
  // Mock successful login response
  const mockResponse = {
    accessToken: 'mock_access_token_' + Date.now(),
    refreshToken: 'mock_refresh_token_' + Date.now(),
    user: {
      id: 'mock_user_id',
      email: email,
      role: email.includes('recruiter') ? 'RECRUITER' : 'USER'
    }
  };
  
  console.log('Response:', mockResponse);
  res.status(200).json(mockResponse);
};
