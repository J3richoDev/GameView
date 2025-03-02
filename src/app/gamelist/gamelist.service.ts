import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { map } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({ providedIn: 'root' })
export class GameListService {
    url = environment.apiUrl;
    apiKey = environment.apiKey;

    gameList = signal([]);
    AllGames = this.gameList.asReadonly();


    private httpClient = inject(HttpClient);

    loadGenres() {
        return this.httpClient.get<any>(`${this.url}/genres${this.apiKey}`).pipe(
            map((response) =>
                response.results.map((genre: any) => ({
                    name: genre.name,
                    image_background: genre.image_background,
                }))
            )
        );
    }

    loadGenreNames() {
        return this.httpClient.get<any>(`${this.url}/genres${this.apiKey}`).pipe(
            map((response) =>
                response.results.map((genre: any) => ({
                    id: genre.id,
                    name: genre.name,
                }))
            )
        );
    }

    loadGameList(queryParams: string) {
        return this.httpClient.get<any>(`${this.url}/games${this.apiKey}${queryParams}`);
    }
}