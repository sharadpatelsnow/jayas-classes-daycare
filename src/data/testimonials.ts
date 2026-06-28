export interface Testimonial {
  id: number
  name: string
  child: string
  rating: number
  text: string
  service: 'Daycare' | 'Academics' | 'Both'
  date: string
}

export const TESTIMONIALS: Testimonial[] = [
	{
    id: 1,
    name: "Ankita Patel",
    child: "Google Review",
    rating: 5,
    text: "It's a very nice place for kids. Teachers are highly educated and know how to handle children. Daycare facilities are clean, safe, and well organised. They treat children like their own. My child looks forward to going every day. The centre feels like a second home.",
    service: "Daycare",
    date: "2025-06-10",
  },{
    id: 2,
    name: "Ankit Jain",
    child: "Google Review",
    rating: 5,
    text: "Excellent daycare with a caring and nurturing environment. The staff is friendly, attentive, and genuinely concerned about the children's well-being and development. My child enjoys going there every day, and we've seen great improvement.",
    service: "Daycare",
    date: "2025-06-10",
  },
  
  
  {
    id: 3,
    name: "Dhiraj Chadar",
    child: "Google Review",
    rating: 5,
    text: "Best for tuition classes for kids in Kharadi. Also their social cause tagged to this venture is impressive.",
    service: "Academics",
    date: "2025-06-10",
  },
  {
    id: 4,
    name: "Adarsh Kumar",
    child: "Google Review",
    rating: 5,
    text: "Nice experience, teaching is effective.",
    service: "Academics",
    date: "2025-06-10",
  },
  {
    id: 7,
    name: "Shree Enterprises",
    child: "Daycare",
    rating: 5,
    text: "Must needed place in Kharadi for holistic child development.",
    service: "Both",
    date: "2025-06-10",
  },
  
  {
    id: 5,
    name: "Akash Sonawane",
    child: "Google Review",
    rating: 5,
    text: "Good classes in Kharadi.",
    service: "Academics",
    date: "2025-06-10",
  },
  {
    id: 6,
    name: "Kajal Kumbhar",
    child: "Google Review",
    rating: 5,
    text: "Jaya's Classes and Daycare provides a safe, caring, and nurturing environment for children.",
    service: "Daycare",
    date: "2025-06-10",
  },
  
  {
    id: 8,
    name: "Rishi Khare",
    child: "Google Review",
    rating: 5,
    text: "Full facilities and lovely parental treatment for kids.",
    service: "Daycare",
    date: "2025-06-10",
  },
  {
    id: 9,
    name: "Nikhil Dixit",
    child: "Google Review",
    rating: 5,
    text: "Homely environment and great teaching methods and skills for students.",
    service: "Academics",
    date: "2025-06-10",
  },
  {
    id: 10,
    name: "Amit Asawa",
    child: "Google Review",
    rating: 5,
    text: "Amazing experience!!",
    service: "Daycare",
    date: "2025-06-10",
  },
  {
    id: 11,
    name: "Rajeev Ramanan",
    child: "Google Review",
    rating: 5,
    text: "Wishing Jaya the very best and all success!!!",
    service: "Daycare",
    date: "2025-06-09",
  },
  {
    id: 12,
    name: "Mahesh Prasad Patel",
    child: "Google Review",
    rating: 5,
    text: "Excellent experience.",
    service: "Both",
    date: "2025-06-10",
  },
  {
    id: 13,
    name: "Sonu Ragade",
    child: "Google Review",
    rating: 5,
    text: "Highly recommended.",
    service: "Both",
    date: "2025-06-09",
  },
  {
    id: 14,
    name: "Anita Lakade",
    child: "Google Review",
    rating: 5,
    text: "Excellent daycare and academic support.",
    service: "Both",
    date: "2025-06-10",
  }
]
