import { Router } from 'express';
import { CustomerController } from '../customers/customers-controller';

const router = Router();

router.post('/', CustomerController.addCustomer);
router.get('/', CustomerController.addCustomer);

export default router;
