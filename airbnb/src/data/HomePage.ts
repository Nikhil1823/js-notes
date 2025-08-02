export type HomeDataType = {
  heading: string;
  videoUrl: string;
  isNew: boolean;
  items: productCarouselType[];
  searchBar: SearchBarType[];
};
type SearchBarType = {
  title: string;
  sub: string;
};

export type productCarouselType = {
  title: string;
  products: productType[];
};

export type productType = {
  isGuestFav: string;
  buttonType?: "like" | "share";
  name: string;
  offer: string;
  rating?: string;
  image: string;
  loc?: string;
  min?: string;
};
const data: HomeDataType[] = [
  {
    heading: "Homes",
    searchBar: [
      { title: "Where", sub: "Search destinations" },
      { title: "Check in", sub: "Add dates" },
      { title: "Check out", sub: "Add dates" },
      {
        title: "Who",
        sub: "Add guests",
      },
    ],
    videoUrl:
      "https://a0.muscache.com/videos/search-bar-icons/webm/house-twirl.webm",
    isNew: false,
    items: [
      {
        title: "Popular homes in Bengaluru",
        products: [
          {
            isGuestFav: "Guest favourite",
            name: "Apartment in Bangalore Urban",
            offer: "₹3,878 for 2 nights",
            rating: "4.99",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-1118422882348724135/original/a40a9fc3-9bee-46fc-bc33-61dd649cd6a8.jpeg?im_w=480",
          },
          {
            isGuestFav: "",
            name: "Apartment in Banashankari",
            offer: "₹7,798 for 2 nights",
            rating: "4.87",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-1096365467309628265/original/aa2f1eed-2157-4932-8be8-ebe60a697732.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Flat in Banglore Urban",
            offer: "₹3,766 for 2 nights",
            rating: "4.82",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-1131789927021539466/original/52a6957f-d4e1-4255-9b5f-f9ef5fc35785.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Flat in Bellandur",
            offer: "₹5,478 for 2 nights",
            rating: "4.89",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-1414499586593270371/original/6a2649cf-5ce0-499f-8f16-5c74504f6b6a.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Apartment in Narayanpur",
            offer: "₹3,87e,8 for 2 nights",
            rating: "4.99",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-1118422882348724135/original/a40a9fc3-9bee-46fc-bc33-61dd649cd6a8.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Apartment in Banashankari",
            offer: "₹7,798 for 2 nights",
            rating: "4.87",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-1096365467309628265/original/aa2f1eed-2157-4932-8be8-ebe60a697732.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Flat in Banglore Urban",
            offer: "₹3,766 for 2 nights",
            rating: "4.82",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-1131789927021539466/original/52a6957f-d4e1-4255-9b5f-f9ef5fc35785.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Flat in Bellandur",
            offer: "₹5,478 for 2 nights",
            rating: "4.89",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-1414499586593270371/original/6a2649cf-5ce0-499f-8f16-5c74504f6b6a.jpeg?im_w=480",
          },
        ],
      },
      {
        title: "Available in Thiruvananthapuram this weekend",
        products: [
          {
            isGuestFav: "Guest favourite",
            name: "Guest suite in Thiruvananthapuram",
            rating: "4.84",
            offer: "₹3,424 for 2 nights",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-962088296121579375/original/b07061cc-2dfa-4b3f-9a83-42447f42e606.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Guest suite in Thiruvananthapuram",
            rating: "4.84",
            offer: "₹3,424 for 2 nights",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-962088296121579375/original/b07061cc-2dfa-4b3f-9a83-42447f42e606.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Guest suite in Thiruvananthapuram",
            rating: "4.84",
            offer: "₹3,424 for 2 nights",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-962088296121579375/original/b07061cc-2dfa-4b3f-9a83-42447f42e606.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Home in Pattom ",
            rating: "4.96",
            offer: "₹6,705 for 2 nights",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-1236153585070860650/original/9d90445f-4d6f-4195-9576-d4a3fcd2c64b.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Guest suite in Thiruvananthapuram",
            rating: "4.84",
            offer: "₹3,424 for 2 nights",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-962088296121579375/original/b07061cc-2dfa-4b3f-9a83-42447f42e606.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Guest suite in Thiruvananthapuram",
            rating: "4.84",
            offer: "₹3,424 for 2 nights",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-962088296121579375/original/b07061cc-2dfa-4b3f-9a83-42447f42e606.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Guest suite in Thiruvananthapuram",
            rating: "4.84",
            offer: "₹3,424 for 2 nights",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-962088296121579375/original/b07061cc-2dfa-4b3f-9a83-42447f42e606.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Home in Pattom ",
            rating: "4.96",
            offer: "₹6,705 for 2 nights",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-1236153585070860650/original/9d90445f-4d6f-4195-9576-d4a3fcd2c64b.jpeg?im_w=480",
          },
        ],
      },
      {
        title: "Stay in Idukki",
        products: [
          {
            isGuestFav: "Guest favourite",
            name: "Cabin in Rajakkad",
            offer: "₹17,095 for 2 nights",
            rating: "5.0",
            image:
              "https://a0.muscache.com/im/pictures/miso/Hosting-1384543061694830478/original/c11cfd8e-c1b5-4b6a-a00a-41a64408691e.jpeg?im_w=480",
          },

          {
            isGuestFav: "Guest favourite",
            name: "Villa in Idukki",
            offer: "₹57,972 for 2 nights",
            rating: "4.92",
            image:
              "https://a0.muscache.com/im/pictures/miso/Hosting-1002599376528018362/original/da6f345e-f335-4726-97cf-d05ceeb9e856.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Cabin in Rajakkad",
            offer: "₹17,095 for 2 nights",
            rating: "5.0",
            image:
              "https://a0.muscache.com/im/pictures/miso/Hosting-1384543061694830478/original/c11cfd8e-c1b5-4b6a-a00a-41a64408691e.jpeg?im_w=480",
          },

          {
            isGuestFav: "Guest favourite",
            name: "Villa in Idukki",
            offer: "₹57,972 for 2 nights",
            rating: "4.92",
            image:
              "https://a0.muscache.com/im/pictures/miso/Hosting-1002599376528018362/original/da6f345e-f335-4726-97cf-d05ceeb9e856.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Cabin in Rajakkad",
            offer: "₹17,095 for 2 nights",
            rating: "5.0",
            image:
              "https://a0.muscache.com/im/pictures/miso/Hosting-1384543061694830478/original/c11cfd8e-c1b5-4b6a-a00a-41a64408691e.jpeg?im_w=480",
          },

          {
            isGuestFav: "Guest favourite",
            name: "Villa in Idukki",
            offer: "₹57,972 for 2 nights",
            rating: "4.92",
            image:
              "https://a0.muscache.com/im/pictures/miso/Hosting-1002599376528018362/original/da6f345e-f335-4726-97cf-d05ceeb9e856.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Cabin in Rajakkad",
            offer: "₹17,095 for 2 nights",
            rating: "5.0",
            image:
              "https://a0.muscache.com/im/pictures/miso/Hosting-1384543061694830478/original/c11cfd8e-c1b5-4b6a-a00a-41a64408691e.jpeg?im_w=480",
          },

          {
            isGuestFav: "Guest favourite",
            name: "Villa in Idukki",
            offer: "₹57,972 for 2 nights",
            rating: "4.92",
            image:
              "https://a0.muscache.com/im/pictures/miso/Hosting-1002599376528018362/original/da6f345e-f335-4726-97cf-d05ceeb9e856.jpeg?im_w=480",
          },
        ],
      },
      {
        title: "Available in Kozhikode this weekend",
        products: [
          {
            isGuestFav: "Guest favourite",
            name: "Home in Thalayad",
            offer: "₹6,996 for 2 nights",
            rating: "4.93",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE5ODM5Mjg0MzkwODU0MDc1Mw%3D%3D/original/038f91b7-b011-4f1b-b591-26bc5dbfa1f5.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Room in Kozhikode",
            offer: "₹2,281 for 2 nights",
            rating: "4.91",
            image:
              "https://a0.muscache.com/im/pictures/miso/Hosting-1327833111999741873/original/c11a492c-ad61-446e-8a69-ba628b4adbad.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Home in Thalayad",
            offer: "₹6,996 for 2 nights",
            rating: "4.93",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE5ODM5Mjg0MzkwODU0MDc1Mw%3D%3D/original/038f91b7-b011-4f1b-b591-26bc5dbfa1f5.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Room in Kozhikode",
            offer: "₹2,281 for 2 nights",
            rating: "4.91",
            image:
              "https://a0.muscache.com/im/pictures/miso/Hosting-1327833111999741873/original/c11a492c-ad61-446e-8a69-ba628b4adbad.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Home in Thalayad",
            offer: "₹6,996 for 2 nights",
            rating: "4.93",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE5ODM5Mjg0MzkwODU0MDc1Mw%3D%3D/original/038f91b7-b011-4f1b-b591-26bc5dbfa1f5.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Room in Kozhikode",
            offer: "₹2,281 for 2 nights",
            rating: "4.91",
            image:
              "https://a0.muscache.com/im/pictures/miso/Hosting-1327833111999741873/original/c11a492c-ad61-446e-8a69-ba628b4adbad.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Home in Thalayad",
            offer: "₹6,996 for 2 nights",
            rating: "4.93",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE5ODM5Mjg0MzkwODU0MDc1Mw%3D%3D/original/038f91b7-b011-4f1b-b591-26bc5dbfa1f5.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Room in Kozhikode",
            offer: "₹2,281 for 2 nights",
            rating: "4.91",
            image:
              "https://a0.muscache.com/im/pictures/miso/Hosting-1327833111999741873/original/c11a492c-ad61-446e-8a69-ba628b4adbad.jpeg?im_w=480",
          },
        ],
      },
      {
        title: "Homes in Thrissur",
        products: [
          {
            isGuestFav: "Guest favourite",
            name: "Home in Thrissur",
            offer: "₹4,109 for 2 nights",
            rating: "5.0",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-1366705777832215835/original/9a84a424-dcfa-4b6b-bf43-d42ae53fe38a.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Room in Thrissur",
            offer: "₹4,565 for 2 nights",
            rating: "5.0",
            image:
              "https://a0.muscache.com/im/pictures/miso/Hosting-1347146238312982181/original/603d500d-7d6f-4ad4-9558-f53b0c0775e3.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Home in Thrissur",
            offer: "₹4,109 for 2 nights",
            rating: "5.0",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-1366705777832215835/original/9a84a424-dcfa-4b6b-bf43-d42ae53fe38a.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Room in Thrissur",
            offer: "₹4,565 for 2 nights",
            rating: "5.0",
            image:
              "https://a0.muscache.com/im/pictures/miso/Hosting-1347146238312982181/original/603d500d-7d6f-4ad4-9558-f53b0c0775e3.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Home in Thrissur",
            offer: "₹4,109 for 2 nights",
            rating: "5.0",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-1366705777832215835/original/9a84a424-dcfa-4b6b-bf43-d42ae53fe38a.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Room in Thrissur",
            offer: "₹4,565 for 2 nights",
            rating: "5.0",
            image:
              "https://a0.muscache.com/im/pictures/miso/Hosting-1347146238312982181/original/603d500d-7d6f-4ad4-9558-f53b0c0775e3.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Home in Thrissur",
            offer: "₹4,109 for 2 nights",
            rating: "5.0",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-1366705777832215835/original/9a84a424-dcfa-4b6b-bf43-d42ae53fe38a.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Room in Thrissur",
            offer: "₹4,565 for 2 nights",
            rating: "5.0",
            image:
              "https://a0.muscache.com/im/pictures/miso/Hosting-1347146238312982181/original/603d500d-7d6f-4ad4-9558-f53b0c0775e3.jpeg?im_w=480",
          },
        ],
      },
      {
        title: "Available next month in South Goa",
        products: [
          {
            isGuestFav: "Guest favourite",
            name: "Apartment in Canacona",

            offer: "₹4,563 for 2 nights",
            rating: "4.91",
            image:
              "https://a0.muscache.com/im/pictures/miso/Hosting-1347146238312982181/original/603d500d-7d6f-4ad4-9558-f53b0c0775e3.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Villa in Varca",
            offer: "₹9,698 for 2 nights",
            rating: "5.0",
            image:
              "https://a0.muscache.com/im/pictures/miso/Hosting-1347146238312982181/original/603d500d-7d6f-4ad4-9558-f53b0c0775e3.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Apartment in Canacona",

            offer: "₹4,563 for 2 nights",
            rating: "4.91",
            image:
              "https://a0.muscache.com/im/pictures/miso/Hosting-1347146238312982181/original/603d500d-7d6f-4ad4-9558-f53b0c0775e3.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Villa in Varca",
            offer: "₹9,698 for 2 nights",
            rating: "5.0",
            image:
              "https://a0.muscache.com/im/pictures/miso/Hosting-1347146238312982181/original/603d500d-7d6f-4ad4-9558-f53b0c0775e3.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Apartment in Canacona",

            offer: "₹4,563 for 2 nights",
            rating: "4.91",
            image:
              "https://a0.muscache.com/im/pictures/miso/Hosting-1347146238312982181/original/603d500d-7d6f-4ad4-9558-f53b0c0775e3.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Villa in Varca",
            offer: "₹9,698 for 2 nights",
            rating: "5.0",
            image:
              "https://a0.muscache.com/im/pictures/miso/Hosting-1347146238312982181/original/603d500d-7d6f-4ad4-9558-f53b0c0775e3.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Apartment in Canacona",

            offer: "₹4,563 for 2 nights",
            rating: "4.91",
            image:
              "https://a0.muscache.com/im/pictures/miso/Hosting-1347146238312982181/original/603d500d-7d6f-4ad4-9558-f53b0c0775e3.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Villa in Varca",
            offer: "₹9,698 for 2 nights",
            rating: "5.0",
            image:
              "https://a0.muscache.com/im/pictures/miso/Hosting-1347146238312982181/original/603d500d-7d6f-4ad4-9558-f53b0c0775e3.jpeg?im_w=480",
          },
        ],
      },
      {
        title: "Popular homes in Pune",
        products: [
          {
            isGuestFav: "Guest favourite",
            name: "Flat in Pune",

            offer: "₹6,263 for 2 nightss",
            rating: "4.91",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-1118422882348724135/original/a40a9fc3-9bee-46fc-bc33-61dd649cd6a8.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Apartment in Pune City",
            offer: "₹5,867 for 2 nights",
            rating: "5.0",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-1118422882348724135/original/a40a9fc3-9bee-46fc-bc33-61dd649cd6a8.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Flat in Pune",

            offer: "₹6,263 for 2 nightss",
            rating: "4.91",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-1118422882348724135/original/a40a9fc3-9bee-46fc-bc33-61dd649cd6a8.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Apartment in Pune City",
            offer: "₹5,867 for 2 nights",
            rating: "5.0",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-1118422882348724135/original/a40a9fc3-9bee-46fc-bc33-61dd649cd6a8.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Flat in Pune",

            offer: "₹6,263 for 2 nightss",
            rating: "4.91",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-1118422882348724135/original/a40a9fc3-9bee-46fc-bc33-61dd649cd6a8.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Apartment in Pune City",
            offer: "₹5,867 for 2 nights",
            rating: "5.0",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-1118422882348724135/original/a40a9fc3-9bee-46fc-bc33-61dd649cd6a8.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Flat in Pune",

            offer: "₹6,263 for 2 nightss",
            rating: "4.91",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-1118422882348724135/original/a40a9fc3-9bee-46fc-bc33-61dd649cd6a8.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Apartment in Pune City",
            offer: "₹5,867 for 2 nights",
            rating: "5.0",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-1118422882348724135/original/a40a9fc3-9bee-46fc-bc33-61dd649cd6a8.jpeg?im_w=480",
          },
        ],
      },
      {
        title: "Check out homes in Mysore",
        products: [
          {
            isGuestFav: "Guest favourite",
            name: "Villa in Mysore",
            offer: "₹6,334 for 2 nights",
            rating: "4.91",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-1118422882348724135/original/a40a9fc3-9bee-46fc-bc33-61dd649cd6a8.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Flat in Mysore",
            offer: "₹5,949 for 2 nights",
            rating: "4.89",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-1118422882348724135/original/a40a9fc3-9bee-46fc-bc33-61dd649cd6a8.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Villa in Mysore",
            offer: "₹6,334 for 2 nights",
            rating: "4.91",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-1118422882348724135/original/a40a9fc3-9bee-46fc-bc33-61dd649cd6a8.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Flat in Mysore",
            offer: "₹5,949 for 2 nights",
            rating: "4.89",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-1118422882348724135/original/a40a9fc3-9bee-46fc-bc33-61dd649cd6a8.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Villa in Mysore",
            offer: "₹6,334 for 2 nights",
            rating: "4.91",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-1118422882348724135/original/a40a9fc3-9bee-46fc-bc33-61dd649cd6a8.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Flat in Mysore",
            offer: "₹5,949 for 2 nights",
            rating: "4.89",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-1118422882348724135/original/a40a9fc3-9bee-46fc-bc33-61dd649cd6a8.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Villa in Mysore",
            offer: "₹6,334 for 2 nights",
            rating: "4.91",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-1118422882348724135/original/a40a9fc3-9bee-46fc-bc33-61dd649cd6a8.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Flat in Mysore",
            offer: "₹5,949 for 2 nights",
            rating: "4.89",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-1118422882348724135/original/a40a9fc3-9bee-46fc-bc33-61dd649cd6a8.jpeg?im_w=480",
          },
        ],
      },
      {
        title: "Homes in Wayanad",
        products: [
          {
            isGuestFav: "Guest favourite",
            name: "Farm stay in Wayanad",
            offer: "₹7,188 for 2 nights",
            rating: "4.99",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-1118422882348724135/original/a40a9fc3-9bee-46fc-bc33-61dd649cd6a8.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "arm stay in Wayanad",
            offer: "₹8,559 for 2 nights",
            rating: "4.93",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-1118422882348724135/original/a40a9fc3-9bee-46fc-bc33-61dd649cd6a8.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Farm stay in Wayanad",
            offer: "₹7,188 for 2 nights",
            rating: "4.99",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-1118422882348724135/original/a40a9fc3-9bee-46fc-bc33-61dd649cd6a8.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "arm stay in Wayanad",
            offer: "₹8,559 for 2 nights",
            rating: "4.93",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-1118422882348724135/original/a40a9fc3-9bee-46fc-bc33-61dd649cd6a8.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Farm stay in Wayanad",
            offer: "₹7,188 for 2 nights",
            rating: "4.99",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-1118422882348724135/original/a40a9fc3-9bee-46fc-bc33-61dd649cd6a8.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "arm stay in Wayanad",
            offer: "₹8,559 for 2 nights",
            rating: "4.93",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-1118422882348724135/original/a40a9fc3-9bee-46fc-bc33-61dd649cd6a8.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Farm stay in Wayanad",
            offer: "₹7,188 for 2 nights",
            rating: "4.99",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-1118422882348724135/original/a40a9fc3-9bee-46fc-bc33-61dd649cd6a8.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "arm stay in Wayanad",
            offer: "₹8,559 for 2 nights",
            rating: "4.93",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-1118422882348724135/original/a40a9fc3-9bee-46fc-bc33-61dd649cd6a8.jpeg?im_w=480",
          },
        ],
      },
      {
        title: "Available in Thiruvananthapuram this weekend",
        products: [
          {
            isGuestFav: "Guest favourite",
            name: "Guest suite in Thiruvananthapuram",
            rating: "4.84",
            offer: "₹3,424 for 2 nights",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-962088296121579375/original/b07061cc-2dfa-4b3f-9a83-42447f42e606.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Guest suite in Thiruvananthapuram",
            rating: "4.84",
            offer: "₹3,424 for 2 nights",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-962088296121579375/original/b07061cc-2dfa-4b3f-9a83-42447f42e606.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Guest suite in Thiruvananthapuram",
            rating: "4.84",
            offer: "₹3,424 for 2 nights",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-962088296121579375/original/b07061cc-2dfa-4b3f-9a83-42447f42e606.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Home in Pattom ",
            rating: "4.96",
            offer: "₹6,705 for 2 nights",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-1236153585070860650/original/9d90445f-4d6f-4195-9576-d4a3fcd2c64b.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Guest suite in Thiruvananthapuram",
            rating: "4.84",
            offer: "₹3,424 for 2 nights",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-962088296121579375/original/b07061cc-2dfa-4b3f-9a83-42447f42e606.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Guest suite in Thiruvananthapuram",
            rating: "4.84",
            offer: "₹3,424 for 2 nights",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-962088296121579375/original/b07061cc-2dfa-4b3f-9a83-42447f42e606.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Guest suite in Thiruvananthapuram",
            rating: "4.84",
            offer: "₹3,424 for 2 nights",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-962088296121579375/original/b07061cc-2dfa-4b3f-9a83-42447f42e606.jpeg?im_w=480",
          },
          {
            isGuestFav: "Guest favourite",
            name: "Home in Pattom ",
            rating: "4.96",
            offer: "₹6,705 for 2 nights",
            image:
              "https://a0.muscache.com/im/pictures/hosting/Hosting-1236153585070860650/original/9d90445f-4d6f-4195-9576-d4a3fcd2c64b.jpeg?im_w=480",
          },
        ],
      },
    ],
  },
  {
    heading: "Experiences",
    searchBar: [
      { title: "Where", sub: "Search destinations" },
      { title: "Date", sub: "Add dates" },
      { title: "Who", sub: "Add guests" },
    ],
    isNew: true,
    videoUrl:
      "https://a0.muscache.com/videos/search-bar-icons/webm/balloon-twirl-selected.webm",
    items: [
      {
        title: "Airbnb Originals",
        products: [
          {
            isGuestFav: "Original",
            buttonType: "share",
            name: "Lunch with fashion icon Lenny Niemeyer in her home",
            offer: "From ₹8,974 / guest",
            loc: "Rio de Janeiro, Brazil",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6276539/original/a6ecba10-aed8-481c-bd0d-91744ebf3228.jpeg?im_w=480",
          },
          {
            isGuestFav: "Original",
            buttonType: "share",
            name: "Learn how to mix with DJ Lady D at Lollapalooza",
            offer: "From ₹19,725 / guest",
            loc: "Chicago, United States",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-5946904/original/3fc78212-954c-4e94-8464-1513c5a8cd91.jpeg?im_w=480",
          },
          {
            isGuestFav: "Original",
            buttonType: "share",
            name: "Lunch with fashion icon Lenny Niemeyer in her home",
            offer: "From ₹8,974 / guest",
            loc: "Rio de Janeiro, Brazil",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-5946904/original/3fc78212-954c-4e94-8464-1513c5a8cd91.jpeg?im_w=480",
          },
          {
            isGuestFav: "Original",
            buttonType: "share",
            name: "Learn how to mix with DJ Lady D at Lollapalooza",
            offer: "From ₹19,725 / guest",
            loc: "Chicago, United States",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-5946904/original/3fc78212-954c-4e94-8464-1513c5a8cd91.jpeg?im_w=480",
          },
          {
            isGuestFav: "Original",
            buttonType: "share",
            name: "Lunch with fashion icon Lenny Niemeyer in her home",
            offer: "From ₹8,974 / guest",
            loc: "Rio de Janeiro, Brazil",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-5946904/original/3fc78212-954c-4e94-8464-1513c5a8cd91.jpeg?im_w=480",
          },
          {
            isGuestFav: "Original",
            buttonType: "share",
            name: "Learn how to mix with DJ Lady D at Lollapalooza",
            offer: "From ₹19,725 / guest",
            loc: "Chicago, United States",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-5946904/original/3fc78212-954c-4e94-8464-1513c5a8cd91.jpeg?im_w=480",
          },
          {
            isGuestFav: "Original",
            buttonType: "share",
            name: "Lunch with fashion icon Lenny Niemeyer in her home",
            offer: "From ₹8,974 / guest",
            loc: "Rio de Janeiro, Brazil",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6276539/original/a6ecba10-aed8-481c-bd0d-91744ebf3228.jpeg?im_w=480",
          },
          {
            isGuestFav: "Original",
            buttonType: "share",
            name: "Learn how to mix with DJ Lady D at Lollapalooza",
            offer: "From ₹19,725 / guest",
            loc: "Chicago, United States",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6276539/original/a6ecba10-aed8-481c-bd0d-91744ebf3228.jpeg?im_w=480",
          },
        ],
      },
      {
        title: "Experiences in South Goa",
        products: [
          {
            isGuestFav: "Popular",

            name: "Discover coastal paradise in Goa",
            offer: "From ₹1,500 / guest",
            rating: "4.94",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-366069/original/8bca4d33-0419-497f-ac49-fd643d460cdc.jpeg?im_w=480",
          },
          {
            isGuestFav: "Popular",

            name: "Uncover Fontainhas' heritage",
            offer: "From ₹1,100 / guest",
            rating: "4.9",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-4521121/original/5e263c85-ddeb-4812-a050-e2c15db6f7b5.jpeg?im_w=480",
          },
          {
            isGuestFav: "Popular",

            name: "Discover coastal paradise in Goa",
            offer: "From ₹1,500 / guest",
            rating: "4.94",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-366069/original/8bca4d33-0419-497f-ac49-fd643d460cdc.jpeg?im_w=480",
          },
          {
            isGuestFav: "Popular",

            name: "Uncover Fontainhas' heritage",
            offer: "From ₹1,100 / guest",
            rating: "4.9",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-4521121/original/5e263c85-ddeb-4812-a050-e2c15db6f7b5.jpeg?im_w=480",
          },
          {
            isGuestFav: "Popular",

            name: "Discover coastal paradise in Goa",
            offer: "From ₹1,500 / guest",
            rating: "4.94",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-366069/original/8bca4d33-0419-497f-ac49-fd643d460cdc.jpeg?im_w=480",
          },
          {
            isGuestFav: "Popular",

            name: "Uncover Fontainhas' heritage",
            offer: "From ₹1,100 / guest",
            rating: "4.9",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-4521121/original/5e263c85-ddeb-4812-a050-e2c15db6f7b5.jpeg?im_w=480",
          },
          {
            isGuestFav: "Popular",

            name: "Discover coastal paradise in Goa",
            offer: "From ₹1,500 / guest",
            rating: "4.94",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-366069/original/8bca4d33-0419-497f-ac49-fd643d460cdc.jpeg?im_w=480",
          },
          {
            isGuestFav: "Popular",

            name: "Uncover Fontainhas' heritage",
            offer: "From ₹1,100 / guest",
            rating: "4.9",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-4521121/original/5e263c85-ddeb-4812-a050-e2c15db6f7b5.jpeg?im_w=480",
          },
        ],
      },
      {
        title: "Experiences in Paris",
        products: [
          {
            isGuestFav: "Popular",

            name: "Speakeasy secrets: discover Paris’ hidden bars",
            offer: "From ₹2,505 / guest",
            rating: "4.9",
            image:
              "https://a0.muscache.com/im/pictures/lombard/MtTemplate-394929-active_media/original/264b857b-2832-4964-962e-fd0e3f0b3687.jpg?im_w=480",
          },
          {
            isGuestFav: "Popular",

            name: "Learn to bake classic French croissants",
            offer: "From ₹11,021 / guest",
            rating: "4.95",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-963857/original/819e3035-26da-4d24-8900-07e8a4484973.jpeg?im_w=480",
          },
          {
            isGuestFav: "Popular",

            name: "Speakeasy secrets: discover Paris’ hidden bars",
            offer: "From ₹2,505 / guest",
            rating: "4.9",
            image:
              "https://a0.muscache.com/im/pictures/lombard/MtTemplate-394929-active_media/original/264b857b-2832-4964-962e-fd0e3f0b3687.jpg?im_w=480",
          },
          {
            isGuestFav: "Popular",

            name: "Learn to bake classic French croissants",
            offer: "From ₹11,021 / guest",
            rating: "4.95",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-963857/original/819e3035-26da-4d24-8900-07e8a4484973.jpeg?im_w=480",
          },
          {
            isGuestFav: "Popular",

            name: "Speakeasy secrets: discover Paris’ hidden bars",
            offer: "From ₹2,505 / guest",
            rating: "4.9",
            image:
              "https://a0.muscache.com/im/pictures/lombard/MtTemplate-394929-active_media/original/264b857b-2832-4964-962e-fd0e3f0b3687.jpg?im_w=480",
          },
          {
            isGuestFav: "Popular",

            name: "Learn to bake classic French croissants",
            offer: "From ₹11,021 / guest",
            rating: "4.95",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-963857/original/819e3035-26da-4d24-8900-07e8a4484973.jpeg?im_w=480",
          },
          {
            isGuestFav: "Popular",

            name: "Speakeasy secrets: discover Paris’ hidden bars",
            offer: "From ₹2,505 / guest",
            rating: "4.9",
            image:
              "https://a0.muscache.com/im/pictures/lombard/MtTemplate-394929-active_media/original/264b857b-2832-4964-962e-fd0e3f0b3687.jpg?im_w=480",
          },
          {
            isGuestFav: "Popular",

            name: "Learn to bake classic French croissants",
            offer: "From ₹11,021 / guest",
            rating: "4.95",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-963857/original/819e3035-26da-4d24-8900-07e8a4484973.jpeg?im_w=480",
          },
        ],
      },
      {
        title: "Experiences in London",
        products: [
          {
            isGuestFav: "Popular",

            name: "London sightseeing walking tour with 30 sights",
            offer: "From ₹2,208 / guest",
            rating: "4.96",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-5749656/original/6183fae2-c34f-4416-9dd4-6a855068a819.jpeg?im_w=480",
          },
          {
            isGuestFav: "Popular",

            name: "PopularWalk London with a local - in easy English",
            offer: "From ₹1,743 / guest",
            rating: "4.98",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-5749656/original/6183fae2-c34f-4416-9dd4-6a855068a819.jpeg?im_w=480",
          },
          {
            isGuestFav: "Popular",

            name: "London sightseeing walking tour with 30 sights",
            offer: "From ₹2,208 / guest",
            rating: "4.96",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-5749656/original/6183fae2-c34f-4416-9dd4-6a855068a819.jpeg?im_w=480",
          },
          {
            isGuestFav: "Popular",

            name: "PopularWalk London with a local - in easy English",
            offer: "From ₹1,743 / guest",
            rating: "4.98",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-5749656/original/6183fae2-c34f-4416-9dd4-6a855068a819.jpeg?im_w=480",
          },
          {
            isGuestFav: "Popular",

            name: "London sightseeing walking tour with 30 sights",
            offer: "From ₹2,208 / guest",
            rating: "4.96",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-5749656/original/6183fae2-c34f-4416-9dd4-6a855068a819.jpeg?im_w=480",
          },
          {
            isGuestFav: "Popular",

            name: "PopularWalk London with a local - in easy English",
            offer: "From ₹1,743 / guest",
            rating: "4.98",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-5749656/original/6183fae2-c34f-4416-9dd4-6a855068a819.jpeg?im_w=480",
          },
          {
            isGuestFav: "Popular",

            name: "London sightseeing walking tour with 30 sights",
            offer: "From ₹2,208 / guest",
            rating: "4.96",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-5749656/original/6183fae2-c34f-4416-9dd4-6a855068a819.jpeg?im_w=480",
          },
          {
            isGuestFav: "Popular",

            name: "PopularWalk London with a local - in easy English",
            offer: "From ₹1,743 / guest",
            rating: "4.98",
            image:
              "https://a0.muscache.com/im/pictures/lombard/MtTemplate-165149-active_media/original/b0499a80-9efa-4618-843f-fa8be3ad140b.jpg?im_w=480",
          },
        ],
      },
    ],
  },
  {
    heading: "Services",
    isNew: true,
    searchBar: [
      { title: "Where", sub: "Search destinations" },
      { title: "Date", sub: "Add dates" },
      { title: "Type of service", sub: "Add service" },
    ],
    videoUrl:
      "https://a0.muscache.com/videos/search-bar-icons/webm/consierge-twirl.webm",
    items: [
      {
        title: "Photography",
        products: [
          {
            isGuestFav: "",
            name: "Stylish vintage car photo shoot Tour",
            offer: "From ₹5,511 / guest",
            rating: "4.93",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6085467/original/e804e173-7b74-4a7b-aa3e-1da634b8e4b4.jpeg?im_w=480",
            loc: "Rome, Italy",
          },
          {
            isGuestFav: "",
            name: "Photo session at the Metropolitan Museum of Art",

            offer: "From ₹26,300 / guest",
            rating: "4.93",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6089040/original/5c28966a-17a0-4295-ac40-5b679b82e42f.jpeg?im_w=480",
            loc: "New York, United States",
          },
          {
            isGuestFav: "",
            name: "Stylish vintage car photo shoot Tour",
            offer: "From ₹5,511 / guest",
            rating: "4.93",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6085467/original/e804e173-7b74-4a7b-aa3e-1da634b8e4b4.jpeg?im_w=480",
            loc: "Rome, Italy",
          },
          {
            isGuestFav: "",
            name: "Photo session at the Metropolitan Museum of Art",

            offer: "From ₹26,300 / guest",
            rating: "4.93",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6089040/original/5c28966a-17a0-4295-ac40-5b679b82e42f.jpeg?im_w=480",
            loc: "New York, United States",
          },
          {
            isGuestFav: "",
            name: "Stylish vintage car photo shoot Tour",
            offer: "From ₹5,511 / guest",
            rating: "4.93",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6085467/original/e804e173-7b74-4a7b-aa3e-1da634b8e4b4.jpeg?im_w=480",
            loc: "Rome, Italy",
          },
          {
            isGuestFav: "",
            name: "Photo session at the Metropolitan Museum of Art",

            offer: "From ₹26,300 / guest",
            rating: "4.93",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6089040/original/5c28966a-17a0-4295-ac40-5b679b82e42f.jpeg?im_w=480",
            loc: "New York, United States",
          },
          {
            isGuestFav: "",
            name: "Stylish vintage car photo shoot Tour",
            offer: "From ₹5,511 / guest",
            rating: "4.93",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6085467/original/e804e173-7b74-4a7b-aa3e-1da634b8e4b4.jpeg?im_w=480",
            loc: "Rome, Italy",
          },
          {
            isGuestFav: "",
            name: "Photo session at the Metropolitan Museum of Art",

            offer: "From ₹26,300 / guest",
            rating: "4.93",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6089040/original/5c28966a-17a0-4295-ac40-5b679b82e42f.jpeg?im_w=480",
            loc: "New York, United States",
          },
        ],
      },
      {
        title: "Chefs",
        products: [
          {
            isGuestFav: "",
            name: "Hyperlocal, foraged fare by Clair",
            offer: "From ₹4,296 / guest",
            rating: "5",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6073353/original/4b5b77b0-540a-4f76-9522-f83a5999e558.jpeg?im_w=480",
            min: "₹9,643 minimum",
          },
          {
            isGuestFav: "",
            name: "The Vegan Experience: Plant Based Private Chef",

            offer: "From ₹4,383 / guest",
            rating: "5",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6089040/original/5c28966a-17a0-4295-ac40-5b679b82e42f.jpeg?im_w=480",
          },
          {
            isGuestFav: "",
            name: "Hyperlocal, foraged fare by Clair",
            offer: "From ₹4,296 / guest",
            rating: "5",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6073353/original/4b5b77b0-540a-4f76-9522-f83a5999e558.jpeg?im_w=480",
            min: "₹9,643 minimum",
          },
          {
            isGuestFav: "",
            name: "The Vegan Experience: Plant Based Private Chef",

            offer: "From ₹4,383 / guest",
            rating: "5",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6089040/original/5c28966a-17a0-4295-ac40-5b679b82e42f.jpeg?im_w=480",
          },
          {
            isGuestFav: "",
            name: "Hyperlocal, foraged fare by Clair",
            offer: "From ₹4,296 / guest",
            rating: "5",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6073353/original/4b5b77b0-540a-4f76-9522-f83a5999e558.jpeg?im_w=480",
            min: "₹9,643 minimum",
          },
          {
            isGuestFav: "",
            name: "The Vegan Experience: Plant Based Private Chef",

            offer: "From ₹4,383 / guest",
            rating: "5",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6089040/original/5c28966a-17a0-4295-ac40-5b679b82e42f.jpeg?im_w=480",
          },
          {
            isGuestFav: "",
            name: "Hyperlocal, foraged fare by Clair",
            offer: "From ₹4,296 / guest",
            rating: "5",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6073353/original/4b5b77b0-540a-4f76-9522-f83a5999e558.jpeg?im_w=480",
            min: "₹9,643 minimum",
          },
          {
            isGuestFav: "",
            name: "The Vegan Experience: Plant Based Private Chef",

            offer: "From ₹4,383 / guest",
            rating: "5",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6089040/original/5c28966a-17a0-4295-ac40-5b679b82e42f.jpeg?im_w=480",
          },
        ],
      },
      {
        title: "Training",
        products: [
          {
            isGuestFav: "Popular",
            name: "Total Body Training by Peter",
            offer: "From ₹4,383 / guest",
            rating: "5",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6089040/original/5c28966a-17a0-4295-ac40-5b679b82e42f.jpeg?im_w=480",
            loc: "Pasadena, United States",
          },
          {
            isGuestFav: "Popular",
            name: "Personal Training & Group Fitness",

            offer: "From ₹7,609 / guest",
            rating: "5",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6073353/original/4b5b77b0-540a-4f76-9522-f83a5999e558.jpeg?im_w=480",
            loc: "Westmount, Canada",
          },
          {
            isGuestFav: "Popular",
            name: "Total Body Training by Peter",
            offer: "From ₹4,383 / guest",
            rating: "5",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6089040/original/5c28966a-17a0-4295-ac40-5b679b82e42f.jpeg?im_w=480",
            loc: "Pasadena, United States",
          },
          {
            isGuestFav: "Popular",
            name: "Personal Training & Group Fitness",

            offer: "From ₹7,609 / guest",
            rating: "5",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6073353/original/4b5b77b0-540a-4f76-9522-f83a5999e558.jpeg?im_w=480",
            loc: "Westmount, Canada",
          },
          {
            isGuestFav: "Popular",
            name: "Total Body Training by Peter",
            offer: "From ₹4,383 / guest",
            rating: "5",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6089040/original/5c28966a-17a0-4295-ac40-5b679b82e42f.jpeg?im_w=480",
            loc: "Pasadena, United States",
          },
          {
            isGuestFav: "Popular",
            name: "Personal Training & Group Fitness",

            offer: "From ₹7,609 / guest",
            rating: "5",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6073353/original/4b5b77b0-540a-4f76-9522-f83a5999e558.jpeg?im_w=480",
            loc: "Westmount, Canada",
          },
          {
            isGuestFav: "Popular",
            name: "Total Body Training by Peter",
            offer: "From ₹4,383 / guest",
            rating: "5",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6089040/original/5c28966a-17a0-4295-ac40-5b679b82e42f.jpeg?im_w=480",
            loc: "Pasadena, United States",
          },
          {
            isGuestFav: "Popular",
            name: "Personal Training & Group Fitness",

            offer: "From ₹7,609 / guest",
            rating: "5",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6073353/original/4b5b77b0-540a-4f76-9522-f83a5999e558.jpeg?im_w=480",
            loc: "Westmount, Canada",
          },
        ],
      },
      {
        title: "Massage",
        products: [
          {
            isGuestFav: "Popular",
            name: "Got Your Back London Massage Therapy",
            offer: "From ₹10,460 / guest",
            rating: "5",
            image:
              "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-Services-123/original/3f826a3d-a857-495f-b5e4-d3030897370d.jpeg?im_w=480",
            loc: "Greater London, United Kingdom",
          },
          {
            isGuestFav: "",
            name: "Recovery and relaxation by Deisy",

            offer: "From ₹4,383 per guest",
            rating: "4",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6073353/original/4b5b77b0-540a-4f76-9522-f83a5999e558.jpeg?im_w=480",
            loc: "Los Angeles, United States",
          },
          {
            isGuestFav: "Popular",
            name: "Got Your Back London Massage Therapy",
            offer: "From ₹10,460 / guest",
            rating: "5",
            image:
              "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-Services-123/original/3f826a3d-a857-495f-b5e4-d3030897370d.jpeg?im_w=480",
            loc: "Greater London, United Kingdom",
          },
          {
            isGuestFav: "",
            name: "Recovery and relaxation by Deisy",

            offer: "From ₹4,383 per guest",
            rating: "4",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6073353/original/4b5b77b0-540a-4f76-9522-f83a5999e558.jpeg?im_w=480",
            loc: "Los Angeles, United States",
          },
          {
            isGuestFav: "Popular",
            name: "Got Your Back London Massage Therapy",
            offer: "From ₹10,460 / guest",
            rating: "5",
            image:
              "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-Services-123/original/3f826a3d-a857-495f-b5e4-d3030897370d.jpeg?im_w=480",
            loc: "Greater London, United Kingdom",
          },
          {
            isGuestFav: "",
            name: "Recovery and relaxation by Deisy",

            offer: "From ₹4,383 per guest",
            rating: "4",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6073353/original/4b5b77b0-540a-4f76-9522-f83a5999e558.jpeg?im_w=480",
            loc: "Los Angeles, United States",
          },
          {
            isGuestFav: "Popular",
            name: "Got Your Back London Massage Therapy",
            offer: "From ₹10,460 / guest",
            rating: "5",
            image:
              "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-Services-123/original/3f826a3d-a857-495f-b5e4-d3030897370d.jpeg?im_w=480",
            loc: "Greater London, United Kingdom",
          },
          {
            isGuestFav: "",
            name: "Recovery and relaxation by Deisy",

            offer: "From ₹4,383 per guest",
            rating: "4",
            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6073353/original/4b5b77b0-540a-4f76-9522-f83a5999e558.jpeg?im_w=480",
            loc: "Los Angeles, United States",
          },
        ],
      },
      {
        title: "Make-up",
        products: [
          {
            isGuestFav: "",
            name: "Glam makeup and hair by Aljane",
            offer: "From ₹8,767 / guest",

            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6069696/original/6211244c-8944-467d-ad55-a6c87f5be1fc.jpeg?im_w=480",
            loc: "Los Angeles, United States",
          },
          {
            isGuestFav: "",
            name: "Vintage-inspired hair and makeup by Ria",

            offer: "From ₹10,520 / guest",

            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6069696/original/6211244c-8944-467d-ad55-a6c87f5be1fc.jpeg?im_w=480",
            loc: "Orlando, United States",
          },
          {
            isGuestFav: "",
            name: "Glam makeup and hair by Aljane",
            offer: "From ₹8,767 / guest",

            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6069696/original/6211244c-8944-467d-ad55-a6c87f5be1fc.jpeg?im_w=480",
            loc: "Los Angeles, United States",
          },
          {
            isGuestFav: "",
            name: "Vintage-inspired hair and makeup by Ria",

            offer: "From ₹10,520 / guest",

            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6069696/original/6211244c-8944-467d-ad55-a6c87f5be1fc.jpeg?im_w=480",
            loc: "Orlando, United States",
          },
          {
            isGuestFav: "",
            name: "Glam makeup and hair by Aljane",
            offer: "From ₹8,767 / guest",

            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6069696/original/6211244c-8944-467d-ad55-a6c87f5be1fc.jpeg?im_w=480",
            loc: "Los Angeles, United States",
          },
          {
            isGuestFav: "",
            name: "Vintage-inspired hair and makeup by Ria",

            offer: "From ₹10,520 / guest",

            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6069696/original/6211244c-8944-467d-ad55-a6c87f5be1fc.jpeg?im_w=480",
            loc: "Orlando, United States",
          },
          {
            isGuestFav: "",
            name: "Glam makeup and hair by Aljane",
            offer: "From ₹8,767 / guest",

            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6069696/original/6211244c-8944-467d-ad55-a6c87f5be1fc.jpeg?im_w=480",
            loc: "Los Angeles, United States",
          },
          {
            isGuestFav: "",
            name: "Vintage-inspired hair and makeup by Ria",

            offer: "From ₹10,520 / guest",

            image:
              "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6069696/original/6211244c-8944-467d-ad55-a6c87f5be1fc.jpeg?im_w=480",
            loc: "Orlando, United States",
          },
        ],
      },
    ],
  },
];

export const exportData = (): HomeDataType[] => {
  return data;
};
