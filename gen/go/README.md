# Truther Contracts SDK - Go

## Installation
```bash
go get github.com/vinirmbrozz/truther-contracts/gen/go
```

## Usage
```go
package main

import (
    "fmt"
    pb "github.com/vinirmbrozz/truther-contracts/gen/go/transaction"
)

func main() {
    tx := &pb.Transaction{
        TransactionAmount: "100.00",
        PredictiveAnalyzer: &pb.PredictiveAnalyzer{
            IsAllowed: true,
            Reason: "Approved",
            CardId: "card-123",
            UserId: "user-456",
            WalletAddress: "0x...",
            Allowance: "5000.00",
        },
        FinalDecision: "APPROVED",
    }
    fmt.Println(tx)
}
```
