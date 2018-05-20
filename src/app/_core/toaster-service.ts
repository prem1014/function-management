import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable()

export class ToasterService {
    public toasterData;
    public isToasterLive = false;
    private toasterDetails = new Subject<any>();
    toasterDetailsInAnnounced$ = this.toasterDetails.asObservable();

    public success(toasterDetails): void {
        this.toasterDetails.next(toasterDetails);
    }

    public error(toasterDetails): void {
        this.toasterDetails.next(toasterDetails);
    }

    public keepToasterLive(isToasterLive: boolean): void {
        this.isToasterLive = isToasterLive;
    }
}
