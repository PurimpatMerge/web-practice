import BaseService from './Base'

import type { IPaginationQuery } from '@/types/modules/Base'
import type {
  IAffiliateIncome,
  IAffiliateIncomeFilter,
  IAffiliateMember,
  IAffiliateSummary,
} from '@/types/modules/Affiliate'
import type { ITransferHistory } from '@/types/modules/Auth'

export default class AffiliateService extends BaseService {
  // [GET] Affiliate Summary
  static async affiliateSummary(): Promise<IAffiliateSummary> {
    return this._get(`/affiliates/summary`)
  }

  // [GET] Affiliate Member
  static async affiliateMember({ ...params }: IPaginationQuery): Promise<IAffiliateMember> {
    return this._get(`/affiliates/member`, { params })
  }

  // [GET] Affiliate Income
  static async affiliateIncome({ ...params }: IPaginationQuery & IAffiliateIncomeFilter): Promise<IAffiliateIncome> {
    return this._get(`/affiliates/income`, { params })
  }

  // [POST] Withdraw Commission
  static async withdrawCommission() {
    return this._post(`/affiliates/withdraw-commission`)
  }

  // [GET] Transfer History
  static async affiliateTransferHistory({ ...params }: IPaginationQuery): Promise<ITransferHistory> {
    return this._get(`/affiliates/transfer-history`, { params })
  }
}
