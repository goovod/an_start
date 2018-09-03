import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataUserService implements InMemoryDbService {
  createDb() {
    const users = [
      {id: 11, name: 'Yurii', lastName: 'Kuznietsov', email: 'ykuz@localhost', gender: 'male',
        birthday: '2000-07-23', status: 'active', address: '', latitude: 0, longitude: 0},
      {id: 12, name: 'Maksym', lastName: 'Matvienko', email: 'tmakm@localhost', gender: 'male',
        birthday: '2000-01-20', status: 'active', address: '', latitude: 0, longitude: 0},
      {id: 13, name: 'Vitalii', lastName: 'Androsenko', email: 'tviand@localhost', gender: 'male',
        birthday: '2000-02-15', status: 'active', address: '', latitude: 0, longitude: 0},
      {id: 14, name: 'Oleksandr', lastName: 'Vashchenko', email: 'tolvas@localhost', gender: 'male',
        birthday: '2000-08-08', status: 'pending', address: '', latitude: 0, longitude: 0},
      {id: 15, name: 'Katerina', lastName: 'Ksenofontova', email: 'tkks@localhost', gender: 'female',
        birthday: '2000-12-06', status: 'pending', address: '', latitude: 0, longitude: 0},
      {id: 16, name: 'Arsen', lastName: 'Dzodzaev', email: 'ardz@localhost', gender: 'male',
        birthday: '2000-11-01', status: 'pending', address: '', latitude: 0, longitude: 0},
      {id: 17, name: 'Arsen2', lastName: 'Dzodzaev2', email: 'ardz@localhost', gender: 'male',
        birthday: '2000-11-01', status: 'pending', address: '', latitude: 0, longitude: 0},
    ];
    return {users};
  }
}
