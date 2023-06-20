import {NextFunction, Response, Request} from "express";

export declare type ErrorHandle = (error: any, req: Request, res: Response, next: NextFunction) => any;
