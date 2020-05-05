import { Router } from 'express';
import ResumeRouter from './ResumeRouter';
// Init router and path
const router = Router();

// Add sub-routes
router.use('/resume', ResumeRouter);

// Export the base-router
export default router;
