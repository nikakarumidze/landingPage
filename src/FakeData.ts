import { IFaqData, IPrize, leaderBoardDataType } from './types';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import FlightIcon from '@mui/icons-material/Flight';

export const leaderBoardData: leaderBoardDataType[] = Array(20).fill({
  amount: Math.floor(Math.random() * 1000),
  description: 'სპეც. ტურნირის ბილეთი',
});

export const toggleButtonValues = [
  {
    date: '1-29 აპრილი',
    name: 'Cash Games',
  },
  {
    date: '13-29 აპრილი',
    name: 'Spring Series',
  },
  {
    date: '30 აპრილი',
    name: 'Final Stage',
  },
];

export const PrizeListData: IPrize[] = [
  {
    Icon: FlightIcon,
    description: 'The Festival in Malta-ს საგზური',
  },
  {
    Icon: AirplaneTicketIcon,
    description:
      'სპეციალური ტურნირის „Cashgame Sharks” ბილეთი, სადაც გათამაშდება The Festival in Malta-ს საგზური',
  },
  {
    Icon: CardGiftcardIcon,
    description: 'ტექნიკის მაღაზიის ვაუჩერი',
  },
];

export const FaqData: IFaqData[] = [
  {
    header: 'როდის იწყება და რა ფორმატით გაიმართება აქცია',
    description: 'lorem lrore',
  },
  {
    header: 'როგორ მივიღო აქციაში მონაწილეობა?',
    description: 'lorem lrore',
  },
  {
    header: 'სხვადასხვა',
    description: 'lorem lrore',
  },
];
