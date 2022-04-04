import { Request, Response, NextFunction, Router } from 'express';

export interface IRoute {
	path: string;
	func: (req: Request, res: Response, next: NextFunction) => void;
	method: keyof Pick<Router, 'get' | 'post' | 'put' | 'delete' | 'patch'>;
}

export type ExpressReturnType = Response<any, Record<string, any>>;
