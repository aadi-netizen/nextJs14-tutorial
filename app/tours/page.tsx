import Link from "next/link";
import Image from "next/image";

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
    <section className="container mx-auto px-4 animate-slideUp ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mt-4">
        {tours.map((tour) => {
          const { id, name, info, image, price } = tour;
          return (
            <div key={id} className="bg-white shadow-md rounded-md ">
              <div className="relative h-48 w-full overflow-hidden">
                <Image src={image} alt={name} priority fill sizes="33vw" className="object-cover hover:scale-125 " />
              </div>
              {/* <img src={image} alt={name} className="w-full h-48 object-cover rounded-md" /> */}
              <div className="p-2">
                <Link href={`/tours/${id}`}>
                  <h4 className="font-semibold text-black text-lg hover:text-blue-500 hover:underline">{name}</h4>
                </Link>
                <h4 className="text-sm text-gray-500">{price}</h4>
                <p className="line-clamp-5 text-sm mt-1">{info}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>);
}

export default ToursPage;