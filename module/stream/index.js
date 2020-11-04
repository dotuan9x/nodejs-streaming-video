const get = async (req, res) => {
    try {
        const StreamBusiness = require('@library/business/stream');

        return await StreamBusiness.get({req, res});
    } catch (error) {
        //
    }
};

module.exports = {
    get
};
