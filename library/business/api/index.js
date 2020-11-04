const response = (res, result) => {
    const {code = 500, message = 'Error', data = {}} = result;

    return res.send({code, message, data});
};

module.exports = {
    response
};
