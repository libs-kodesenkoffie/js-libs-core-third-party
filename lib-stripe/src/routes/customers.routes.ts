/*
Customer
  - Create recurring charges
  - Track user payments
*/

import { Router } from 'express';
import { CustomerController } from '../customers/customers.controller';

const router = Router();

router
  .route('/')
  .post(CustomerController.addCustomer)
  .get(CustomerController.fetchCustomers);

export default router;
