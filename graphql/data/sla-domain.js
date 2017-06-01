exports.slaDomainMockData = [
  {
    id: 'slaId1',
    name: 'Gold',
    primaryClusterId: 'cluster1',
    frequencies: [
      {
        timeUnit: 'hour',
        frequency: 5,
        retention: 5
      },
      {
        timeUnit: 'day',
        frequency: 5,
        retention: 5
      }
    ]
  },
  {
    id: 'slaId2',
    name: 'Silver',
    primaryClusterId: 'cluster1',
    frequencies: [
      {
        timeUnit: 'hour',
        frequency: 15,
        retention: 5
      },
      {
        timeUnit: 'day',
        frequency: 10,
        retention: 5
      }
    ]
  },
  {
    id: 'slaId3',
    name: 'Bronze',
    primaryClusterId: 'cluster1',
    frequencies: [
      {
        timeUnit: 'day',
        frequency: 30,
        retention: 30
      }
    ]
  }
]