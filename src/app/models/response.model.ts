export interface IReponseData {
  data: any;
  message: string;
  status: boolean;
}

export interface IParents {
  id: number;
  sender: string;
  receiver: string;
  totalAmount: number;
  totalPaidAmount: number;
}

export interface IParentsResponse extends IReponseData {
  data: {
    size: number;
    list: IParents[];
  }
}

