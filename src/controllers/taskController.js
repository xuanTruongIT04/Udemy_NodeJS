const {
    createTaskService,
    showTaskService,
    putUpdateTaskService,
    deleteATaskService,
} = require('../services/taskService');

module.exports = {
    getTasksAPI: async (req, res) => {
        tasks = await showTaskService(req.query);
        return res.status(200).json({
            EC: 0,
            data: tasks,
        });
    },

    postCreateTaskAPI: async (req, res) => {
        let task = await createTaskService(req.body);
        return res.status(200).json({
            EC: 0,
            data: task,
        });
    },

    putUpdateTaskAPI: async (req, res) => {
        let { id, name, description, status, startDate, endDate } = req.body;
        console.log(req.body);
        let dataTask = {
            name,
            description,
            status,
            startDate,
            endDate,
        };

        let task = await putUpdateTaskService(id, dataTask);
        return res.status(200).json({
            EC: 0,
            data: task,
        });
    },

    deleteATaskAPI: async (req, res) => {
        let id = req.body.id;

        let task = await deleteATaskService(id);
        return res.status(200).json({
            EC: 0,
            data: task,
        });
    },
};
