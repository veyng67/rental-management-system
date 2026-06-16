export default function Navbar() {
    return (
        <nav className="bg black text-white px-8 py-4 flex gap-6">
            <a href="/">Главная</a>
            <a href="/properties">недвижимость</a>
            <a href="/tenants">Арендаторы</a>
        </nav>
    );
}