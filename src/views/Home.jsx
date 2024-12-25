import { useEffect, useState } from 'react';
import './Home.css';

const featuredCats = [
  { name: 'Simba', age: '2', breed: 'Burmilla' },
  { name: 'Cleo', age: '2', breed: 'Turkish Van' },
  { name: 'Oscar', age: '1', breed: 'Cornish Rex' },
  { name: 'Daisy', age: '3', breed: 'Savannah' },
  { name: 'Loki', age: '4', breed: 'Chartreux' },
  { name: 'Mochi', age: '2', breed: 'Japanese Bobtail' },
  { name: 'Zoe', age: '2', breed: 'Norwegian Forest' },
  { name: 'Ruby', age: '5', breed: 'Devon Rex' },
  { name: 'Finn', age: '3', breed: 'Tonkinese' },
  { name: 'Rocky', age: '1', breed: 'Balinese' },
  { name: 'Theo', age: '2', breed: 'Egyptian Mau' },
  { name: 'Lily', age: '3', breed: 'Selkirk Rex' },
  { name: 'Hunter', age: '4', breed: 'Havana Brown' },
  { name: 'Nova', age: '2', breed: 'Ocicat' },
  { name: 'Charlie', age: '2', breed: 'Manx' },
];

export default function Home() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          featuredCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) =>
              res.json()
            )
          )
        );

        const catsWithImages = featuredCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching cat images:', error);
        setError('Error fetching cat images');
        setLoading(false);
      }
    };

    fetchCatImages();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <>
      <section className="text-center mt-4 home-header">
        <h1 className="main-title">Welcome to the Purrfect Haven</h1>
        <p className="subtitle">Discover your ideal feline companion with us!</p>
      </section>

      <section className="mt-5 featured-section">
        <h2 className="section-title">Our Beloved Cats</h2>
        <p className="section-description">Browse through our curated selection of cats waiting to be part of your family.</p>
        <div className="cat-grid">
          {cats.map((cat, i) => (
            <div key={i} className="cat-card">
              <div className="cat-image-container">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="img-fluid mb-2 cat-image"
                  style={{ borderRadius: '8px', height: '200px', objectFit: 'cover' }}
                />
              </div>
              <div className="cat-info">
                <h3 className="h5 mb-1 cat-name">{cat.name}</h3>
                <p className="mb-0">Age: {cat.age}</p>
                <p className="text-muted">{cat.breed}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
