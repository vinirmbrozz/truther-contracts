# Truther Contracts SDK - TypeScript

## Installation
```bash
npm install git+https://github.com/vinirmbrozz/truther-contracts.git#main:gen/typescript
```

## Usage
```typescript
import { Transaction, PredictiveAnalyzer } from '@truther/contracts-sdk';

const transaction: Transaction = {
  transactionAmount: "100.00",
  predictiveAnalyzer: {
    isAllowed: true,
    reason: "Approved",
    cardId: "card-123",
    userId: "user-456",
    walletAddress: "0x...",
    allowance: "5000.00"
  },
  final_decision: "APPROVED"
};
```
