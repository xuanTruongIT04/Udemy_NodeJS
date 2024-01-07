const Task = require('../models/task');
const aqp = require('api-query-params');

const showTaskService = async (queryString) => {
    const page = queryString.page;
    const { filter, limit, population } = aqp(queryString);

    delete filter.page;
    let offset = (page - 1) * limit;
    let result = await Task.find(filter)
        .populate(population)
        .skip(offset)
        .limit(limit)
        .exec();

    return result;
};

const createTaskService = async (dataTask) => {
    try {
        if (dataTask.type === 'EMPTY-TASK') {
            let result = await Task.create(dataTask);
            return result;
        } 
    } catch (err) {
        console.log(err);
        return null;
    }
};

const putUpdateTaskService = async (id, dataTask) => {
    try {
        let result = await Task.updateOne({ _id: id }, { ...dataTask });
        console.log(dataTask);
        return result;
    } catch (err) {
        console.log(err);
        return null;
    }
};

const deleteATaskService = async (id) => {
    try {
        let result = await Task.deleteById(id);
        return result;
    } catch (err) {
        console.log(err);
        return null;
    }
};

module.exports = {
    showTaskService,
    createTaskService,
    putUpdateTaskService,
    deleteATaskService,
};
