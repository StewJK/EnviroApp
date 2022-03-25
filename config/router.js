import express from 'express';
import consumerController from '../controllers/consumerController.js';
import enviroCompanyController from '../controllers/enviroCompanyController.js';
import productController from '../controllers/productController.js';


const Router = express.Router();

Router.route('/company').get(enviroCompanyController.getAllCompanies)
.post(enviroCompanyController.createCompany).put(enviroCompanyController.updateCompany);


Router.route('/company/:id').get(enviroCompanyController.getCompanyById).put(enviroCompanyController.updateCompany);

Router.route('/products').get(productController.getAllProducts)
.post(productController.createProducts);

Router.route('/consumers').get(consumerController.getAllConsumers)
.post(consumerController.createConsumers);


export default Router;
