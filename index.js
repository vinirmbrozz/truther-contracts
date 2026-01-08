import messages from './gen/node/transaction_pb.js';

// Exporta as mensagens para serem usadas como: Transaction, PredictiveAnalyzer, etc.
export const {
    Transaction,
    PredictiveAnalyzer,
    FinalDecision
} = messages;

export default messages;