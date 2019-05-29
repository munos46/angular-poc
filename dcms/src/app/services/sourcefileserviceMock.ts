import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SourceFileService } from './sourcefileservice';


@Injectable()
export class SourceFileServiceMock extends SourceFileService {

    getSource(location: string, tabname: string) {
        return Observable.create((observer) => {
            observer.next('mock');
        });
    }
}
