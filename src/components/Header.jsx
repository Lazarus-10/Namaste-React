export const Title = () => (
    <a href="/">
        <img
            className="logo" 
            src="https://shorturl.at/MtILH" 
            alt="Logo" 

        />
    </a>
);

//Composing Components
const Header = () => {
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};
export default Header; //default exporting(but we can export default only one thing)

//another way to write 'export' keyword while declaring variable name(named import)
