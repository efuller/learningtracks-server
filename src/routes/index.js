import authRoutes from './authRoutes';
import userRoutes from './userRoutes';

export default function(app) {
    app.use('/api/auth', authRoutes);
    app.use('/api/users', userRoutes);
}