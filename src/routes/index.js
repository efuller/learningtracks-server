import authRoutes from './authRoutes';
import userRoutes from './userRoutes';
import isLoggedIn from '../middleware/isLoggedIn';

export default function(app) {
    app.use('/api/auth', authRoutes);
    app.use('/api/users', userRoutes);
    app.get('/protected', isLoggedIn, (req, res) => {
        res.json({ success: 'You are authorized!' });
    })
}