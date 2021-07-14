import React, { useState, useEffect } from 'react';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';
import Modal from 'react-modal';
import SubmissionForm from './SubmissionForm';
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

const App = () => {
  const [data, setData] = useState(null);
  const [clickedButton, setClickedButton] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  const mockData = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000}
  ];
  
  const openModal = (e) => {
    const text = e.target.innerHTML.slice(4).toLowerCase();
    setClickedButton(text);
    setIsOpen(true);
  }

  const closeModal = () => {
    setClickedButton(null);
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
          <SubmissionForm closeModal={closeModal} route={clickedButton}/>
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
