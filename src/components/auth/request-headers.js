export default function getHeaders() {
		const token = localStorage.getItem('jwt-token') || '';
		return { Authorization: token };
};