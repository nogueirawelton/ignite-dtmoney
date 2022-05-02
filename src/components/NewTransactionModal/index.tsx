import Modal from 'react-modal';
import closeImg from '../../assets/close.svg'
import { Container, RadioBox, TransactionTypeContainer} from './styles';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { FormEvent, useState } from 'react';
import { useTransactions } from '../../hooks/useTransactions';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement('#root');

export const NewTransactionModal = ({ isOpen, onRequestClose } : NewTransactionModalProps) => {
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState('deposit');

  async  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    })

    onRequestClose();
  }

  return(
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="react-modal-overlay" className="react-modal-content">
    <button type="button" onClick={onRequestClose} className="react-modal-close">
      <img src={closeImg} alt="Fechar Modal" />
    </button>
    <Container onSubmit={handleCreateNewTransaction}>
      <h2>Cadastrar Transação</h2>
      <input type="text" placeholder="Título" onChange={event => setTitle(event.target.value)}/>
      <input type="number" placeholder="Valor" onChange={event => setAmount(+event.target.value)}/>
      <TransactionTypeContainer>
        <RadioBox type="button" onClick={() => {
          setType('deposit');
        }} isActive={type === 'deposit'} activeColor="green">
          <img src={incomeImg} alt="Entradas" />
          <span>Entrada</span>
        </RadioBox>
        <RadioBox type="button" onClick={() => {
          setType('withdraw');
        }} isActive={type === 'withdraw'} activeColor="red">
          <img src={outcomeImg} alt="Saídas" />
          <span>Saída</span>
        </RadioBox>
      </TransactionTypeContainer>
      <input type="text" placeholder="Categoria" onChange={event => setCategory(event.target.value)}/>
      <button type="submit">Cadastrar</button>
    </Container>
  </Modal>
  )
}
