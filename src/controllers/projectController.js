const {
    createProjectService,
    showProjectService,
    putUpdateProjectService,
    deleteAProjectService,
} = require('../services/projectService');

module.exports = {
    getProjectsAPI: async (req, res) => {
        projects = await showProjectService(req.query);
        return res.status(200).json({
            EC: 0,
            data: projects,
        });
    },

    postCreateProjectAPI: async (req, res) => {
        let project = await createProjectService(req.body);
        return res.status(200).json({
            EC: 0,
            data: project,
        });
    },

    putUpdateProjectAPI: async (req, res) => {
        let { id, name, endDate, description } = req.body;
        let dataProject = {
            name,
            endDate,
            description,
        };

        let project = await putUpdateProjectService(id, dataProject);
        return res.status(200).json({
            EC: 0,
            data: project,
        });
    },

    deleteAProjectAPI: async (req, res) => {
        let id = req.body.id;

        let project = await deleteAProjectService(id);
        return res.status(200).json({
            EC: 0,
            data: project,
        });
    },
};
