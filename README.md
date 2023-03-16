# static-data

This code is from an assessment I completed from Thinkful cirrciulum.

The task was to build an API server for users and states. It should handle the following routes:

/users returns an array of users in the form { data: Array }.
/users/:userId returns a single user by id in form { data: {} } or User ID not found: ${userId} if the user doesn't exist.
/states returns the states data in the form { data: Array }.
/states/:stateCode returns the states data in the form { data: { stateCode: String, name: String } } or State code not found: ${stateCode} if the state code doesn't exist.
Any other path returns: Not found: ${req.originalUrl}
