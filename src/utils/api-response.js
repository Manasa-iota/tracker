class ApiResponse{
    constructor(statusCode, message = "Success", data){
        this.data=data
        this.message=message
        this.status = Code
        this.success = statusCode<400
    }

}

export {ApiResponse};