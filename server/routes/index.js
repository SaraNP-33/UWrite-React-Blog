const express = require('express');
const router = express.Router();

const homeRoutes = require('./home-routes');
const profileRoutes = require('./profile-routes');
const dashboardRoutes = require('./dashboard-routes');
const apiRoutes = require('./api');

router.use('/', homeRoutes);
router.use('/profile', profileRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

module.exports = router;
