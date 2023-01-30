import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom, map, Subject, take } from "rxjs";
import { Giphy, Searched } from "./model";

@Injectable()
export class GiphyService {

    constructor(private http: HttpClient) {}

    searchGif(formData: Searched): Promise<Giphy[]> {
        const params = new HttpParams()
            .set("api_key", "GG9Yp537aMh2cCvvhDbk8I3N6Au742tj")
            .set("q", formData.prompt)
            .set("limit", formData.limit)

        return firstValueFrom<Giphy[]>(
            this.http.get<any>('https://api.giphy.com/v1/gifs/search', { params })
                .pipe(
                    // take(1),
                    map(v => {
                        const data : any[] = v.data
                        return data.map(g => {
                            return {
                                id: g.id,
                                title: g.title,
                                url: g.url,
                                imageUrl: g.images.fixed_height.url
                            } as Giphy
                        })
                    })
                )
        )
        
    }
}