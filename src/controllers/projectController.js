const { uploadSingleFile } = require('../services/fileServices');
const { createProjectService, showProjectService } = require('../services/projectService');

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
};
