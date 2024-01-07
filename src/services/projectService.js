const Project = require('../models/project');
const aqp = require('api-query-params');

const showProjectService = async (queryString) => {
    const page = queryString.page;
    const { filter, limit, population } = aqp(queryString);

    delete filter.page;
    let offset = (page - 1) * limit;
    let result = await Project.find(filter)
        .populate(population)
        .skip(offset)
        .limit(limit)
        .exec();

    return result;
};

const createProjectService = async (dataProject) => {
    try {
        if (dataProject.type === 'EMPTY-PROJECT') {
            let result = await Project.create(dataProject);
            return result;
        } else if (dataProject.type === 'ADD-USER') {
            let project = await Project.findById(dataProject.projectId);
            if (project) {
                project.usersInfor.push(...dataProject.userArr);
                let result = await project.save();
                return result;
            } else {
                return null;
            }
        } else if(dataProject.type === "DELETE-USER"){
            let project = await Project.findById(dataProject.projectId);
            if (project) {
                project.usersInfor.pull(...dataProject.userArr);
                let result = await project.save();
                return result;
            } else {
                return null;
            }
        }
    } catch (err) {
        console.log(err);
        return null;
    }
};

const putUpdateProjectService = async (id, dataProject) => {
    try {
        let result = await Project.updateOne({ _id: id }, dataProject);

        return result;
    } catch (err) {
        console.log(err);
        return null;
    }
};

const deleteAProjectService = async (id) => {
    try {
        let result = await Project.deleteById(id);
        return result;
    } catch (err) {
        console.log(err);
        return null;
    }
};


module.exports = {
    showProjectService,
    createProjectService,
    putUpdateProjectService,
    deleteAProjectService
};
