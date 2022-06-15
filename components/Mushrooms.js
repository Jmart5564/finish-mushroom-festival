
export default function createMushrooms(root) {
    const container = root.querySelector('.mushroom-container');

    return ({ mushrooms }) => {
        container.innerHTML = '';
        // add one Mushroom component for each mushroom object
        for (const mushroom of mushrooms) {
            const image = Mushroom({ mushroom });
            container.append(image);
        }
        //     - call the Mushroom component with the mushroom object
        //     - append the returned element to the container  

    };
}


export function Mushroom({ mushroom }) {
    const img = document.createElement('img');
    img.src = 'assets/mushrooms/' + mushroom.type + '.png';
    img.alt = mushroom.type;
    return img;
}