import "./Header.css";

export default function Header() {
    return (
        <header className="header">
            <div className="header-name">
                <h1>Saveur Booking</h1>
            </div>

            <nav className="header-nav">
                <a href="#">Главная</a>
                <a href="#booking-form" className="header-nav-button">Забронировать</a>
            </nav>
        </header>
    );
}