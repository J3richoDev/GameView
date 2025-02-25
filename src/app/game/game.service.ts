import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { catchError, map, throwError } from "rxjs";
import { movieJSON, rawgJSON } from "./game.model";

@Injectable({ providedIn: 'root' })
export class GameService {
    gameList = signal([]);
    AllGames = this.gameList.asReadonly();
    url = 'https://api.rawg.io/api';
    apiKey = '?key=dc583691788d41beb975c67ce134be21';

    private httpClient = inject(HttpClient);

    loadGameList() {
        return this.httpClient.get<rawgJSON>(`${this.url}/games${this.apiKey}`);
    }

    loadGameTrailer(gameId: number) {
        return this.httpClient.get<movieJSON>(this.url + '/games/' + gameId + '/movies' + this.apiKey)
    }

    loadGameDescription(gameId: number) {
        return this.httpClient.get<any>(this.url + '/games/' + gameId + this.apiKey).pipe(map(item => {
            return item.description_raw;
        }))
    }
}