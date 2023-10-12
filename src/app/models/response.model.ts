/**
 * @interface Common response structure
 */
export interface IReponseData {
  data: any;
  message: string;
  status: boolean;
}

/**
 * @interface
 */
export interface IParents {
  id: number;
  sender: string;
  receiver: string;
  totalAmount: number;
  totalPaidAmount: number;
}

/**
 * @interface Common response structure
 */
export interface IParentsResponse extends IReponseData {
  data: {
    size: number;
    list: IParents[];
  }
}

/**
 * @interface Common response structure
 */
export interface IChildren {
  id: number;
  parentId: number;
  paidAmount: number;
}

/**
 * @interface Common response structure
 */
export interface IChildrenResponse extends IReponseData {
  data: {
    parent: IParents;
    size: number;
    children: IChildren[];
  }
}

