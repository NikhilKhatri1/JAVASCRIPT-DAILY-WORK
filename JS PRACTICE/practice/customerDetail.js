var title = "Customer Portal";
export function printTitle() {
    return title;
}

export default function login() {
    return `
        <div>
            <h2>Customer Login</h2>
            <input type="email"><button>Login</button>
        </div>
        `;
}