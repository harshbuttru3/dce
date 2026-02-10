const navigationData = require('../data/navigation.json');

exports.getNavigation = (req, res) => {
    res.json(navigationData);
};
