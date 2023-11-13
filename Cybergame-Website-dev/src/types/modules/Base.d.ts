export type IPaginationQuery = {
  page: number
  limit?: number
}

export interface IMenuItem {
  label: string
  path: string
}

export interface IMenu {
  label: string
  path: string
  icon: React.ReactNode
  list: IMenuItem[]
}

export type IToken = {
  token: string
  gameToken?: string
}

export interface DropdownItem {
  label: string
  path: string
}
export interface IErrorResponse {
  errorCode: string
  response: {
    data: {
      data?: string
      message: string
    }
  }
}

export interface IOpenList {
  key: string
  name: string
  path?: string
  icon?: React.ReactNode
}
