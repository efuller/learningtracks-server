import authRoutes from './authRoutes';

export default function(app) {
    app.use('/api/auth', authRoutes);
}