import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class SourceFileService {

    constructor(private http: HttpClient) { }

    getSource(location: string, tabname: string) {
        const url = location + '.' + tabname;
        return this.http.get(url, { responseType: 'text' });
    }
}
