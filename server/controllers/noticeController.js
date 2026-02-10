const noticesData = require('../data/notices.json');

exports.getNotices = (req, res) => {
    res.json(noticesData);
};
