export default function getData (url) {
    return fetch(url)
        .then(resp => {
            if (!resp.ok) {
                throw new Error('There was a problem fetching data.');
            }
            return resp.json();
        });
}