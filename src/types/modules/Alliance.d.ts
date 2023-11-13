export interface IAllianceSummary {
  haveMemberCode: number
  linkClickTotal: number
  memberOnlineToday: number
  memberRegisterToday: number
  noMemberCode: number
  recommendTotal: number
}

export interface IAllianceTransaction {
  list: IAllianceTransactionItem[]
  message: string
  total: number
}

export interface IAllianceTransactionItem {
  createdAt: string
  deposit: number
  id: number
  memberCode: string
  netAmount: number
  withdraw: number
}

export interface IAllianceIncome {
  result: IAllianceIncomeItem[]
  total: number
}

export interface IAllianceIncomeItem {
  id: number
  memberCode: string
  accumulatedPlay: number
  winLose: number
  totalCommission: number
  winLoseAlliance: number
  commissionAlliance: number
  totalBonusPayout: number
  allianceBonusPayout: number
  incomeAlliance: number
  userId: number
}

export interface IAllianceHistorySummary {
  firstDepositCount: number
  haveMemberCode: number
  noMemberCode: number
  recommendTotal: number
}

export interface IAllianceHistoryList {
  message: string
  list: IAllianceHistoryListItem[]
  total: number
}

export interface IAllianceHistoryListItem {
  id: number
  phone: string
  memberCode: string
  credit: number
  registerDate: string
}

export interface IAllianceDailyFilter {
  dateRange?: string | Date
  from?: string | Date
  to?: string | Date
}

export interface IAllianceMemberFilter {
  dateRange?: string | Date
  from?: string | Date
  to?: string | Date
  memberCode?: string
}

export interface IAllianceIncomeFilter {
  dateRange?: string | Date
  from?: string | Date
  to?: string | Date
}

export interface IAllianceHistoryFilter {
  dateRange?: string | Date
  from?: string | Date
  to?: string | Date
}
