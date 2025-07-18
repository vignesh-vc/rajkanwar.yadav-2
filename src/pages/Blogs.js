import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Thyroid from "../assests/thyroid.jpg"
import Diabetes from "../assests/Diabetes.jpg";
import Asthma  from "../assests/Asthma.webp"
const blogs = [
  {
    id: 1,
   tag: 'All About Asthma 12',
   // title: 'All About Asthma 12',
    desc: 'Asthma is a long-term illness that affects the lungs airways. The airways swell as the condition progresses due to a lack of oxygen.',
    img: Asthma ,
    date: 'April 5, 2025',
  },
  {
    id: 2,
    tag: 'Living life with diabetes12',
  //  title: 'How to grow your profit through systematic investment with us',
    desc: 'Living life can be worrisome if you have diabetes, but hey, everything can be managed with the right steps!',
    img:Diabetes,
    date: 'April 3, 2025',
  },
  {
    id: 3,
    tag: 'Thyroid: Myths and Facts12',
    //title: 'Investment strategies for long-term growth and security',
    desc: 'Know what is the myth and what is the fact for better understanding of your thyroid troubles.',
    img:Thyroid,
    date: 'April 1, 2025',
  },
  // Add all your blog data here (up to 10)
];

const AllBlogs = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-[#336699] mb-10 text-center">All Blogs</h1>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map(blog => (
          <div key={blog.id} onClick={() => navigate(`/blog/${blog.id}`)} className="cursor-pointer shadow-lg rounded-2xl p-5 group hover:shadow-xl transition">
            <img src={blog.img} alt={blog.title} className="w-full h-56 object-cover rounded-xl mb-4" />
            <p className="text-sm text-[#336699] uppercase font-semibold">{blog.tag}</p>
            <h3 className="text-xl font-bold group-hover:text-[#336699]">{blog.title}</h3>
            <p className="text-gray-500 text-sm">{blog.date}</p>
            <p className="text-gray-600 mt-2">{blog.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
