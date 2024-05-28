import './CardButton.css';

function CardButton({children, className}) {
	const ct = 'card-button' + (className ? ' '+ className:'');
	return (
		<button className={ct}>
			{children}
		</button>

	);
}

export default CardButton;
