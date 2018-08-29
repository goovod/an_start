import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataUserService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 11, name: 'Yurii', lastName: 'Kuznietsov', email: 	'ykuz@localhost', gender: 'mail', birthday: '2000-07-23' },
      { id: 12, name: 'Maksym', lastName: 'Matvienko', email: 	'tmakm@localhost', gender: 'mail', birthday: '2000-01-20' },
      { id: 13, name: 'Vitalii', lastName: 'Androsenko', email: 	'tviand@localhost', gender: 'mail', birthday: '2000-02-15' },
      { id: 14, name: 'Oleksandr', lastName: 'Vashchenko', email: 	'tolvas@localhost', gender: 'mail', birthday: '2000-08-08' },
      { id: 15, name: 'Katerina', lastName: 'Ksenofontova', email: 	'tkks@localhost', gender: 'femail', birthday: '2000-12-06' },
      { id: 16, name: 'Arsen', lastName: 'Dzodzaev', email: 	'ardz@localhost', gender: 'mail', birthday: '2000-11-01' },
    ];
    return {users};
  }
}
