import { HttpStatus, HttpStatusCode } from "../constants/httpStatus";

interface SuccessResponse<T> {
    status: HttpStatusCode;
    data: T;
    message?: string;
}

interface ErrorResponse {
    status: HttpStatusCode;
    error: string;
    message?: string;
}

export const success = <T>(data: T, status: HttpStatusCode = HttpStatus.OK, message?: string): SuccessResponse<T> => ({
    status,
    data,
    ...(message && { message }),
});

export const error = (error: string, status: HttpStatusCode = HttpStatus.INTERNAL_SERVER_ERROR, message?: string): ErrorResponse => ({
    status,
    error,
    ...(message && { message }),
});