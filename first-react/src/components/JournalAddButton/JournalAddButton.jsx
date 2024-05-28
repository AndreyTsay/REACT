import CardButton from '../CardButton/CardButton';
import './JournalAddButton.css';

function JournalAddButton() {
	return (
		<CardButton className="journal-add">
			<svg width="20" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M4 12H20M12 4V20" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			</svg>
			Новое воспоминание
		</CardButton>
	
	);
}

export default JournalAddButton;
 