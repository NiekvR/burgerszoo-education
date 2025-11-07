import { Bird } from '../../app/search-cards/model/bird.model';
import { Status } from '../../app/search-cards/model/status.enum';

export const BUSHBIRDS: Bird[] = [
  {
    id: '1',
    nameNl: 'Chaco chachalaca',
    nameDE: 'Chacoguan',
    nameSC: 'Ortali canicollis',
    size: '(Sn-St: 60 cm)',
    continent: 'Amerika',
    status: Status.Moderate,
    image: 'chacalaca.jpg'
  }
];
