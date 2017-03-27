export interface ServiceResponse {
	status: string;
}

export interface ErrorServiceResponse extends ServiceResponse {
	errorMessage: string;
	errorId: string;
	httpStatusCode: number;
}

export interface ValidationErrorServiceResponse extends ServiceResponse {
	validationMessages: Array<ValidationMessage>;
}

export interface ValidationMessage {
	message: string;
	location: string;
}

export class ServiceResponses {
	public static isError(response: any): response is ErrorServiceResponse {
		return response.status === "ProtocolError" || response.status === "InternalServerError";
	}

	public static isValidationError(response: ServiceResponse): response is ValidationErrorServiceResponse {
		return response.status === "ValidationError";
	}

	public static isSuccess(response: ServiceResponse) {
		return response.status === "Success";
	}
}
