import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata = {
   title: "Spaceship",
   description: "The Chat app 🧑‍💻 that is actually enjoyable 👍 to use 🚀",
};

const App = ({ children }: { children: React.ReactNode }) => {
   return (
      <html lang="en">
         <body>
            <ThemeProvider
               attribute="class"
               defaultTheme="dark"
               enableSystem
               disableTransitionOnChange>
               {children}
            </ThemeProvider>
         </body>
      </html>
   );
};

export default App;

