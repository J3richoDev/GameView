import { HttpClient } from "@angular/common/http";
import { DestroyRef, inject, Injectable } from "@angular/core";
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class GameDetailService {
    url = environment.apiUrl;
    apiKey = environment.apiKey;

    private http = inject(HttpClient);
    private df = inject(DestroyRef);

    LoadGameDetail(id: string) {
        return this.http.get<any>(this.url + '/games/' + id + this.apiKey);
    }

    LoadGameScreenshots(id: string) {
        return this.http.get<any>(this.url + '/games/' + id + '/screenshots' + this.apiKey);
    }
}