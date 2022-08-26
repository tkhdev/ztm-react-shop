import Directory from "../../components/directory/directory.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://picsum.photos/500/500"
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://picsum.photos/500/500"
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://picsum.photos/500/500"
    },
    {
      id: 4,
      title: "mens",
      imageUrl: "https://picsum.photos/500/500"
    },
    {
      id: 5,
      title: "womens",
      imageUrl: "https://picsum.photos/500/500"
    }
  ];
  return <Directory categories={categories} />;
};

export default Home;
