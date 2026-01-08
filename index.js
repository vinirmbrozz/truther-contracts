import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Importa o arquivo gerado pelo protoc
const messages = require('./gen/node/transaction_pb.js');

// Exporta as classes para que seu teste as encontre
export const {
    Transaction,
    PredictiveAnalyzer,
    FinalDecision
} = messages;

export default messages;