import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { map } from "rxjs";

@Injectable({ providedIn: 'root' })
export class GameListService {
    url = 'https://api.rawg.io/api';
    apiKey = '?key=dc583691788d41beb975c67ce134be21';

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
                    name: genre.name,
                }))
            )
        );
    }

    loadGameList() {
        return this.httpClient.get<any>(`${this.url}/games${this.apiKey}`);
    }
}