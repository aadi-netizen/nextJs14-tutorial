const url = 'https://www.course-api.com/react-tours-project';

type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

const fetchTours = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(url);
  const data: Tour[] = await response.json();
  return data;
}


async function ToursPage() {
  const tours = await fetchTours();
  return (
    <section className="container mx-auto p-4">
      <h1 className="text-center text-3xl font-bold mt-4">Our Tours</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto mt-4">
        {tours.map((tour) => {
          const { id, name, info, image, price } = tour;
          return (
            <div key={id} className="bg-white shadow-md rounded-md p-4">
              <img src={image} alt={name} className="w-full h-48 object-cover rounded-md" />
              <div className="p-2">
                <h4 className="font-bold text-lg">{name}</h4>
                <h4 className="text-sm text-gray-500">{price}</h4>
                <p className="line-clamp-5">{info}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>);
}

export default ToursPage;