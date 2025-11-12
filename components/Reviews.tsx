import Review from "./Review";

interface ReviewData {
  rating: number;
  title: string;
  content: string;
  author: string;
  designation: string;
}

interface ReviewsProps {
  reviews?: ReviewData[];
}

const defaultReviews: ReviewData[] = [
  {
    rating: 5,
    title: "Best app ever!",
    content:
      "Finally, an app that matches my energy: supportive, but only in lowercase.",
    author: "Lana V.",
    designation: "Semi-Professional Procrastinator",
  },
  {
    rating: 5,
    title: "Humbling",
    content:
      "I haven't accomplished more, just felt better about accomplishing less.",
    author: "Trevor Q.",
    designation: "CEO of Half-Finished Things",
  },
  {
    rating: 5,
    title: "Real friends share",
    content:
      "I gift this to my high-performing friends to slow them down.",
    author: "Aunt Gloria",
    designation: "Chaos Curator",
  },
  {
    rating: 4,
    title: "Seriously life changing app!",
    content:
      "My therapist said, \"If it works, keep it.\" Now she's asking for the quotes.",
    author: "Dr. Brenda (not my therapist)",
    designation: "Hobby Philosopher",
  },
];

const Reviews: React.FC<ReviewsProps> = ({ reviews = defaultReviews }) => {
  return (
    <section className="py-24 bg-[rgba(255,225,195,1)]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8 text-gray-900">
          Don't take our word for it, really!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
          {reviews.map((review, index) => (
            <Review key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
