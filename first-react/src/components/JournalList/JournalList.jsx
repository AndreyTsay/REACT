import './JournalList.css';
import CardButton from '../CardButton/CardButton';
import Journalitem from '../Journalitem/Journalitem';

function JournalList({items}) {
	if(items.length ===0) {
		return <p>Записей еще нет, добавьте первую</p>;
	}
	const sortItems = (a, b) => {
		if (a.date < b.date) {
			return 1;
		}
		else {
			return - 1;
		}
	};

	return <>{items.sort(sortItems).map(
		el => ( 
			<CardButton key ={el.id}>
				<Journalitem
					title={el.title}
					text={el.text}
					date={el.date}
				/>
			</CardButton>
		))}
	</>;
}

// 	return (
// 		<div className='journal-list'>{item}</div>

// 	);


export default JournalList; 
