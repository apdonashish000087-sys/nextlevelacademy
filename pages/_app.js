import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-900">
      <Component {...pageProps} />
      <p className="text-center text-lg text-gray-200 font-medium pt-4 pb-4 px-6">
        By your favourite,{" "}
        <a
          href="https://www.instagram.com/ashishpandey0315/"
          target="_blank"
          className="font-bold text-red-500"
        >
          Ashish Pandey ❤️
        </a>
      </p>
    </div>
  );
}

export default MyApp;
