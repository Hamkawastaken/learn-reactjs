type ProfileCardProps = {
  name: string;
  email: string;
  age: number;
};

const ProfileCard = (props: ProfileCardProps) => {
  const { name = "Anonymous", email, age} = props
  return (
    <>
      <div
        style={{
          backgroundColor: "whitesmoke",
          color: "black",
          paddingRight: 10,
          paddingLeft: 10,
          margin: "10px",
          borderRadius: 10,
          display: "inline-block",
        }}
      >
        <h2>Profile Card</h2>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Age: {age}</p>
      </div>
    </>
  );
};

export default ProfileCard;
