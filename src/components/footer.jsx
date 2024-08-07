export default function Footer() {

  const getYear = () => {
    return new Date().getFullYear();
  }

  return (
    <footer className="bg-gray-800 p-5 text-white text-center">
      <p>&copy; {getYear()} Movie App</p>
    </footer>
  );
}