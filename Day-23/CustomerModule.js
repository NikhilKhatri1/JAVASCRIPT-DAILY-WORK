// CustomerModule.js
var title = "Customer Portal";

export function PrintTitle() {
    return title;
}

export default function Login() {
    return `
        <div>
            <h2>Customer Login </h2>
            <input type="email"> <button> Login </button>
        </div>
    `;
}
