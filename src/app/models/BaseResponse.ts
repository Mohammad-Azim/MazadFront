import { Category } from './Category';

export interface BaseResponse {
  success: boolean;
  message: string;
  validationErrors: string[];
  data: any;
  statusCode: number;
}
