import { SignupService } from '../application/SignupService';
import { SignupRequest, BaseResponse } from "../application/dto/SignUp";

export class SignupController {
    public create(req, res): string {
        let message;
        // TODO : check parameter type
        const params: SignupRequest = req.body;
        const { username, password } = params;
        // response
        res.type("application/json");

        // service
        const signupService = new SignupService();

        let responseMessage: BaseResponse = {} as BaseResponse;

        if (typeof username != 'string' || username == null || username == "") {
            responseMessage.message = "잘못된 값입니다.";
            return res.json(responseMessage);
        }
        if (typeof password != "string" || password == null || password == "") {
            responseMessage.message = "잘못된 값입니다.";
            return res.json(responseMessage);
        }
        // TODO :서비스 호출
        responseMessage = signupService.create(params);
        return res.json(responseMessage);
    }
}
