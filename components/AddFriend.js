

// Add the second handler function parameter and get handleAddFriend
export default function createAddFriend(root, { handleAddFriend }) {
    const form = root.querySelector('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        handleAddFriend(formData.get('name'));
    });

    return () => { };
}