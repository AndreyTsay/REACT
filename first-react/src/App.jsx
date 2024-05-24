
// import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import CardButton from './components/CardButton/CardButton';
import Journalitem from './components/Journalitem/Journalitem';
 
function App() {
	const data = [
		{
			title: 'Подготовка к обновлению курсов',
			text : 'Горные походы открывают удивительные природные ладщафты',
			date: new Date()
		},
		{
			title: 'Похов в горы',
			text : 'Думал, что очень много времени',
			date: new Date()
		}
	];

	return (
		<>
			<h1>Заголовок</h1>
			<p>Какой-то текст</p>
			<Button/>
			<CardButton>
				<Journalitem
					title={data[0].title}
					text={data[0].text}
					date={data[0].date}
				/>
			</CardButton>
			<CardButton>
				<Journalitem
					title={data[1].title}
					text={data[1].text}
					date={data[1].date}
				/>
			</CardButton>
		</>
	);
}

export default App;
