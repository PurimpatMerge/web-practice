import BaseService from './Base'

import type { IPaginationQuery } from '@/types/modules/Base'
import type {
  IAllianceDailyFilter,
  IAllianceHistoryFilter,
  IAllianceHistoryList,
  IAllianceHistorySummary,
  IAllianceIncome,
  IAllianceIncomeFilter,
  IAllianceMemberFilter,
  IAllianceSummary,
  IAllianceTransaction,
} from '@/types/modules/Alliance'
import type { ITransferHistory } from '@/types/modules/Auth'

export default class AllianceService extends BaseService {
  // [GET] Alliance Summary
  static async allianceSummary(): Promise<IAllianceSummary> {
    return this._get(`/alliances/summary`)
  }

  // [GET] Alliance Daily
  static async allianceDaily({ ...params }: IAllianceDailyFilter): Promise<IAllianceTransaction> {
    return this._get(`/alliances/daily`, { params })
  }

  // [GET] Alliance Member
  static async allianceMember({ ...params }: IPaginationQuery & IAllianceMemberFilter): Promise<IAllianceTransaction> {
    return this._get(`/alliances/member`, { params })
  }

  // [GET] Alliance Income
  static async allianceIncome({ ...params }: IPaginationQuery & IAllianceIncomeFilter): Promise<IAllianceIncome> {
    return this._get(`/alliances/income`, { params })
  }

  // [GET] Alliance History Summary
  static async allianceHistorySummary({ ...params }: IAllianceHistoryFilter): Promise<IAllianceHistorySummary> {
    return this._get(`/alliances/first-deposit-history/summary`, { params })
  }

  // [GET] Alliance History List
  static async allianceHistoryList({
    ...params
  }: IPaginationQuery & IAllianceHistoryFilter): Promise<IAllianceHistoryList> {
    return this._get(`/alliances/first-deposit-history`, { params })
  }

  // [GET] Transfer History
  static async allianceTransferHistory({ ...params }: IPaginationQuery): Promise<ITransferHistory> {
    return this._get(`/alliances/transfer-history`, { params })
  }
}
