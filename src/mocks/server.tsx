import {ActiveModelSerializer, belongsTo, hasMany} from "miragejs";

const {createServer, Model, Factory, Response} = require('miragejs');

const random = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


export default function ({environment = "development"} = {}) {
    return createServer({
        environment,
        models: {
            user: Model.extend({
                movies: hasMany()
            }),
            movie: Model.extend({
                author: belongsTo("user")
            }),
        },
        serializers: {
            // application: JSONAPISerializer,
            // application: RestSerializer,
            application: ActiveModelSerializer,
        },
        seeds(server: any) {
            // for (let i = 1; i <= 100; i++) {
            //     server.create('user');
            // }
            server.createList('user', 10);
            server.createList('movie', 100);
        },
        factories: {
            user: Factory.extend({
                email(i: any) {
                    return `email#${i}@gm.com`;
                },
                username(i: any) {
                    return `username#${i}`
                },
                password() {
                    return '@142515EQWe$'
                },
                afterCreate(author: any, server: any) {
                    server.createList('movie', 5, {author});
                }
            }),
            movie: Factory.extend({
                title(i: any) {
                    return `Movie ${i}`; // Movie 1, Movie 2, etc.
                },
                year() {
                    return random(1990, 2022);
                },
                rating() {
                    return "PG-" + random(10, 50);
                },
                // afterCreate(movie: any, server: any) {
                //     server.create('user', { movie });
                // }
            }),
        },
        routes() {
            // this.urlPrefix = 'http://localhost:3000';
            this.namespace = "api";

            // this.map();

            this.get("/", () => ({health: "Up"}));

            this.resource('users');
            this.resource('movies');

            // this.get('/movies', routeList('movies'));
            // this.get('/movies/:id', routeList('movies'));
            // this.post('/movies', routeSave('movies'));
            // this.patch('/movies/:id', routeSave('movies'));
            // this.delete('/movies/:id', routeDelete('movies'));

            // this.get("/movies", (schema: any, request: any) => {
            //     return schema.movies.all();
            // });
            // this.get('/movies/:id', (schema: any, request: any) => {
            //     let id = request.params.id;
            //     return schema.movies.find(id);
            // });
            // this.post('/movies/', (schema: any, request: any) => {
            //     let attrs = JSON.parse(request.requestBody);
            //     return schema.movies.create(attrs);
            // });
            // this.patch('/movies/:id', (schema: any, request: any) => {
            //     let attrs = JSON.parse(request.requestBody);
            //     let id = request.params.id;
            //     let movie = schema.movies.find(id);
            //     return movie.update(attrs);
            // });
            // this.delete('/movies/:id', (schema: any, request: any) => {
            //     let id = request.params.id;
            //     let movie = schema.movies.find(id);
            //     return movie.destroy();
            // });


            this.get(
                "/movies-3",
                () => {
                    return {
                        movies: [
                            {id: 1, name: "Inception", year: 2010},
                            {id: 2, name: "Interstellar", year: 2014},
                            {id: 3, name: "Dunkirk", year: 2017},
                        ],
                    };
                },
                {timing: 4000}
            );

            // Responding to a POST request
            this.post("/movies-3", (schema: any, request: any) => {
                let attrs = JSON.parse(request.requestBody);
                attrs.id = Math.floor(Math.random() * 100);
                return {movie: attrs};
            });

            // Using the `Response` class to return a 500
            // this.delete("/movies/9999", () => {
            //     return new Response(500, {}, {errors: ["Server did not respond"]});
            // });
        },
    });
};


// console.log(server.db);
// console.log(server.db.movies);
// server.db.movies.insert({ title: "The Dark Knight" });
// server.db.movies.insert({ title: "The Dark Knight 1" });
// console.log(server.db.movies[1]);