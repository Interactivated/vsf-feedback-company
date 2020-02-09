import { apiStatus } from '../../../lib/util';
import { Router } from 'express';
const Magento2Client = require('magento2-rest-client').Magento2Client

module.exports = ({ config, db }) => {

  let cmsApi = Router();

  cmsApi.get('/getFeedbackReview/', (req, res) => {
    const client = Magento2Client(config.magento2.api);
    client.addMethods('getFeedbackReview', function (restClient) {
      let module = {};
      module.getPageIdentifier = function () {
        return restClient.get(`/getFeedbackReview/`);
      }
      return module;
    })
    client.getFeedbackReview.getPageIdentifier().then((result) => {
      apiStatus(res, result, 200); // just dump it to the browser, result = JSON object
    }).catch(err => {
      apiStatus(res, err, 500);
    })
  })
  
  return cmsApi
}
