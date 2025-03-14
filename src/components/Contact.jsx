/**
 * A React functional component that renders contact information.
 * 
 * @component
 * @returns {JSX.Element} The rendered contact information component.
 * 
 * @example
 *  Usage in a React application
 * import Contact from './Contact';
 * 
 * function App() {
 *   return (
 *     <div>
 *       <Contact />
 *     </div>
 *   );
 * }
 * 
 * export default App;
 */
export default function Contact() {
    return (
        <div className="contact">
            <h2>Contact</h2>
            <p>Email:<a href="mailto:elijahizkiel1995@gmail.com">elijahizkiel1995@gmail.com</a></p>
            <p>Phone: +251-970-637-381</p>
            <p>LinkedIn: <a target="_blank" href="https://www.linkedin.com/in/elias-alota-3541182b9">Elias Alota</a></p>
            <p>Address: Addis Ababa, Ethiopia</p>
            <p>GitHub: <a target="_blank" href="https://github.com/elijahizkiel">elijahizkiel</a></p>
        </div>
    );
}