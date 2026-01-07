// index.d.ts
export namespace truther {
    export namespace transaction {
        export class PredictiveAnalyzer {
            getIsAllowed(): boolean;
            setIsAllowed(value: boolean): void;
            getCardId(): string;
            setCardId(value: string): void;
            // Adicione os outros campos conforme necessário
            serializeBinary(): Uint8Array;
        }

        export class Transaction {
            getTransactionAmount(): string;
            setTransactionAmount(value: string): void;
            getPredictiveAnalyzer(): PredictiveAnalyzer;
            setPredictiveAnalyzer(value: PredictiveAnalyzer): void;
            getFinalDecision(): string;
            setFinalDecision(value: string): void;
            serializeBinary(): Uint8Array;
            static deserializeBinary(bytes: Uint8Array): Transaction;
        }
    }
}