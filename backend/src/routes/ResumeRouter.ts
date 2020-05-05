import { Router } from 'express';
import { ResumeController } from 'src/controllers/ResumeController';

const router = Router();

router.post('/', ResumeController.add);
router.get('/:id', ResumeController.get);
router.patch('/:id', ResumeController.update);
router.delete('/:id', ResumeController.delete);

export default router;
