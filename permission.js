// User role class template
class UserRole {
  constructor(roleName, permissions) {
    this.roleName = roleName;
    this.permissions = permissions;
  }

  // Method to check if a task is allowed
  canPerform(task) {
    const canDoTask = this.permissions[task];

    if (canDoTask === undefined) {
      return `Task ${task} is not valid for role ${this.roleName}.`;
    }

    return canDoTask
      ? `Yes, ${this.roleName} can perform the task: ${task}.`
      : `No, ${this.roleName} cannot perform the task: ${task}.`;
  }
}

// Validator function to check if the object follows the schema
function validateRoleSchema(role) {
  // Check roleName is a string
  if (typeof role.roleName !== "string") {
    return `Invalid roleName. Expected a string but got ${typeof role.roleName}.`;
  }

  // Check permissions is an object
  if (typeof role.permissions !== "object" || Array.isArray(role.permissions)) {
    return `Invalid permissions. Expected an object but got ${typeof role.permissions}.`;
  }

  // Ensure permissions only have boolean values
  for (const task in role.permissions) {
    if (typeof role.permissions[task] !== "boolean") {
      return `Invalid permission for task "${task}". Expected a boolean but got ${typeof role
        .permissions[task]}.`;
    }
  }

  return null; // Return null if the schema is valid
}

// Create objects for student, teacher, and admin using the class
const student = new UserRole("student", {
  "read-timetable": true,
  "write-timetable": false,
  "read-attendance": true,
  "write-attendance": false,
  "read-notes": true,
  "write-notes": false,
});

const teacher = new UserRole("teacher", {
  "read-timetable": true,
  "write-timetable": false,
  "read-attendance": true,
  "write-attendance": true,
  "read-notes": true,
  "write-notes": true,
});

const admin = new UserRole("admin", {
  "read-timetable": true,
  "write-timetable": true,
  "read-attendance": true,
  "write-attendance": true,
  "read-notes": true,
  "write-notes": true,
});

// Map of all roles for easy lookup
const rolesMap = {
  student,
  teacher,
  admin,
};

// Function to check permissions dynamically using the class
function checkPermission(role, task) {
  const userRole = rolesMap[role];

  if (!userRole) {
    return `Role ${role} does not exist.`;
  }

  return userRole.canPerform(task);
}

// Display error on the user screen
function displayError(message) {
  const resultElement = document.getElementById("result");
  resultElement.textContent = message;
  resultElement.style.color = "red"; // Highlight the error in red
}

// Clear error message
function clearError() {
  const resultElement = document.getElementById("result");
  resultElement.textContent = "";
}

// Event listener for form submission
document
  .getElementById("permissionForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting traditionally

    clearError(); // Clear any previous error messages

    const role = document.getElementById("role").value;
    const task = document.getElementById("task").value;

    const userRole = rolesMap[role];

    // Validate the selected role schema before checking permission
    const validationError = validateRoleSchema(userRole);

    if (validationError) {
      displayError(validationError); // Show error on the UI if validation fails
      return; // Stop execution if validation fails
    }

    // If validation is successful, check the permission
    const resultMessage = checkPermission(role, task);
    document.getElementById("result").textContent = resultMessage;
    document.getElementById("result").style.color = "black"; // Show result in default color
  });
