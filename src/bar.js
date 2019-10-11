export default function bar() {
	const text = document.createElement('h1');
	text.innerHTML = 'Hello WORLD!!!!!';
	document.body.appendChild(text);

	const btn = document.createElement('button');
	btn.innerHTML = 'pulsa';
	document.body.appendChild(btn);
}
