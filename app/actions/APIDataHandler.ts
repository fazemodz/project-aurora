export default function APIDataHandler(method: string, url: string, data: any) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            resolve(JSON.parse(xhr.response));
        } else {
            reject(JSON.parse(xhr.response));
        }
        };
        xhr.onerror = () => {
        reject(JSON.parse(xhr.response));
        };
        xhr.send(JSON.stringify(data));
    });
}
