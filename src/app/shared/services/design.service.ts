import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { objToHttpParams } from '../constants/utils-functions';
import { IDesign } from '../models/design.model';

export interface IGetAllParams {
  total_per_page?: number;
  order_by?: string;
  order_orientation?: 'asc' | 'desc';
}

@Injectable()
export class DesignService {
  constructor(private readonly _apiService: ApiService) {}

  getAllDesigns(filters?: IGetAllParams) {
    const params = filters ? objToHttpParams(filters) : new HttpParams();

    return this._apiService.get<{
      data: IDesign[];
      hasNextPage: boolean;
      hasPreviousPage: boolean;
    }>('document', params);
  }
}
