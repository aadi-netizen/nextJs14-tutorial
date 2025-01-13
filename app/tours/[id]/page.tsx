import mapImage from '@/images/maps.jpg';
import Image from 'next/image';
const url = 'https://www.course-api.com/images/tours/tour-1.jpeg';


const TourDetailsPage = async ({ params }: { params: { id: string } }) => {
  const tourId = await params.id;
  return (
    <>
      <section className="mt-2 w-1/2 px-3 py-2 ">
        <p className=" text-xl ">Tour ID: {tourId}</p>
        {/* Local Image */}
        <section className="flex gap-x-4 mt-4">
          <div className="">
            <Image src={mapImage} alt="map" width={192} height={192} className='rounded' />
            <h4 className="">Local Image</h4>
          </div>
          {/* External Image */}
          <div className="">
            <Image src={url} alt="Some Image" width={192} height={192} className='rounded object-cover' />
            <h4 className="">External Image</h4>
          </div>
        </section>
      </section>
    </>
  )
}

export default TourDetailsPage