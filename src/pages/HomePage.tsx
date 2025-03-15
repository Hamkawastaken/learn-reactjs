import ProfileCard from "../components/ProfileCard";

const HomePage = () => {
  
  type User = {
    id: number;
    name: string;
    email: string;
    age: number;
  };

  const users: User[] = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      age: 20,
    },
  ];

  return (
    <>
      <h1>Hello World</h1>

      <div>
        {users.map((user) => {
          return (
            <ProfileCard name={user.name} email={user.email} age={user.age} />
          );
        })}
      </div>
    </>
  );
};

export default HomePage;
