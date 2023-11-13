export interface IAffiliateSummary {
  bonusShareTotal: number
  commissionCasino: number
  commissionSlot: number
  commissionSport: number
  percentSport: number
  percentCasino: number
  percentSlot: number
  commissionCurrent: number
  commissionTotal: number
  firstDepositBonus: number
  linkClickTotal: number
  memberDepositTotal: number
  memberTotal: number
  userId: number
}

export interface ISummaryCommission {
  name: string
  percent: number
  value: number
}

export interface IAffiliateMember {
  list: IAffiliateMemberItem[]
  message: string
  total: number
}

export interface IAffiliateMemberItem {
  id: number
  memberCode: string
  playBalance: number
  receivedBalance: number
}

export interface IAffiliateIncome {
  list: IAffiliateIncomeItem[]
  message: string
  total: number
}

export interface IAffiliateIncomeItem {
  createdAt: string
  receivedBalance: number
}

export interface IAffiliateIncomeFilter {
  dateRange?: string | Date
  from?: string | Date
  to?: string | Date
}
