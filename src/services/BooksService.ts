import type Book from "@/types/Book";

const books: Book[] = [
  {
    id: 1,
    title: "Learn Concurrent Programming with Go",
    author: "James Cutajar",
    price: 29.99,
    cover:
      "https://images.manning.com/360/480/resize/book/3/fa61a62-1796-4772-8bd6-e96adc50cc77/Cutajar-HI-MEAP.png",
  },

  {
    id: 2,
    title: "Rust Web Development",
    author: "Bastian Gruber",
    price: 27.99,
    cover:
      "https://images.manning.com/360/480/resize/book/9/57fa437-06ef-4a02-8070-bc33e0800c87/Gruber-HI.png",
  },

  {
    id: 3,
    title: "Microservices Security in Action",
    author: "Nuwan Dias",
    price: 65.98,
    cover:
      "https://images.manning.com/360/480/resize/book/6/4cf7d31-fe33-426f-be39-fda5bfbf4191/Siriwardena-MS-HI.png",
  },
];

export default class BooksService {
  async getBooks(): Promise<Book[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.75) {
          resolve(books);
        } else {
          reject(new Error("Something bad happened"));
        }
      }, 500);
    });
  }
}
