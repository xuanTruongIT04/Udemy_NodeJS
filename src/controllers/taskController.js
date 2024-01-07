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
        let task = await putUpdateTaskService(req.body.id, req.body);
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
