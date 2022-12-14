const usersData = [
  {
    userId: 0,
    name: 'Попов Гордей',
    phone: '+7 (007) 580-09-83',
    email: 'qcrooks@yahoo.com',
    gender: 'male',
    tasks: [
      {
        taskId: 0,
        text: 'позаниматься музыкой 45 минут',
        finished: false,
      },
      {
        taskId: 1,
        text: 'послушать лекцию',
        finished: false,
      },
      {
        taskId: 2,
        text: 'посмотреть фильм',
        finished: false,
      },
    ],
    payments: [
      {
        paymentId: 0,
        date: '2020-07-01',
        amount: '300',
      },
      {
        paymentId: 1,
        date: '2020-07-10',
        amount: '500',
      },
    ],
  },
  {
    userId: 1,
    name: 'Королева Марьяна',
    phone: '+7 (007) 980-00-68',
    email: 'icassin@hotmail.com',
    gender: 'female',
    tasks: [
      {
        taskId: 0,
        text: 'повесить белье',
        finished: false,
      },
      {
        taskId: 1,
        text: 'поучиться рисовать',
        finished: false,
      },
      {
        taskId: 2,
        text: 'сложить посудомойку',
        finished: false,
      },
    ],
    payments: [
      {
        paymentId: 2,
        date: '2020-08-04',
        amount: '400',
      },
      {
        paymentId: 3,
        date: '2020-08-15',
        amount: '550',
      },
    ],
  },
  {
    userId: 2,
    name: 'Соколов Александр',
    phone: '+7 (007) 135-93-48',
    email: 'monahan.ansley@yahoo.com',
    gender: 'male',
    tasks: [
      {
        taskId: 0,
        text: 'повесить белье',
        finished: false,
      },
      {
        taskId: 1,
        text: 'почитать книгу',
        finished: false,
      },
      {
        taskId: 2,
        text: 'йога',
        finished: false,
      },
    ],
    payments: [
      {
        paymentId: 4,
        date: '2020-09-03',
        amount: '200',
      },
      {
        paymentId: 5,
        date: '2020-09-10',
        amount: '350',
      },
    ],
  },
  {
    userId: 3,
    name: 'Морозов Степан',
    phone: '+7 (007) 754-00-38',
    email: 'wendy70@gmail.com',
    gender: 'male',
    tasks: [
      {
        taskId: 0,
        text: 'вытереть пыль в своей комнате',
        finished: false,
      },
      {
        taskId: 1,
        text: 'накормить кошку',
        finished: false,
      },
      {
        taskId: 2,
        text: 'убраться на столе',
        finished: false,
      },
    ],
    payments: [
      {
        paymentId: 6,
        date: '2020-11-01',
        amount: '250',
      },
      {
        paymentId: 7,
        date: '2020-11-15',
        amount: '550',
      },
    ],
  },
  {
    userId: 4,
    name: 'Захарова София',
    phone: '+7 (007) 296-28-92',
    email: 'bryana45@hotmail.com',
    gender: 'female',
    tasks: [
      {
        taskId: 0,
        text: 'помочь сестре с учебой',
        finished: false,
      },
      {
        taskId: 1,
        text: 'вытереть пыль в комнате родителей',
        finished: false,
      },
      {
        taskId: 2,
        text: 'порисовать со стилусом',
        finished: false,
      },
    ],
    payments: [
      {
        paymentId: 8,
        date: '2020-12-05',
        amount: '650',
      },
      {
        paymentId: 9,
        date: '2020-12-20',
        amount: '250',
      },
    ],
  },
];

export default usersData;
