import { Injectable } from '@angular/core';
import * as highcharts from 'highcharts';

@Injectable()
export class HighchartsStatic {

}

@Injectable()
export class HighchartsService {
    _highchartsStatice: HighchartsStatic

    constructor() {
        this._highchartsStatice = highcharts;
    }

    getHighchartsStatic() {
        return this._highchartsStatice;
    }
}
