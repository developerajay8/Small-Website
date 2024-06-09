import BlogCard from "./BlogCard"

const data =[
    {
        img: "/post__1.webp", title: "Healthy Food Healthy Life", date: "Aug 27, 2023", comment:8
    },
    {
        img: "/post__2.webp", title: "Healthy Food Healthy Life", date: "Aug 27, 2023", comment:1
    },
    {
        img: "/post__3.webp", title: "Healthy Food Healthy Life", date: "Aug 27, 2023", comment:6
    }
]

const BlogSection = () => {
  return (
    <div className="md:px-[70px] sm:px-[30px] px-[14px] pt-16">
      <h2 className="font-bold text-2xl">Latest News</h2>
      <p className="text-gray-500">Present posts in a best way to highlight interesting moments of your blog.</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
        {
            data.map(
                (kl)=> <BlogCard key={kl.date} img={kl.img} title={kl.title} date={kl.date} comment={kl.comment} />
            )
        }
      </div>
    </div>
  )
}

export default BlogSection
