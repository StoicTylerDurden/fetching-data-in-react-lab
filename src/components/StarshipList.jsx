// src/components/StarshipList.jsx
import StarshipCard from './StarshipCard';

const StarshipList = ({ starships, isLoading }) => {
    if (isLoading) {
        return (
            <>
                <h2>Starships</h2>
                <p>Loading...</p>
            </>
        );
    }

    if (!starships || starships.length === 0) {
        return (
            <>
                <h2>Starships</h2>
                <p>No starships found.</p>
            </>
        );
    }

    return (
        <>
            <h2>Starships</h2>
            <p>Results: {starships.length}</p>
            <section>
                <ul>
                    {starships.map((starship, index) => (
                        <StarshipCard key={index} starship={starship} />
                    ))}
                </ul>
            </section>
        </>
    );
}

export default StarshipList;
