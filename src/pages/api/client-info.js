// pages/api/client-info.js
const clientInfoHandler = async (req, res) => {
        if (req.method === 'POST') {
            const { name, email, projectType, details } = req.body;
    
            // Log the received data (you can replace this with database operations, email sending, etc.)
            console.log('Client Info:', { name, email, projectType, details });
    
            // Send a success response
            res.status(200).json({ message: 'Information submitted successfully!' });
        } else {
            // Send a method not allowed response
            res.status(405).json({ message: 'Method not allowed' });
        }
};

export default clientInfoHandler;
  