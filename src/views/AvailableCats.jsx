import './BaseLayout.css';
import './AvailableCats.css';
import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Luna', age: 1, breed: 'Siamese' },
  { name: 'Simba', age: 2, breed: 'Maine Coon' },
  { name: 'Milo', age: 3, breed: 'Bengal' },
  { name: 'Oliver', age: 4, breed: 'Persian' },
  { name: 'Bella', age: 1, breed: 'Ragdoll' },
  { name: 'Charlie', age: 3, breed: 'British Shorthair' },
  { name: 'Max', age: 2, breed: 'Abyssinian' },
  { name: 'Daisy', age: 4, breed: 'Scottish Fold' },
  { name: 'Loki', age: 2, breed: 'American Shorthair' },
  { name: 'Cleo', age: 1, breed: 'Oriental Shorthair' },
];



export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [search, setSearch] = useState('');
  const [ageFilter, setAgeFilter] = useState('All');
  const [breedFilter, setBreedFilter] = useState('All');

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())
          )
        );

        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0]?.url || '',
        }));

        setCats(catsWithImages);
        setFilteredCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  useEffect(() => {
    let filtered = cats.filter((cat) =>
      cat.name.toLowerCase().includes(search.toLowerCase())
    );

    if (ageFilter !== 'All') {
      filtered = filtered.filter((cat) => cat.age === parseInt(ageFilter, 10));
    }

    if (breedFilter !== 'All') {
      filtered = filtered.filter((cat) => cat.breed === breedFilter);
    }

    setFilteredCats(filtered);
  }, [search, ageFilter, breedFilter, cats]);

  const uniqueBreeds = Array.from(new Set(availableCats.map((cat) => cat.breed)));

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      {/* Search and Filter */}
      <div className="search-filter">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="form-control mb-3"
        />

        <select
          className="form-select mb-3"
          value={ageFilter}
          onChange={(e) => setAgeFilter(e.target.value)}
        >
          <option value="All">All Ages</option>
          <option value="1">1 Year</option>
          <option value="2">2 Years</option>
          <option value="3">3 Years</option>
          <option value="4">4 Years</option>
        </select>

        <select
          className="form-select mb-3"
          value={breedFilter}
          onChange={(e) => setBreedFilter(e.target.value)}
        >
          <option value="All">All Breeds</option>
          {uniqueBreeds.map((breed, index) => (
            <option key={index} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4 row g-4 cats-container" id="cats-container">
        {filteredCats.length > 0 ? (
          filteredCats.map((cat, i) => (
            <div key={i} className="col-md-4 col-lg-3">
              <div className="cat-card">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="img-fluid"
                  style={{
                    borderRadius: '8px',
                    height: '250px',
                    width: '100%',
                    objectFit: 'cover',
                  }}
                />
                <div className="cat-info">
                  <h3>{cat.name}</h3>
                  <p>Age: {cat.age}</p>
                  <p>Breed: {cat.breed}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No cats found based on your search/filter criteria.</p>
        )}
      </div>
    </section>
  );
}
