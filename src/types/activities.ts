export type TxKind = "deposit" | "withdrawal" | "transfer";
export type TxStatus = "completed" | "pending" | "failed";

export type CoinSymbol =
  | "BTC"
  | "ETH"
  | "USDT"
  | "LTC"
  | "DOGE"
  | "BNB"
  | "TRX"
  | "LRC"
  | "ACT";

export interface Transaction {
  id: string;                 // e.g. "#1455548"
  coin: {
    symbol: CoinSymbol;       // BTC, ETH, ...
    name: string;             // Bitcoin, Ethereum, ...
  };
  type: TxKind;               // deposit | withdrawal | transfer
  date: string;               // ISO string
  status: TxStatus;           // completed | pending | failed
  amountUSDT: number;         // amount in USDT
  kind: TxKind;               // deposit | withdrawal | transfer (same as type for consistency)
}
