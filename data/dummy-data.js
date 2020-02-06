import Category from '../models/category';
import Meal from '../models/meal';

export const CATEGORIES = [
  new Category('c1', 'Italy', '#47fced'),
  new Category('c2', 'Spain', '#ffc7ff'),
  new Category('c4', 'Grecce', '#9eecff'),
  new Category('c5', 'Monaco', '#FFDC8D'),
  new Category('c6', 'Austria', '#FF8D8D'),
  new Category('c7', 'Maldives', '#9eecff'),
  new Category('c8', 'UAE', '#b9ffb0'),
  new Category('c9', 'France', '#ffc7ff'),
  new Category('c10', 'Cuba', '#47fced')
];

export const MEALS = [
  //ITALY------------------------------------------------
  new Meal(
    'm1',
    ['c1'],
    'Rome',
    'Europe',
    'simple',
    'https://cdn.pixabay.com/photo/2014/03/26/05/47/vittorio-emanuele-monument-298412_960_720.jpg',
    20,
    [
      'Rome is the capital city and a special comune of Italy (named Comune di Roma Capitale)',
       'Rome also serves as the capital of the Lazio region.' ,
      'With 2,879,728 residents in 1,285 km2 (496.1 sq mi),[1] it is also the countrys most populated comune It is the fourth most populous city in the European Union by population within city limits.',
       'It is the centre of the Metropolitan City of Rome, which has a population of 4,355,725 residents,thus making it the most populous metropolitan city in Italy.',
       'Rome is located in the central-western portion of the Italian Peninsula, within Lazio (Latium),along the shores of the Tiber.',
      
    ],
    [
      'Rome is a hotbed of history and top-tier attractions, from the Colosseum to the Vatican, the Sistine Chapel, and the Trevi fountain.' ,
      'Visitors to this incredible city are likely to find themselves wishing they had just a bit more time to take it all in. ',
      
    ],
    true,
    false,
  ),new Meal(
    'm11',
    ['c1',],
    'Venice',
    'Europe',
    'simple',
    'https://cdn.pixabay.com/photo/2016/02/19/11/36/canal-1209808_960_720.jpg',
    20,
    [
      ''
      
    ],
    [
      '',
      
    ],
    false,
    true,
    
  ),new Meal(
    'm12',
    ['c1'],
    'Portofino',
    'Europe',
    'simple',
    'https://cdn.pixabay.com/photo/2017/08/21/13/19/portofino-2665369_960_720.jpg',
    20,
    [
      '',
      
    ],
    [
      '',
      
    ],
    false,
    true,
    
  ),
//SPAIN---------------------------------------------------------
  new Meal(
    'm2',
    ['c2'],
    'Barcelona',
    'Europe',
    'simple',
    'https://cdn.pixabay.com/photo/2018/03/14/23/00/barcelona-3226639_960_720.jpg',
    10,
    [
      ''
    ],
    [
      ''
    ],
    true,
    false,
    
  ),
  new Meal(
    'm13',
    ['c2'],
    'Marbella',
    'Europe',
    'simple',
    'https://cdn.pixabay.com/photo/2015/06/11/23/09/puerto-banus-806346_960_720.jpg',
    20,
    [
      ''

    ],
    [
      '',
      
    ],
    false,
    true,
    
  ),
  new Meal(
    'm14',
    ['c2'],
    'Valencia',
    'Europe',
    'simple',
    'https://cdn.pixabay.com/photo/2015/11/18/16/03/valencia-1049389_960_720.jpg',
    20,
    [
      '',
      
    ],
    [
      '',
      
    ],
    true,
    false,
    
  ),
//GRECEE---------------------------------------------------------
  new Meal(
    'm4',
    ['c4'],
    'Athens',
    'Europe',
    'challenging',
    'https://cdn.pixabay.com/photo/2012/02/07/17/12/acropolis-12044_960_720.jpg',
    60,
    [
      '',
      
    ],
    [
      '',
     
    ],
    false,
    true,
    
  ),new Meal(
    'm17',
    ['c4'],
    'Mykonos',
    'Europe',
    'simple',
    'https://cdn.pixabay.com/photo/2012/02/26/11/06/mykonos-17156_960_720.jpg',
    20,
    [
      '',
      
    ],
    [
      '',
      
    ],
    false,
    true,
    
  ),new Meal(
    'm18',
    ['c4'],
    'Chalkidiki',
    'Europe',
    'simple',
    'https://cdn.pixabay.com/photo/2018/02/21/13/58/sea-3170389_960_720.jpg',
    20,
    [
      '',
      
    ],
    [
      '',
      
    ],
    false,
    true,
    
  ),
//MONACO---------------------------------------------------------
  new Meal(
    'm5',
    ['c5'],
    'Monte-Carlo',
    'Europe',
    'simple',
    'https://cdn.pixabay.com/photo/2017/12/07/15/41/monaco-3003996_960_720.jpg',
    15,
    [
      '',
     
    ],
    [
      '',
     
    ],
    false,
    true,
    
  ),
//AUSTRIA---------------------------------------------------------
  new Meal(
    'm6',
    ['c6'],
    'Vienna',
    'Europe',
    'hard',
    'https://cdn.pixabay.com/photo/2017/12/04/14/07/vienna-2997032_960_720.jpg',
    240,
    [
      '',
     
    ],
    [
      '',
      
    ],
    false,
    true,
    
  ),new Meal(
    'm21',
    ['c6'],
    'Innsbruck',
    'Europe',
    'hard',
    'https://cdn.pixabay.com/photo/2020/01/12/21/51/innsbruck-4761198_960_720.jpg',
    240,
    [
      '',
     
    ],
    [
      '',
      
    ],
    false,
    true,
    
  ),new Meal(
    'm22',
    ['c6'],
    'Salzburg',
    'Europe',
    'hard',
    'https://cdn.pixabay.com/photo/2016/10/20/18/56/salzburg-1756367_960_720.jpg',
    240,
    [
      '',
     
    ],
    [
      '',
      
    ],
    false,
    true,
    
  ),
//MALDIVES---------------------------------------------------------
  new Meal(
    'm7',
    ['c7'],
    'Maldives',
    'Asia',
    'simple',
    'https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_960_720.jpg',
    20,
    [
      '',
      
    ],
    [
      '',
     
    ],
    false,
    true,
   
  ),
//UAE---------------------------------------------------------
  new Meal(
    'm8',
    ['c8'],
    'Dubai',
    'Asia',
    'challenging',
    'https://cdn.pixabay.com/photo/2019/03/09/13/45/dubai-4044183_960_720.jpg',
    35,
    [
      '',
      
    ],
    [
      '',
     
    ],
    true,
    false,
   
  ),
//FRANCE---------------------------------------------------------
  new Meal(
    'm9',
    ['c9'],
    'Paris',
    'Europe',
    'hard',
    'https://cdn.pixabay.com/photo/2016/11/18/19/01/paris-1836415_960_720.jpg',
    45,
    [
      '',
      
    ],
    [
      '',
      
    ],
    true,
    false,
    
  ),new Meal(
    'm27',
    ['c9'],
    'Cannes',
    'Europe',
    'hard',
    'https://cdn.pixabay.com/photo/2014/07/21/18/01/cannes-398764_960_720.jpg',
    45,
    [
      '',
      
    ],
    [
      '',
      
    ],
    false,
    true,
    
  ),new Meal(
    'm28',
    ['c9'],
    'Marseille',
    'Europe',
    'hard',
    'https://cdn.pixabay.com/photo/2018/10/01/17/40/marseille-3716867_960_720.jpg',
    45,
    [
      '',
      
    ],
    [
      '',
      
    ],
    false,
    true,
    
  ),
  //CUBA---------------------------------------------------------
  new Meal(
    'm10',
    ['c10'],
    'Cuba Havana',
    'North America',
    'simple',
    'https://cdn.pixabay.com/photo/2016/09/02/08/32/cuba-1638594_960_720.jpg',
    30,
    [
      '',
     
    ],
    [
      '',
     
    ],
    true,   
    false,
    
  ),
];
  