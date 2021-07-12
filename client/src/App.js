import React, { useState, useEffect } from 'react';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';
import Modal from 'react-modal';
import ExpenseForm from './ExpenseForm';
import './App.css';

const customStyles = {
  content: {
    top: '50%',
    height: '50vh',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

function App() {
  const [data, setData] = useState(null);

  const mockData = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000}
  ];

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Finance Tracker</h1>
        <button onClick={openModal}>Add Expense</button>
        <button onClick={openModal}>Add Income</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <ExpenseForm closeModal={closeModal}/>
          {/* <button onClick={closeModal}>close</button> */}
        </Modal>
        <VictoryChart
          domainPadding={20}
        >
          <VictoryAxis
          tickValues={[1, 2, 3, 4]}
          tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
          />
          <VictoryAxis
            dependentAxis
            tickFormat={(x) => (`$${x / 1000}k`)}
          />
          <VictoryBar
            data={mockData}
            x="quarter"
            y="earnings"
          />
        </VictoryChart>
        <p>{!data ? 'Loading...' : data}</p>
      </header>
    </div>
  );
}

export default App;
