import React from 'react';

const ClinicInfo = () => {
    return (
        <div className="max-w-7xl mx-auto p-6 pt-[100px] pb-[100px] flex flex-col md:flex-row gap-8">
            {/* Left: Map and Address */}
            <div className="md:w-1/2">
                <h1 className="text-3xl font-bold mb-2">My Clinic</h1>
                <h2 className="text-xl font-semibold mb-4">Clinic 1</h2>
                <h3 className="text-xl font-semibold mb-4">OPD Hours</h3>
                <table className="w-full text-left border-collapse">
                    {[
                        { day: 'Monday', time: '6:30 PM–8:30 PM' },
                        { day: 'Tuesday', time: '6:30 PM–8:30 PM' },
                        { day: 'Wednesday', time: '6:30 PM–8:30 PM' },
                        { day: 'Thursday', time: '6:30 PM–8:30 PM' },
                        { day: 'Friday', time: '6:30 PM–8:30 PM' },
                        { day: 'Saturday', time: 'Closed', closed: true },
                        { day: 'Sunday', time: 'Closed', closed: true },
                    ].map(({ day, time, closed }, i) => (
                        <tr key={i} className="border-b">
                            <td className={`py-2 font-medium ${closed ? 'text-red-600' : ''}`}>{day}</td>
                            <td className={`py-2 ${closed ? 'text-red-600' : ''}`}>{time}</td>
                        </tr>
                    ))}
                </table>
            </div>

            {/* Right: OPD Hours */}

            <div className="md:w-1/2 flex flex-col items-center">
                {/* Responsive Map Container (uncomment iframe to use) */}
                
                <div className="w-full aspect-w-16 aspect-h-9 max-w-xl mx-auto">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1770.3161522701694!2d77.21253674786003!3d28.565830514452767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce30035e22891%3A0x2d7cc92a4cbca1f3!2sAIIMS%20OPD%20NEPHROLOGY!5e1!3m2!1sen!2sin!4v1752832436684!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg shadow-md w-full h-full min-h-[250px]"
                  ></iframe>
                </div>
                
                <p className="mt-4 text-gray-700 text-base md:text-lg text-center md:text-left whitespace-pre-line">
                  ADDRESS: Room no 4088, Teaching Block,
                  Department of Nephrology
                  AIIMS, New Delhi – 110029
                </p>
                <div className="mt-4 flex flex-col sm:flex-row gap-4 w-full justify-center md:justify-start">
                  <button className="w-full sm:w-auto px-4 py-2 border border-[#336699] text-white bg-[#336699] rounded hover:bg-white transition-colors duration-300 hover:text-[#336699]">
                    DIRECTIONS
                  </button>
                  <button className="w-full sm:w-auto px-4 py-2 border border-[#336699] text-white bg-[#336699] rounded hover:bg-white transition-colors duration-300 hover:text-[#336699]">
                    CALL CLINIC
                  </button>
                </div>
              </div>
        </div>
    );
};

export default ClinicInfo;
