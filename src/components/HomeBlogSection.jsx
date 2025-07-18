import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Add this
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const BlogSlider = () => {
  const navigate = useNavigate(); // Add this
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [loaded, setLoaded] = React.useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const blogs = [
    {
      id: 1,
     tag: 'All About Asthma 12',
     // title: 'All About Asthma 12',
      desc: 'Asthma is a long-term illness that affects the lungs airways. The airways swell as the condition progresses due to a lack of oxygen.',
      img: 'https://pagedone.io/asset/uploads/1696244059.png',
      date: 'April 5, 2025',
    },
    {
      id: 2,
      tag: 'Living life with diabetes12',
    //  title: 'How to grow your profit through systematic investment with us',
      desc: 'Living life can be worrisome if you have diabetes, but hey, everything can be managed with the right steps!',
      img: 'https://pagedone.io/asset/uploads/1696244074.png',
      date: 'April 3, 2025',
    },
    {
      id: 3,
      tag: 'Thyroid: Myths and Facts12',
      //title: 'Investment strategies for long-term growth and security',
      desc: 'Know what is the myth and what is the fact for better understanding of your thyroid troubles.',
      img: 'https://pagedone.io/asset/uploads/1696244059.png',
      date: 'April 1, 2025',
    },
    {
      id: 1,
      tag: 'All About Asthma 12',
      // title: 'Clever ways to invest in product to organize your portfolio',
      desc: 'Asthma is a long-term illness that affects the lungs airways. The airways swell as the condition progresses due to a lack of oxygen.',
      img: 'https://pagedone.io/asset/uploads/1696244059.png',
      date: 'April 5, 2025',
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap lg:flex-nowrap gap-8 justify-between items-start">

          {/* Left content */}
          <div className="w-full lg:w-2/5 text-center lg:text-left">
            <h2 className="text-4xl font-bold text-gray-900 mb-5">
              Our latest <span className="text-[#336699]">blogs</span>
            </h2>
            <p className="text-gray-500 mb-10">
              Welcome to our blog section, where knowledge meets inspiration. Explore insightful articles, expert tips, and the latest trends.
            </p>
            <button
              onClick={() => navigate('/blogs')} // 👈 Navigate to all blogs
              className="inline-block border border-gray-300 shadow-sm rounded-full py-3.5 px-7 font-semibold hover:bg-gray-100 transition"
            >
              View All
            </button>

            {/* Arrows */}
            <div className="flex gap-4 mt-10 justify-center lg:justify-start">
              <button ref={prevRef} className="group border border-[#336699] rounded-full w-11 h-11 flex items-center justify-center hover:bg-[#336699] transition">
                <svg className="h-6 w-6 text-[#336699] group-hover:text-white" fill="none" viewBox="0 0 24 24">
                  <path d="M20 12H4M10 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button ref={nextRef} className="group border border-[#336699] rounded-full w-11 h-11 flex items-center justify-center hover:bg-[#336699] transition">
                <svg className="h-6 w-6 text-[#336699] group-hover:text-white" fill="none" viewBox="0 0 24 24">
                  <path d="M4 12h16M14 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Swiper Slider */}
          <div className="w-full lg:w-3/5">
            {loaded && (
              <Swiper
                modules={[Navigation]}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                loop={true}
                spaceBetween={28}
                slidesPerView={2}
                slidesPerGroup={2}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                  },
                  768: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                  },
                }}
              >
                {blogs.map((blog) => (
                  <SwiperSlide key={blog.id}>
                    <div
                      className="group w-full cursor-pointer"
                      onClick={() => navigate(`/blog/${blog.id}`)} // 👈 Navigate to blog details
                    >
                      <img src={blog.img} alt="blog" className="rounded-2xl w-full object-cover mb-6" />
                      <p className="text-sm text-[#336699] font-semibold uppercase mb-2">{blog.tag}</p>
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#336699] mb-3">
                        {blog.title}
                      </h3>
                      <p className="text-gray-500 mb-4">{blog.desc}</p>

                      <div className="border-t pt-4 mt-4 flex items-center justify-between">
                        <span className="text-[#336699] font-semibold flex items-center gap-2">
                          Read more
                          <svg width="15" height="12" viewBox="0 0 15 12" fill="none">
                            <path
                              d="M1.25 6L13.25 6M9.5 10.5L13.4697 6.53033C13.7197 6.28033 13.8447 6.15533 13.8447 6C13.8447 5.84467 13.7197 5.71967 13.4697 5.46967L9.5 1.5"
                              stroke="#4338CA"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3M3 11h18M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                          </svg>
                          <span>{blog.date}</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSlider;
