const parentRepository = require("../repositories/parentRepository");

class ParentService {
  /* ------------------- Handle Create Parent  ------------------- */

  static async handleCreateParent({ userId, fullName, occupation }) {
    try {
      // ------------------------- Payload Validation ------------------------- //
      const requiredFields = {
        fullName,
        occupation,
      };

      for (const [key, value] of Object.entries(requiredFields)) {
        if (!value) {
          return {
            status: false,
            status_code: 400,
            message: `${formatFieldName(key)} is required!`,
            data: {
              parent: null,
            },
          };
        }
      }
      // ------------------------- End Payload Validation ------------------------- //

      const parentCreated = await parentRepository.handleCreateParent({
        userId,
        fullName,
        occupation,
      });

      return {
        status: true,
        status_code: 201,
        message: "Successfully created data",
        data: {
          parent: parentCreated,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          parent: null,
        },
      };
    }
  }

  /* ------------------- End Handle Create Parent  ------------------- */

  /* ------------------- Handle Get All Parent  ------------------- */

  static async handleGetAllParent() {
    try {
      const getParent = await parentRepository.handleGetAllParent();

      return {
        status: true,
        status_code: 200,
        message: "Successfully displayed parent",
        data: {
          parent: getParent,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          parent: null,
        },
      };
    }
  }

  /* ------------------- End Handle Get All Parent  ------------------- */

  /* ------------------- Handle Get Parent By Id  ------------------- */

  static async handleGetParentById({ id }) {
    try {
      const getParentById = await parentRepository.handleGetParentById({
        id,
      });

      return {
        status: true,
        status_code: 200,
        message: "Data displayed successfully!",
        data: {
          parent: getParentById,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          parent: null,
        },
      };
    }
  }

  /* ------------------- End Handle Get Parent By Id  ------------------- */

  /* ------------------- Handle Delete Parent By Id  ------------------- */

  static async handleDeleteParentById({ id }) {
    try {
      const deletedParent = await parentRepository.handleDeleteParentById({
        id,
      });

      return {
        status: true,
        status_code: 201,
        message: "Data deleted successfully",
        data: {
          parent: deletedParent,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          parent: null,
        },
      };
    }
  }

  /* ------------------- End Handle Delete Parent By Id  ------------------- */

  /* ------------------- Handle Update Parent By Id  ------------------- */

  static async handleUpdateParentById({ id, fullName, occupation }) {
    try {
      const getParentById = await parentRepository.handleGetParentById({
        id,
      });

      if (getParentById.id == id) {
        if (!fullName) fullName = getParentById.fullName;
        if (!occupation) occupation = getParentById.occupation;
      }

      const updatedParent = await parentRepository.handleUpdateParentById({
        id,
        fullName,
        occupation,
      });

      return {
        status: true,
        status_code: 201,
        message: "Data updated successfully",
        data: {
          parent: updatedParent,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          parent: null,
        },
      };
    }
  }

  /* ------------------- End Handle Update Parent By Id  ------------------- */
}

module.exports = ParentService;
