import { SvgIconTypeMap } from '@mui/material';

export interface IPrize {
  // Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
  //   muiName: string;
  // };
  Icon: any;
  description: string;
}

export interface leaderBoardDataType {
  amount: number;
  description: string;
}

export interface IFaqData {
  header: string;
  description: string;
}

export interface ITravelCard {
  title: string;
  icon: any;
}
