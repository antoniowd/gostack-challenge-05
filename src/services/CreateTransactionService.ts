import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface RequestDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type }: RequestDTO): Transaction {
    if (!title || !value || !type) {
      throw new Error('Invalid params');
    }

    if (value <= 0) {
      throw new Error(
        'The field `value` must have a positive number greater than 0',
      );
    }

    if (type !== 'income' && type !== 'outcome') {
      throw new Error(
        'The field `type` must have a value `income` or `outcome`',
      );
    }

    const balance = this.transactionsRepository.getBalance();
    if (type === 'outcome' && balance.total < value) {
      throw new Error("You don't have enough balance");
    }

    return this.transactionsRepository.create({
      title,
      value,
      type,
    });
  }
}

export default CreateTransactionService;
