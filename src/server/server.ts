import {createServer, Model, Response} from 'miragejs';

export default function() {
    createServer({
        models: {
            country: Model,
            airport: Model,
            airline: Model,
        },

        seeds(server) {
            server.create('country', {id: '1', name: 'Poland'});
            server.create('country', {id: '2', name: 'Italy'});
            server.create('country', {id: '3', name: 'Spain'});

            server.create('airport', {
                id: '1',
                country_id: '1',
                name: 'Warsaw',
                iata: 'WAW',
                pax_amount: 10000000,
                airlines: [2, 1, 3, 7, 8, 9],
                average_delay: 1,
                ils_equipment: 'cat3_both',
                services: [],
            });
            server.create('airport', {
                id: '4',
                country_id: '1',
                name: 'Cracov',
                iata: 'KRK',
                pax_amount: 3800000,
                airlines: [5, 2, 1, 3],
                average_delay: 1,
                ils_equipment: 'cat2_both',
                services: [],
            });
            server.create('airport', {
                id: '5',
                country_id: '1',
                name: 'Gdańsk',
                iata: 'GDN',
                pax_amount: 3000000,
                airlines: [3, 2, 1, 5, 7, 9],
                average_delay: 1,
                ils_equipment: 'cat2_single',
                services: [],
            });
            server.create('airport', {
                id: '6',
                country_id: '1',
                name: 'Wrocław',
                iata: 'WRO',
                pax_amount: 2100000,
                airlines: [5, 3, 2, 1, 7, 8],
                average_delay: 1,
                ils_equipment: 'cat1_both',
                services: [],
            });
            server.create('airport', {
                id: '7',
                country_id: '1',
                name: 'Katowice',
                iata: 'KTW',
                pax_amount: 4800000,
                airlines: [3, 1, 2, 5],
                average_delay: 1,
                ils_equipment: 'cat1_both',
                services: [],
            });
            server.create('airport', {
                id: '2',
                country_id: '2',
                name: 'Milan Malpensa',
                iata: 'MPX',
                pax_amount: 7200000,
                airlines: [1, 2, 3, 4, 5, 6, 7],
                average_delay: 1,
                ils_equipment: 'cat3_both',
                services: [],
            });
            server.create('airport', {
                id: '8',
                country_id: '2',
                name: 'Rome Fiumicino',
                iata: 'FCO',
                pax_amount: 9800000,
                airlines: [1, 3, 4, 6, 7, 8, 9],
                average_delay: 1,
                ils_equipment: 'cat3_both',
                services: [],
            });
            server.create('airport', {
                id: '9',
                country_id: '2',
                name: 'Palermo',
                iata: 'PMO',
                pax_amount: 6600000,
                airlines: [1, 3, 4, 5, 6, 7, 9],
                average_delay: 1,
                ils_equipment: 'cat2_both',
                services: [],
            });
            server.create('airport', {
                id: '10',
                country_id: '2',
                name: 'Catania',
                iata: 'CTA',
                pax_amount: 9900000,
                airlines: [1, 3, 4, 5, 6, 7, 9],
                average_delay: 1,
                ils_equipment: 'cat3_single',
                services: [],
            });
            server.create('airport', {
                id: '11',
                country_id: '2',
                name: 'Trapani',
                iata: 'TPS',
                pax_amount: 480000,
                airlines: [1, 5],
                average_delay: 1,
                ils_equipment: 'cat1_single',
                services: [],
            });
            server.create('airport', {
                id: '12',
                country_id: '2',
                name: 'Comiso',
                iata: 'CIY',
                pax_amount: 420000,
                airlines: [4, 5, 6],
                average_delay: 1,
                ils_equipment: 'cat1_single',
                services: [],
            });
            server.create('airport', {
                id: '3',
                country_id: '3',
                name: 'Barcelona',
                iata: 'BCN',
                pax_amount: 50100000,
                airlines: [1, 3, 4, 5, 6, 7, 8, 9],
                average_delay: 1,
                ils_equipment: 'cat3_both',
                services: [],
            });
            server.create('airport', {
                id: '13',
                country_id: '3',
                name: 'Madrid',
                iata: 'MAD',
                pax_amount: 17110000,
                airlines: [1, 3, 4, 5, 6, 7, 8, 9],
                average_delay: 1,
                ils_equipment: 'cat3_both',
                services: [],
            });
            server.create('airport', {
                id: '14',
                country_id: '3',
                name: 'Sevilla',
                iata: 'SVQ',
                pax_amount: 5100000,
                airlines: [1, 4, 5, 6, 7, 9],
                average_delay: 1,
                ils_equipment: 'cat2_both',
                services: [],
            });
            server.create('airport', {
                id: '15',
                country_id: '3',
                name: 'Palma de Mallorca',
                iata: 'PMI',
                pax_amount: 29700000,
                airlines: [1, 4, 5, 6, 7, 8, 9],
                average_delay: 1,
                ils_equipment: 'cat2_both',
                services: [],
            });
            server.create('airport', {
                id: '16',
                country_id: '3',
                name: 'Menorca',
                iata: 'MAH',
                pax_amount: 3430000,
                airlines: [1, 4, 5, 6, 7, 8, 9],
                average_delay: 1,
                ils_equipment: 'cat1_both',
                services: [],
            });
            server.create('airport', {
                id: '17',
                country_id: '3',
                name: 'Tenerife Norte',
                iata: 'TFN',
                pax_amount: 4700000,
                airlines: [4, 5],
                average_delay: 1,
                ils_equipment: 'cat2_both',
                services: [],
            });

            server.create('airline', {id: '1', name: 'Lufthansa'});
            server.create('airline', {id: '2', name: 'PLL Lot'});
            server.create('airline', {id: '3', name: 'Wizzair'});
            server.create('airline', {id: '4', name: 'Vueling'});
            server.create('airline', {id: '5', name: 'Ryanair'});
            server.create('airline', {id: '6', name: 'easy jet'});
            server.create('airline', {id: '7', name: 'Air france'});
            server.create('airline', {id: '8', name: 'SWISS'});
            server.create('airline', {id: '9', name: 'KLM'});
        },

        routes() {
            this.get('/api/countries', schema => {
                // @ts-ignore
                return schema.countries.all();
            });
            this.get('/api/countries/:id', (schema, request) => {
                // @ts-ignore
                return schema.countries.where({id: request.params.id});
            });
            this.get('/api/countries/:id/airports', (schema, request) => {
                // @ts-ignore
                return schema.airports.where({country_id: request.params.id});
            });
            this.post('/api/countries/:id/airports', (schema, request) => {
                // @ts-ignore
                let attrs = {...JSON.parse(request.requestBody), country_id: request.params.id};
                // @ts-ignore
                return schema.airports.create(attrs);
                // return new Response(404, {"Content-Type" : "application/json"}, { error: `Some error message`});
            });
            this.get('/api/airlines', schema => {
                // @ts-ignore
                return schema.airlines.all();
            });
        },
    });
}
