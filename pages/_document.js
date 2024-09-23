import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      
      {/* <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
            integrity="sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOMjF8g+2Z96ua/I/aQb8hQQ7pZbJB3dP9sQvZJ"
            crossOrigin="anonymous"
          /> */}
         <Head>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
                integrity="sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOMi4S9jSkHx+eZYYVp41ApPKjB5URhSk3ZXIGJz"
                crossOrigin="anonymous"
            />
        </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
