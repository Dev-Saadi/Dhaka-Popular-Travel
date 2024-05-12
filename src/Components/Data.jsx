import Table from 'react-bootstrap/Table';
import data from "../data.json"



const Data = () => {

    // Here I have built an array of objects to keep the header dynamic and readable

    const topbar = [
        { name: "#" },
        { name: "FLIGHT" },
        { name: "AIRCRAFT" },
        { name: "CLASS" },
        { name: "FARE" },
        { name: "ROUTE" },
        { name: "DEPARTUERE" },
        { name: "ARRIVAL" },
        { name: "" },
        { name: "DURATION" },
        { name: "PRICE" },
    ]



    return (

        <>


            <div>

                <h1 className='font-normal text-2xl py-1'>Data Parsed Sccuessfully</h1>


                <Table className="min-w-full">

                    {/* This code dynamically generates table header cells based on the items in the topbar array, 
                        applying specific styles to the header row and cells */}

                    <thead className="bg-cyan-900 text-white sticky top-0">
                        <tr>
                            {topbar.map((item, index) => (
                                <th key={index} className="px-6 py-3">
                                    {item.name}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>

                        {/* This code dynamically generates table rows and cells based on the flight offer data imported from a local JSON file, 
                        displaying flight information  */}


                        {data.flightOffer.map((flight, index) => (
                            <tr key={index} className="bg-blue-50 text-[#172554]">
                                <td className="border text-[#172554] px-6 py-4">{index + 1}</td>

                                {/* FLIGHT */}

                                {/* The code beneath is generating from flight argument which is at the top iterating from flightOffer function, here the
                                the flight became the main function while segment became the arguments which is displaying information such as 
                                carrier code and aircraft */}

                                <td className="border  px-6 py-4">
                                    {flight.itineraries[0].segments.map((segment, segmentIndex) => (
                                        <p key={segmentIndex}>
                                            {segment.carrierCode} {segment.aircraft} <br />
                                        </p>
                                    ))}
                                </td>


                                {/* AIRCRAFT */}

                                {/* The code beneath is generating from flight argument which is at the top iterating from flightOffer function, here the
                                the flight became the main function  while segment became the arguments which is displaying information of flightnumber of the first itinerary  */}


                                <td className="border  px-6 py-4">
                                    {flight.itineraries[0].segments.map((segment, segmentIndex) => (
                                        <p key={segmentIndex}>
                                            {segment.flightNumber}
                                        </p>
                                    ))}
                                </td>


                                {/* ClASS */}

                                {/* This code iterates over an array obtained from the flight and on every first class property. For each element in this array, it generates a p element displaying the value of the element. */}

                                <td className="border  px-6 py-4">
                                    {flight.class[0].map((item, segmentIndex) => (
                                        <p key={segmentIndex}>
                                            {item}
                                        </p>
                                    ))}

                                </td>

                                {/* FARE */}

                                {/* This code iterates over an array obtained from the flight and on every first fareBasis property. For each element in this array, it generates a p element displaying the value of the element. */}

                                <td className="border  px-6 py-4">
                                    {flight.fareBasis[0].map((item, segmentIndex) => (
                                        <p key={segmentIndex}>
                                            {item}
                                        </p>
                                    ))}
                                </td>


                                {/* ROUTE-iateCode */}

                                {/* The code loops through the flight's initial route segments. It crafts a paragraph for each segment, showing the IATA codes for both departure and arrival. */}

                                <td className="border  px-6 py-4">
                                    {flight.itineraries[0].segments.map((segment, segmentIndex) => (
                                        <p key={segmentIndex}>
                                            {segment.departure.iataCode} - {segment.arrival.iataCode}
                                        </p>
                                    ))}
                                </td>


                                {/* DEPARTURE */}

                                {/* This code is iterating over the segments of the first itinerary of a flight. For each segment, it creates a paragraph displaying the departure time (at) of that segment. */}

                                <td className="border  px-6 py-4">
                                    {flight.itineraries[0].segments.map((segment, segmentIndex) => (
                                        <p key={segmentIndex}>
                                            {segment.departure.at}
                                        </p>
                                    ))}
                                </td>


                                {/* ARRIVAL */}

                                {/* This code iterates over the segments of the first itinerary of a flight and creates a paragraph for each segment displaying the arrival time (at) of that segment. */}

                                <td className="border  px-6 py-4">
                                    {flight.itineraries[0].segments.map((segment, segmentIndex) => (
                                        <p key={segmentIndex}>
                                            {segment.arrival.at}
                                        </p>
                                    ))}
                                </td>


                                <td className="border  px-6 py-4">
                                    ---------
                                    <br />
                                    ---------
                                </td>

                                {/* DURATION */}

                                {/* This code iterates over the itineraries of a flight, creating a paragraph for each itinerary. Inside each paragraph, it displays the duration. */}

                                <td className="border  px-6 py-4">
                                    {flight.itineraries.map((item, segmentIndex) => (
                                        <p key={segmentIndex}>
                                            {item.duration}
                                        </p>
                                    ))}
                                </td>


                                {/* PRICING */}

                                {/* This code iterates over the flight data and invokes the string value that is attached with price in the json file */}

                                <td className="border text-center  px-6 py-4">
                                    {flight.price}
                                    <br />
                                    <button className="bg-blue-950  hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
                                        Select
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>







        </>
    )
}

export default Data