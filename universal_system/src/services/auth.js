export default function SignIn() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                token: '2fenisdamanerqwerqweqgtw',
                user: {
                    name: 'marcelo a.',
                    email: 'marcelu.phd@gmail.com'
                },
            });
        }, 2000); //2 sec time out
    });
};